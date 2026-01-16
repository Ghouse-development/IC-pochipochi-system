#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.b6850a67-6634-4c05-a0fd-9aa7bd2ae2c9" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG721NK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.8acf53e1-2380-4866-a10a-3d2d6fc1a868" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG946YK"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.44a6b3f4-61ec-4d0c-8231-724f967eb432" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=ELG386FK"}'

# munsell_value更新 - マグート プレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.8548a58a-20c6-43dd-ae3e-0b5df9b872b3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.4fdd3c9d-7c80-4d1f-b8dc-dd2523e267aa" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.d5763ab2-3c19-4f33-a03b-a31aff6d4f36" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 2/1"}'

# munsell_value更新 - フラーグ プレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.be40383e-cbf5-4b28-a813-63c05d6f6be3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 7"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.ddb3453f-042c-45cf-9935-8b7414507a4e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5B 3/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.215d9b0a-90df-4f3c-bd03-07b911bf0e52" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.a49de2a7-affd-4fa2-85be-22160f5b264a" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.e12c17cf-83f8-459d-8839-62f8bd8646f2" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 3/2"}'

# munsell_value更新 - フィーノ調 プレミアム
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.220d86cb-df5e-40f1-b7b7-ffd09cac4d71" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f23db2ba-10ed-4c8b-8f34-4d53d120d4ce" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9727d524-ad81-4281-8c8e-e68fe1746101" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 8/1"}'

echo "Done updating page 11"
