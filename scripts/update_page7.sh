#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1/item_variants"

# スティルランバー プレミアム
curl -s -X PATCH "$BASE_URL?id=eq.271a78cd-007f-4d20-9201-6d2f7b8d8a39" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.98845088-1aa5-44f6-82ff-3b1b2c242f5f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 3/4"}'
curl -s -X PATCH "$BASE_URL?id=eq.50d3e793-56e5-4a78-a948-737c3b8f4ddc" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 3/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.da5808e9-810b-4270-b31e-5381145132f2" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 2/1"}'

# ミルシュタイン プレミアム
curl -s -X PATCH "$BASE_URL?id=eq.317da397-579f-407a-9449-b28c679da79b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5R 7/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.5a69440c-043f-4530-9037-8196b91e6246" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 3"}'
curl -s -X PATCH "$BASE_URL?id=eq.f6febc10-7750-46a0-b3fe-d7e3c132bf08" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 4"}'

echo "Done updating munsell values for page 7"
