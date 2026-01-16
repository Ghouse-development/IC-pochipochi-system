#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新
curl -s -X PATCH "$BASE_URL/items?id=eq.adda5b47-921d-48d1-94e5-784ccecef771" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.kmew.co.jp/shouhin/siding/EH7483K/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.e0ac879e-b4b2-48b0-abf7-86545240f0d8" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.konoshima.co.jp/product/exterior/artemur/"}'

# munsell_value更新 - 新フラット16
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.8667d67c-4e20-4944-a912-2e325a213b74" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "4.6Y 8.7/0.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.cd395aaa-eb06-4ada-9430-901f29b1cf11" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2Y 8.2/0.9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.0e3a84ee-a081-4276-bfe2-6554ae93d04a" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1.3Y 7.3/1.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.f8db3d4c-f8f6-427d-806a-073af172c8ed" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5.6Y 7/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.1e7be59a-976e-45e8-a892-8ab2e2011e0d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.4Y 6.9/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.dcb2d65d-60d9-4157-83f3-61448d93f42b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "5.1GY 6.4/0.1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.5723bbc9-88a8-47b5-bec2-a3ed77b8c714" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.1Y 5.7/0.8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.6c69df57-412b-4b77-b715-10b908343d8a" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.5Y 6/1"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.2cd292e5-8606-4832-b38a-adb13f7d0c48" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.2R 3.7/0.2"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.14a71f51-454d-4487-a235-7f50d2f7096b" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "0.3P 3.3/0.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9294d5f7-df4e-4b0a-9e47-150e191dc44e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "4.3Y 4.5/0.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.14d24a0e-eb4d-4e83-878e-dab69c0bbde3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.8Y 4/0.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.1767ce7e-4f40-45e0-86f8-451744eb236d" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "4.2YR 3.7/0.7"}'

# munsell_value更新 - アルテミュール (KONOSHIMA)
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.43c4fae6-760e-425a-b62a-af302ce0d0d1" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "8.8YR 6.3/3.4"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.27d105f1-51d8-4865-bd44-b26d59b50013" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.9YR 4.7/5.3"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.fd84cb73-8afc-41d7-b867-7ea0df82631e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "8.9YR 7.2/3.9"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b9ee673f-d08e-4205-9cb4-548a90fb935e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "8.5YR 6/0.5"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.23abf865-67c9-4ecf-a65f-abc0ceab331e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "6.4YR 4.3/1.8"}'
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.491775da-c61d-4027-943e-7ec7a67485af" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "6.3YR 3.8/1.7"}'

echo "Done updating page 16"
