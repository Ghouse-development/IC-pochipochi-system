import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Handle GET request - list all projects (bypasses RLS)
async function handleGetProjects(req: VercelRequest, res: VercelResponse) {
  if (!SERVICE_ROLE_KEY) {
    console.error('SUPABASE_SERVICE_ROLE_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Get authorization token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.substring(7);

  try {
    // Create client with anon key to verify the token
    const supabaseAuth = createClient(SUPABASE_URL, ANON_KEY || '', {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Verify the token and get user
    const { data: { user: authUser }, error: authError } = await supabaseAuth.auth.getUser(token);
    if (authError || !authUser) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Use service role to fetch projects (bypasses RLS)
    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data: projects, error: projectsError } = await supabaseAdmin
      .from('projects')
      .select(`
        *,
        product:products(*)
      `)
      .order('created_at', { ascending: false });

    if (projectsError) {
      console.error('Error fetching projects:', projectsError);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }

    return res.status(200).json({ projects: projects || [] });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

interface CreateProjectRequest {
  // Customer info
  customer: {
    id?: string; // 既存ユーザーの場合はIDを指定
    name: string;
    furigana?: string;
    email: string;
    phone?: string;
    postalCode?: string;
    address?: string;
  };
  // Project info
  planType: string;
  projectCode?: string;
  projectName?: string;
  // Building info
  buildingInfo: {
    fire_zone: string;
    salt_zone?: string;
    snow_zone?: string;
    fire_resistance: string;
    construction_method: string;
    floors: string;
    ceiling_height_1f: string;
    ground_improvement?: string;
    damper: string;
    module: string;
    certifications?: string;
  };
  // Rooms
  rooms: Array<{
    id: string;
    name: string;
    floor: number;
    type: string;
  }>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle GET request - list all projects
  if (req.method === 'GET') {
    return handleGetProjects(req, res);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SERVICE_ROLE_KEY) {
    console.error('SUPABASE_SERVICE_ROLE_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Authorization check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.substring(7);

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Verify token
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !authUser) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const body: CreateProjectRequest = req.body;

    // Validate required fields
    if (!body.customer?.name || !body.customer?.email) {
      return res.status(400).json({ error: 'Customer name and email are required' });
    }

    // 1. Get or create customer user
    let customerId: string | null = null;

    // 既存ユーザーIDが指定されている場合はそれを使用
    if (body.customer.id) {
      // Verify the user exists
      const { data: existingUser, error: verifyError } = await supabase
        .from('users')
        .select('id')
        .eq('id', body.customer.id)
        .single();

      if (verifyError || !existingUser) {
        console.error('Specified user not found:', body.customer.id);
        return res.status(400).json({ error: 'Specified user not found' });
      }
      customerId = existingUser.id;
    } else {
      // Check if user already exists by email
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', body.customer.email)
        .single();

      if (existingUser) {
        customerId = existingUser.id;
      } else {
        // Create new user (customer)
        const { data: newUser, error: userError } = await supabase
          .from('users')
          .insert({
            email: body.customer.email,
            full_name: body.customer.name,
            full_name_kana: body.customer.furigana || null,
            phone: body.customer.phone || null,
            role: 'user',
            is_active: true,
          })
          .select()
          .single();

        if (userError) {
          console.error('Error creating customer:', userError);
          return res.status(500).json({ error: 'Failed to create customer' });
        }
        customerId = newUser.id;
      }
    }

    // 2. Generate project code if not provided
    const projectCode = body.projectCode || `PRJ-${Date.now().toString(36).toUpperCase()}`;
    const projectName = body.projectName || `${body.customer.name}様邸`;

    // 3. Map floors string to number
    const floorsMap: Record<string, number> = {
      '1f': 1,
      '2f': 2,
      '3f': 3,
    };
    const floorsNum = floorsMap[body.buildingInfo.floors] || 2;

    // 4. Get product ID by plan type
    const { data: product } = await supabase
      .from('products')
      .select('id')
      .eq('code', body.planType)
      .single();

    // 5. Create project
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .insert({
        project_code: projectCode,
        name: projectName,
        product_id: product?.id || null,
        status: 'draft',
        customer_name: body.customer.name,
        customer_id: customerId,
        construction_address: body.customer.address || null,
        region_category: body.buildingInfo.fire_zone,
        fire_resistance: body.buildingInfo.fire_resistance,
        construction_method: body.buildingInfo.construction_method,
        floors: floorsNum,
        ceiling_height: parseInt(body.buildingInfo.ceiling_height_1f) || null,
        // Store additional building info in a JSON note field or we can add columns later
        note: JSON.stringify({
          salt_zone: body.buildingInfo.salt_zone,
          snow_zone: body.buildingInfo.snow_zone,
          ground_improvement: body.buildingInfo.ground_improvement,
          damper: body.buildingInfo.damper,
          module: body.buildingInfo.module,
          certifications: body.buildingInfo.certifications,
          customer_phone: body.customer.phone,
          customer_postal_code: body.customer.postalCode,
          customer_furigana: body.customer.furigana,
        }),
        rooms: body.rooms,
        created_by: authUser.id,
      })
      .select()
      .single();

    if (projectError) {
      console.error('Error creating project:', projectError);
      return res.status(500).json({ error: 'Failed to create project', details: projectError.message });
    }

    // 6. Generate customer URL
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://ic-pochipochi-system.vercel.app';
    const customerUrl = `${baseUrl}/customer?project=${project.id}&email=${encodeURIComponent(body.customer.email)}`;

    return res.status(200).json({
      success: true,
      project: {
        id: project.id,
        code: project.project_code,
        name: project.name,
      },
      customerId,
      customerUrl,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
