const https = require('https');

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// First, add the munsell_value column
const addColumnSQL = `
ALTER TABLE item_variants
ADD COLUMN IF NOT EXISTS munsell_value VARCHAR(20);
`;

// Function to make API request
function makeRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: SUPABASE_URL,
      port: 443,
      path: path,
      method: method,
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': 'Bearer ' + SERVICE_ROLE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, data: data });
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function checkConnection() {
  try {
    const result = await makeRequest('GET', '/rest/v1/items?limit=1', null);
    console.log('Connection test:', result.status === 200 ? 'OK' : 'Failed');
    return result.status === 200;
  } catch (err) {
    console.log('Connection error:', err.message);
    return false;
  }
}

checkConnection().then(ok => {
  if (ok) {
    console.log('Supabase connection successful!');
  } else {
    console.log('Connection failed');
  }
});
