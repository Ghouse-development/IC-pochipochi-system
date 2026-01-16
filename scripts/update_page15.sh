#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新 (KMEW products)
curl -s -X PATCH "$BASE_URL/items?id=eq.44bc4b14-b427-46d4-9a7b-3c1bedc365eb" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH4971A/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.cf4c2a59-70bc-49cb-b157-66140cdce91d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5882U/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.62f5ce01-05e5-4c5a-b033-133bc2ca3021" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/EH7531H/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.3c0b0c9b-aee3-4bc3-86f2-ce18d02634d8" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/NH5921A/"}'

# munsell_value更新 - フィエルテ
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.4b679bd4-75c8-41fd-9453-804d3f4cdccd" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.6RP 7.2/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6a93def8-2757-406e-b5b0-16b785a1b30e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.6YR 4.1/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.8206e530-389e-4c45-adc6-c214a5b88000" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.7Y 7.5/0.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.20743511-f506-4b6b-b6c1-ebac32eb878d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "9.5YR 4.9/0.8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b7c77c86-eaf8-47fc-8654-930bcd8bf29b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "6.2R 5.4/0.5"}'

# munsell_value更新 - シンプルストライプ
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.012ff4c9-fb70-4c27-a49e-274a27d25d64" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.7RB 8.7/0.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.2250bd38-a61b-42f8-8c9a-b231e994b7ee" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "9.5R 4/0.1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.316ea953-e367-4343-bb9e-97758a936a16" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.2Y 3.6/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f26ff578-2655-44cc-b307-05247aaf598e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5PB 4/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.4b44c2b8-ca9d-412b-b179-065f35e46592" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/0.5"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.64ca57fe-9f24-4ba5-b1b9-d1a37159d61c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.1P 2.9/0.2"}'

# munsell_value更新 - シックイフラット
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f9b7732d-bf31-4867-8f18-eac351517531" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.4Y 8/0.9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f770b4f0-181d-43cf-a8b6-48bc0053a5a6" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1.7Y 6.7/1.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.1510ecd5-66cf-448e-9d95-3c11c4001e4b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "0.5Y 5.2/0.6"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.d32738ee-e5a6-44c1-bc84-c9c0fbdebcdc" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5.5RP 4/0.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.375777f1-9693-4983-9b39-2e2026ae04cc" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.3RP 3.3/0.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.1c9a6c8d-7904-480c-a7a2-6a05993cc755" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7PB 3.2/0.4"}'

# munsell_value更新 - カンタービレ
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.82a7cbaa-33ad-4195-bde2-0c0f80abe112" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2Y 8.2/0.9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.4109ba7c-b484-46ce-b618-690420827700" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2Y 6.1/1.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.e02e36b7-25c5-4380-a995-182dc663cdd2" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.2dfa3ae3-ebeb-4a99-962d-3d9dc3b0de65" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2Y 5.3/0.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.65c29056-25bb-45e8-b597-d0c0c60f6a7b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "9.5R 4/0.1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.4575374a-b06f-4122-8218-bbcae12d206f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.3RP 3.4/0.2"}'

echo "Done updating page 15"
