#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1/item_variants"

# グレインウッドV
curl -s -X PATCH "$BASE_URL?id=eq.a6c73f2b-dd3e-4c63-9f18-e405da969258" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5PB 2/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.551b45f7-9e9f-4a40-a133-84286d773ed5" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 7/2"}'
curl -s -X PATCH "$BASE_URL?id=eq.46283ad2-2d35-4279-add2-2e90b578aabf" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10R 3/3"}'
curl -s -X PATCH "$BASE_URL?id=eq.d8018aad-03b2-4d8f-8d18-2ef7c4af14a9" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/2"}'

# マイスターウッド調V
curl -s -X PATCH "$BASE_URL?id=eq.fe24ccca-2ff2-4f8e-b8b3-8f4b219020c2" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10R 3/3"}'
curl -s -X PATCH "$BASE_URL?id=eq.0df4e021-d6d5-440f-b385-f4dba5c97596" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10R 3/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.1d5c6b5a-b412-43a3-9a2f-34b6d6f18b67" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 3/2"}'
curl -s -X PATCH "$BASE_URL?id=eq.bd2b01ba-dd81-4a48-b8ab-4e00941233a7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.ac342f7e-e084-4a40-8acf-d7c189866742" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5GY 5/1"}'

# しぶきV
curl -s -X PATCH "$BASE_URL?id=eq.6cdfa856-45c7-4b01-b5ba-c851441fb0b7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 9/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.51f91b7e-feeb-490d-8128-3808a54d5a8e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 8/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.fe9d2226-e229-47fd-bfe9-5d92dd6bd501" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 8/2"}'
curl -s -X PATCH "$BASE_URL?id=eq.b47e6675-409a-44bf-93a8-614ea7058c70" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/3"}'
curl -s -X PATCH "$BASE_URL?id=eq.c2c7ad57-ad87-4ada-b160-e539ca8c1630" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 4/3"}'
curl -s -X PATCH "$BASE_URL?id=eq.f99964fa-cdd7-4e62-9820-260c13dca0e2" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 9/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.3934144d-25f2-459f-8e2f-81451784661b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 6/1"}'

echo "Done updating munsell values for page 5"
