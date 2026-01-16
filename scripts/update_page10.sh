#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.3d3603ca-923e-4e44-b2d3-581113d7bb84" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG3310NK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.2922fef4-adfa-4e8f-afd0-7afd63e86941" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG342NK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.7153440b-cceb-4d5d-b73c-d07c3018c3a8" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG181NK"}'

# munsell_value更新 - コルモストーン調プレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.45c4d04b-eadf-49ca-b83b-1a04498a311e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.c95c411e-38cb-4684-b59b-f3d4db2745be" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5B 3/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.1780873a-35ab-4ce4-957d-34f7589e976c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5YR 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.7b571e2e-3d6d-49ec-bc6f-2c015ac9c7da" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 4/3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.8cb46c44-e7f8-48e6-a7a8-73a798f3a97a" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.c8e2cc5d-53d7-405f-bb6b-5887aecc743c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 3/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.a6943bf3-b94f-466d-a517-9655f08edbd7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5YR 4/1"}'

# munsell_value更新 - リーガストーン調プレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.5f5ee03e-e241-4ea9-8a3e-09c0f7ca4732" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 4/3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.2c1111c8-90b3-45bb-88a7-9d16a1916eeb" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.7e486949-2f65-44a4-bb14-8339a5b5aa46" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.3baa9537-5055-41b1-af4e-7a561f64b316" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10RP 2/1"}'

# munsell_value更新 - リントロック調プレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.75f6395c-0b7a-449c-8b26-aabd135ac1fb" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f26919fc-adff-441d-8656-3ae828f78354" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f48f6cd4-d252-4401-8e76-55b635d5ab63" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 3/2"}'

echo "Done updating page 10"
