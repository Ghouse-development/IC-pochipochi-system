#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.2531e59c-3bf0-41e1-91e0-17c1d1b3c8b1" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.nichiha.co.jp/wallsearch/item?item_id=EFM508P"}'

# munsell_value更新 - COOL イルミオ
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f7520e84-1322-4122-81d2-21a782d6e989" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 6"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.8069c4e7-64ce-493f-b203-41b62870cef2" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5YR 4/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b77a2223-4ccc-4e23-8db0-6de3e419f3a7" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 3/2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f70cfd57-1a01-4743-94ce-97c68cb5e742" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9893aad4-dd8f-4c98-9970-5496f510f6ba" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.8bff7cc9-11bb-4c02-bf04-99f65e035013" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 9/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.28e18be6-e738-445f-a99c-ed204b226678" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "N 7"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.e5d3f9eb-6303-499b-b3fc-830801ebe054" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10Y 8/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.e1eb3bae-9eed-4608-9a6e-063c445ebd19" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 5/4"}'

echo "Done updating page 13"
