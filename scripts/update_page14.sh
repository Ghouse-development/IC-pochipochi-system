#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新 (KMEW products)
curl -s -X PATCH "$BASE_URL/items?id=eq.001a75bc-a49a-4aad-9224-3d914c72d3b7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5201/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.27cb3574-13b7-4284-8423-2854e887fde0" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5441/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.43de27bf-99c1-440c-bbc8-49fae80f136f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5231U/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.044f84e0-1301-404b-bd9b-f253a666d739" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5641A/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.1c148de6-c98b-49c6-b526-e64cc8223521" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5761A/"}'

# munsell_value更新 - ハーモレイド
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.cf16a12d-31aa-41b5-9da3-f3edf628a1d8" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2Y 7.7/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.ae40df74-fd28-48a8-9c41-d41d7b03c634" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "0.4Y 7.7/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f0c0b687-c587-4116-b7a0-117c8b50d1f3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 4/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9d8d7f1e-7009-48b4-af60-a489252d0b14" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/0.5"}'

# munsell_value更新 - モダンスリット18
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9511e986-ad36-4c04-8947-d575b7ffbd9a" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2Y 8.2/0.9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.31fbf63d-594b-46a6-98f9-1d11eeeed2d7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5PB 4/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.d9d0cc55-3737-4d92-9181-a22e5205a52f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f873ffdf-ce52-402d-8bb8-0e0cd08bcda3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5YR 4/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.04920446-7ebe-4df2-993e-616264bbf111" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/0.5"}'

# munsell_value更新 - レスティ
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b943fe4f-20ae-4195-b333-7e96ce0d7221" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.7PB 8.7/0.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.d305be99-4d9e-4cd4-b698-0d0e06a40954" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1.3Y 7.3/1.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.82602a61-02c3-4b68-9c64-71ea35c91169" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1.7Y 7.8/1.1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.117d516e-a453-4a65-96f3-8b25e15a7617" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "0.5PB 3.9/0.5"}'

# munsell_value更新 - ニューインプレース18
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.e35e37a3-629a-4920-9499-31c974ff8bbc" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.2Y 7.6/0.7"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.2cd171cf-8d99-4dfc-a7b7-56e1f6bdba96" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "0.9Y 6.9/0.8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f8576144-3ff1-4433-8cf0-73e8c3982a61" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.6YR 4.8/0.5"}'

# munsell_value更新 - 木枠コンクリート調18
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6cc78438-08c1-4e30-a616-23aef907c782" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.8RP 5.9/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6069d985-97bd-4dad-9d26-504e64a1fa28" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "8.4YR 6/0.6"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.20b466c0-ef57-4223-ac0c-1919acd41643" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5.3YR 5.7/0.4"}'

echo "Done updating page 14"
