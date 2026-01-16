#!/bin/bash
API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo"
BASE_URL="https://qqzqffkiyzeaampotgnn.supabase.co/rest/v1"

# catalog_url更新 (IG工業 products)
curl -s -X PATCH "$BASE_URL/items?id=eq.4b56c96a-049b-4235-b244-a8483edfb12c" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.igkogyo.co.jp/syohin/sp_bilect/"}'
curl -s -X PATCH "$BASE_URL/items?id=eq.8b675614-7c81-4f9e-9fa7-2fc92d99dccf" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"catalog_url": "https://www.igkogyo.co.jp/syohin/galuspan/"}'

# munsell_value更新 - SPビレクト (ext-wall-sp-birect-*)
# マットブラック SPI1-301
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.36053f54-b8b0-4f59-9dda-8a861c2cb879" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1PB 2.1/0.3"}'
# クールブラウン SPI1-383
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.25fdbe49-f58d-4889-be73-f445b949da56" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "9.34YR 2.65/0.52"}'
# クールネイビー SPI1-384
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.b0d35dea-fc2d-4917-86f4-a85dc764a8ac" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.3PB 2.4/2.4"}'
# モスグリーン SPI1-394
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.170532c7-439f-4074-8016-475b1f2de640" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.5G 3.2/1"}'
# スマートガンメタ SPI1-305
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.672fa4e5-c5ef-4abd-8232-6ddfb55fdeb3" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.0RP 3.4/0.3"}'
# ダークグレー SPI1-315
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.569d3876-c46c-4d44-adbf-640d39466710" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "4.79PB 3.2/0.66"}'
# ライトアッシュ SPI1-318
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.044d5ef5-ab5e-4094-862e-9e50fb4e6248" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "4.54PB 5.8/1.08"}'
# ネオホワイト SPI1-370
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.252e1641-eb25-4d44-a5cb-61fd89071b6a" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.8Y 8.5/0.2"}'

# munsell_value更新 - ガルスパン (ext-wall-galuspan-*)
# ネオブラック SPJ1-310
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.ebd8d91e-5531-4adf-b030-9f09297d8aa6" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "9.3B 1.8/0.3"}'
# ビターブラウン SPJ1-358
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.d4268c18-e195-4c2b-9410-8cc73e072763" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.6Y 1.7/0.8"}'
# グランブルー SPJ1-387
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.98bae87f-1504-46f4-a631-9d82c595c64f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1.8PB 2.2/2.6"}'
# モスグリーン SPJ1-394
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.a0e4fb15-ac4d-48ed-bef4-fc80ebf26d3f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.5G 3.2/1.0"}'
# シャンパンメタリック SPJ1-393
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.9464e583-8679-4815-b7c0-b60ddf4bf19f" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "9.6Y 6.4/0.4"}'
# シルバーメタリック SPJ1-306
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.2ee39ae5-4383-4255-b869-1472cbc27cbf" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "7.9B 6.8/0.1"}'
# ダークメタリック SPJ1-380
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.572a9280-6703-479b-bf59-ebb7378f5e69" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.3R 2.3/0.3"}'
# チタングレーメタリック SPJ1-391
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.3c96134e-15d3-4423-b514-1eec6de49f85" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "1.0G 4.7/0.3"}'
# オータムレッド SPJ1-361
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.7f60bb2f-76d1-46e2-af36-0e0ffe6fa316" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.1YR 2.4/4.8"}'
# カスタードイエロー SPJ1-355
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.fe86be37-4640-485c-bbfd-62d3b40af8d9" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "3.0Y 8.2/4.3"}'
# ミストアイボリー SPJ1-337
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.aa8bd8d9-24d8-4936-b370-53ebd844dd1e" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.6Y 7.8/1.0"}'
# ネオホワイト SPJ1-370
curl -s -X PATCH "$BASE_URL/item_variants?id=eq.76d81192-e15a-46fa-b0c0-078393b47679" -H "apikey: $API_KEY" -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"munsell_value": "2.8Y 8.5/0.2"}'

echo "Done updating page 17"
