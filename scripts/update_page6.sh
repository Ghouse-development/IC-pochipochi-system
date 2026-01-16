#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1/item_variants"

# アフェットV
curl -s -X PATCH "$BASE_URL?id=eq.0c446993-bce2-4494-9a63-be8e02288f7e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 3/2"}'
curl -s -X PATCH "$BASE_URL?id=eq.631966a0-7d09-46da-a6a3-77fd8ebd8799" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10YR 5/2"}'
curl -s -X PATCH "$BASE_URL?id=eq.0db3b086-1841-4848-9ee7-1a337cc5f8cf" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 5/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.4498c227-b60e-4b76-9cb8-56f9c32613bf" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5Y 6/1"}'

# ロックラインV
curl -s -X PATCH "$BASE_URL?id=eq.7242bfc6-7ab9-45cc-90c2-8269bc2261c9" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 9/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.ed1e0dfd-9e8a-4835-9913-823cbe3ddb7d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 8/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.0799b441-0c63-46a9-8d2a-69311157fe4b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5YR 8/1"}'

# ナチュラルラインV
curl -s -X PATCH "$BASE_URL?id=eq.dfd4cdeb-6055-4f94-a718-32319ae74488" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5YR 8/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.154f35b7-065a-4038-9a24-5fd077089104" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 8/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.11fee51b-bb72-4182-9e11-38b36cbc8cea" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.5R 3/1"}'
curl -s -X PATCH "$BASE_URL?id=eq.79563cf0-39af-4d5d-8c0c-9e219022b227" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "10PB 2/2"}'

echo "Done updating munsell values for page 6"
