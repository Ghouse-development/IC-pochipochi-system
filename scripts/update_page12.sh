#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.5900f341-f0c5-48a6-b12f-2e8c65a07d0c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=EPS241NK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.5762da42-776f-4ab0-9c7d-c99d1f28aa5b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=EQG415EK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.aa010ce6-b655-443c-bfdd-8ed165ce9756" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=EPA321GK"}'

# munsell_value更新 - フラットウォール
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.a05a7a54-2635-4d4f-9c73-92226dbcdaa4" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f5258220-a4c2-430d-a761-590664572547" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.765a95f3-1db2-4d14-a87c-1ef4dd8e2d68" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5YR 6/1"}'

# munsell_value更新 - ルビドフラット
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.333451e5-183d-4200-ae57-3a9200f89df5" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.0b8cb3ee-3455-46df-852b-c033bcb785ef" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.0f4de8cf-9ea0-4ba0-bac0-a162a0362535" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.c58b73c5-d792-4ca4-b3b9-407c943060f5" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 7"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.93f48cba-906b-41f6-a9eb-d3e60ae4329e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 6"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.3968e16a-0ef2-4a89-b7b8-bcdd373009b5" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5YR 4/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b7e8fb15-fc30-416d-9994-85633c03e210" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 3/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.021aafb3-4934-47f1-a0fc-9f7879cd68b7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 4"}'

# munsell_value更新 - トリル
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.49ca3291-a61e-4240-9938-ba1db634df2b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f2f73aa1-3b7f-4546-8122-1145e075eead" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.16c16012-d2fe-439f-b69c-77a7b93c0aad" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6c66a116-1748-4d53-b3c4-af13e7713caa" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5PB 2/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6d66c030-f5a2-4550-8ddc-b3f2333a4d2d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 3/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.ae8ac8b1-f04a-4ab1-bf49-9295257e7861" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5R 3/6"}'

echo "Done updating page 12"
