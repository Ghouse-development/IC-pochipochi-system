#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新 (KMEW SOLIDO)
curl -s -X PATCH "$BASE_URL/items?id=eq.1a2d0d9f-e792-4e4e-a1ff-2327b2088caa" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/solido/"}'

# munsell_value更新 - SOLIDO typeM_LAP (ext-wall-solido-*)
# 鉄黒（てつぐろ）SMG72G
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9329c12b-87c0-4373-97e6-0899df063e21" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N3.5"}'
# セメント SMG85G
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9981de7a-7393-41ae-967d-1edc3aa00225" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N5.0"}'
# 錆茶（さびちゃ）SMG21G
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.14d3b959-ad72-4c60-a7cb-e25225ba325f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10R 3.5/1.0"}'
# 灰（はい）SMG65G
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.892da405-9066-498f-97c1-514232ef8c2c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 4.0"}'

echo "Done updating page 19"
