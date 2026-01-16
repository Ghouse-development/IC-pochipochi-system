#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.a9bb62cc-66a2-41d2-8c7a-00b2efc363e4" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELS421P"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.7677f350-ed2e-4544-ab19-b6f41af3c62b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELS431P"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.dbda0055-4262-44b6-b347-5bdd2a481a90" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELS461F"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.fada7333-7634-4026-8291-ce017213087f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELS446E"}'

# munsell_value更新 - プリレート
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.7fbfce3d-c672-4c25-b0b9-14bc633576a5" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.e599f578-a018-4841-94da-03f1ebcf7c2f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.603ef3de-1f6e-4b9b-b520-5aebe7c4d388" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 7/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.610882ad-e73f-49d9-aca2-303f07f4614f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5P 2/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.110acc08-f4df-4bf5-9fad-7041c7316b89" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5B 2/1"}'

# munsell_value更新 - ルボン
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.69ab0c85-10f7-45c3-92da-9da8bc8c88f4" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.aa2488f2-c11a-472c-81d2-6a1c9fbc86d3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 4/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.062bafa4-3a05-4af1-8a64-db849949eb74" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 3/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.26a70474-1b77-45ec-89d5-fe5c2c20adc4" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5PB 2/1"}'

# munsell_value更新 - シントア
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.4ff41e45-968b-43ac-83dc-ed432a1cc1cf" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.021deb49-daf1-4d3d-b97f-51e74238e1a8" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 8/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.dfe928da-5405-4032-b38f-a20c8fac0351" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5P 2/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f0e9b72f-e17d-493b-93fb-57796686c668" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 7/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.738c7d55-df0d-4587-8492-78a7651a1ce7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5PB 3/1"}'

# munsell_value更新 - スプーモ
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.55b8cdc5-3cbf-440f-a4b3-eed7e14827fa" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.14b30297-b8ba-4cc7-b329-2bd6efe02097" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.19342ad9-e122-4ced-8d00-cb216f904710" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 7/1"}'

echo "Done updating page 8"
