#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.fd6df64d-dd08-4367-85a6-6f9207f8386c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG2412NK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.58d63506-aa60-4e83-90c8-ff64dc56815f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG762FK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.d0dae6c7-8b5b-4203-aa52-1acb9f72baff" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG432NK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.bac1ba5f-f003-4031-b449-8d0bb374ef63" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG283FK"}'

# munsell_value更新 - キャスティングウッド
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.c0e2cb4e-64ca-4468-b694-74c6aeb82771" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5GY 2/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9a424bab-5440-41b1-89e0-ff5962979561" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 4/4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.d9a0ce96-f890-49f7-a242-cb4ce7f04c63" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.899ddfc5-7d50-4e72-a7be-e6c205719a15" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 7/4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.c30a71c1-f3fe-4aed-9451-12d86f506e9b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5RP 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.c91d19d2-c089-41e9-ad7c-ed487ec391f7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 5/6"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b13f7617-341d-475b-9486-26fbb6d11dcd" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 4/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.1ca6235f-8783-4e2b-a516-3cbb550d0936" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.866c8985-556a-43f0-9f54-9d10b5b11e14" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/1"}'

# munsell_value更新 - ヴィンテージウッド
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.29f182b2-0885-493c-8455-b017515c0128" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5YR 4/3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.fd77199d-7c00-4fec-a32b-12462a3d18d5" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 4/6"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.11e1a04e-dcf8-4296-ab3f-d3cbfccd832d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 6/3"}'

# munsell_value更新 - コンクリートプレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.946d868d-ca0b-494e-85fb-4849113d9454" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 7/1"}'

# munsell_value更新 - シャルムロック
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.cd15aef2-c67f-40f0-96bf-56c769078ac1" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 2/3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6d4ee316-5472-48ee-9d0b-1c07e8905faa" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 3/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.fd47b3ba-b386-436f-a7a5-684de04acf50" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/1"}'

echo "Done updating page 9"
