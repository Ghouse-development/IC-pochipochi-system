-- カテゴリのslugを意味のある英語名に更新
-- 実行日: 2026-01-14

-- exterior カテゴリ
UPDATE categories SET slug = 'exterior-wall' WHERE id = '891f237e-49c0-4375-b981-f5270bb2e17c'; -- 外壁
UPDATE categories SET slug = 'porch' WHERE id = '83beb78a-582e-4162-a10e-e5b5cad2c007'; -- ポーチ
UPDATE categories SET slug = 'porch-size' WHERE id = '0ec5ea40-8298-4de4-8535-e33c3aef2cfd'; -- ポーチサイズ拡張
UPDATE categories SET slug = 'porch-grout' WHERE id = 'aa99f26d-a3a7-40ec-a9b6-1132a1036e17'; -- ポーチタイル目地
UPDATE categories SET slug = 'roof' WHERE id = '918c2a82-45a8-49de-9fb8-341f7f6b2a2a'; -- 屋根
UPDATE categories SET slug = 'exterior-equipment' WHERE id = '6ab2ec3e-81c0-4d50-a38c-fa247dd56e23'; -- 外部設備
UPDATE categories SET slug = 'exterior-materials' WHERE id = '9e8d7b8d-29ae-4730-bb37-de3c46447eed'; -- 外部建材
UPDATE categories SET slug = 'soffit' WHERE id = 'e3415eea-ba4b-4910-ad7d-56abb14cc85d'; -- 軒天
UPDATE categories SET slug = 'canopy' WHERE id = 'ec64d8c4-8db0-465e-874d-5ad9cc26d75f'; -- 庇
UPDATE categories SET slug = 'garage-shutter' WHERE id = '4415aaf1-3432-46ac-ba26-4c911c16dc6b'; -- 電動ガレージシャッター
UPDATE categories SET slug = 'window-type' WHERE id = '9d0d9262-171a-4768-a930-c64db97b327c'; -- 窓タイプ
UPDATE categories SET slug = 'window' WHERE id = 'db57f398-40be-443d-9241-6daf83f7a2f3'; -- 窓
UPDATE categories SET slug = 'entrance-door' WHERE id = '12081305-1149-466c-9b01-388d1f9e865a'; -- 玄関ドア
UPDATE categories SET slug = 'water-heater' WHERE id = 'e7649d52-f2a0-4aee-9ff6-f2dc50bc67e6'; -- 給湯器
UPDATE categories SET slug = 'ventilation' WHERE id = '6940dd00-3643-4df3-9614-d8369afb50d2'; -- 換気システム選択
UPDATE categories SET slug = 'intercom-count' WHERE id = '1c15ad38-fab7-41c0-a63e-f83d6f755ced'; -- インターホン個数
UPDATE categories SET slug = 'solar' WHERE id = 'fd55d1e5-8843-4de8-ab5e-5898fa2c1eb6'; -- 太陽光
UPDATE categories SET slug = 'battery' WHERE id = 'ea06c74c-fb7b-4f2b-94d4-8ba3af34e442'; -- 蓄電池
UPDATE categories SET slug = 'v2h' WHERE id = 'bb87b908-323f-4c44-8d78-2862ceee4ea0'; -- V2H
UPDATE categories SET slug = 'ceiling-work' WHERE id = '6f95d7e5-51d9-46b7-aa43-4b984c978de0'; -- 天井変更工事
UPDATE categories SET slug = 'gas-line' WHERE id = '25f21f44-4d14-48ed-80ca-7b743c161c22'; -- ガス引込み
UPDATE categories SET slug = 'interior-window-ext' WHERE id = 'cc55c75b-5112-4d4b-9c8e-1ce2d928c67d'; -- 室内窓(exterior)
UPDATE categories SET slug = 'porch-tile' WHERE id = '642eb6ab-9dc0-44a1-9039-e400a9530581'; -- ポーチタイル（既存）
UPDATE categories SET slug = 'porch-grout-color' WHERE id = '82c79ca3-2eb5-4519-a1f8-c8c0f842e36c'; -- ポーチ目地色

-- interior カテゴリ
UPDATE categories SET slug = 'base-floor' WHERE id = 'd86c7ccf-9b93-4666-ace9-98a4d1845d21'; -- ベース床
UPDATE categories SET slug = 'ceiling' WHERE id = '908e7e2d-616d-4c79-942a-f9f32634d146'; -- 天井
UPDATE categories SET slug = 'indirect-lighting' WHERE id = '6f65ee69-db6d-4cc7-9b86-ae71ca51d73a'; -- 間接照明
UPDATE categories SET slug = 'stairs' WHERE id = '4d3eac7c-7eb5-40cd-8ee4-73b967f7caf8'; -- 階段
UPDATE categories SET slug = 'lattice' WHERE id = '3553f48e-2969-47d5-aa33-e0e80070c1b1'; -- 格子
UPDATE categories SET slug = 'counter' WHERE id = 'ce723b6a-0acf-4d1a-b804-3c0a99425903'; -- カウンター
UPDATE categories SET slug = 'toilet-storage' WHERE id = 'e99fbf26-f830-4106-a01a-3627c79e4292'; -- トイレ収納
UPDATE categories SET slug = 'curtain-box' WHERE id = '25787bc7-99ee-4773-8376-a9b2c1ae6b09'; -- カーテンBOX
UPDATE categories SET slug = 'base-door' WHERE id = 'ed9b76e8-5bc9-4c1a-972e-8d984e4c8b64'; -- ベース建具
UPDATE categories SET slug = 'room-storage' WHERE id = '7ae87a86-d529-4878-b90a-aa12ed729c33'; -- 居室収納
UPDATE categories SET slug = 'custom-work' WHERE id = 'd6c9850e-3749-4d9f-8f5f-cec6bfd090fd'; -- 造作
UPDATE categories SET slug = 'reinforcement' WHERE id = '4602d94d-b908-48c7-aeb2-359ef154c785'; -- 補強・下地
UPDATE categories SET slug = 'wall-material' WHERE id = 'c1d9ea09-c8bf-48c8-90d4-9ba3ee5cbe90'; -- 壁材
UPDATE categories SET slug = 'base-cross-wall' WHERE id = '0128b95b-fe58-44cc-8b55-f80e50beb51f'; -- ベースクロス（壁）
UPDATE categories SET slug = 'base-cross-ceiling' WHERE id = 'f5465968-923c-4625-b52c-391eaa206f3f'; -- ベースクロス（天井）
UPDATE categories SET slug = 'electrical' WHERE id = '9d44a358-f918-4bb7-83b3-1f5f9e93ae2b'; -- 電気設備
UPDATE categories SET slug = 'lighting' WHERE id = '462cd362-3794-404d-bf33-005c563199eb'; -- 照明
UPDATE categories SET slug = 'ventilation-int' WHERE id = 'cc7ad837-902f-4479-a15d-a848349bb91d'; -- 換気
UPDATE categories SET slug = 'handrail' WHERE id = '25d66775-3163-428e-a5dc-7475b6d9d781'; -- 手摺
UPDATE categories SET slug = 'clothes-line' WHERE id = '966a7a57-3aa6-4119-aefe-3c3c2256d0bf'; -- 物干し
UPDATE categories SET slug = 'water-equipment' WHERE id = 'a1bb532d-983b-4fbf-8e12-2c693c11090f'; -- 水回り設備
UPDATE categories SET slug = 'inspection-hatch' WHERE id = '94e463c4-5cf0-4d16-a234-281836725a10'; -- 点検口
UPDATE categories SET slug = 'other-storage' WHERE id = 'bd7286f1-b50e-4169-92ac-0272534a9b2d'; -- その他収納
UPDATE categories SET slug = 'peripheral-parts' WHERE id = '6708dfb0-f35f-4972-ae76-cb5b59da7b82'; -- 周辺部材
UPDATE categories SET slug = 'interior-window' WHERE id = '0023c4ba-5d6a-4ebb-a778-173d0a2ae823'; -- 室内窓
UPDATE categories SET slug = 'entrance-storage' WHERE id = 'd2633df1-6fac-4307-a847-7c633d18d304'; -- 玄関収納
UPDATE categories SET slug = 'equipment-int' WHERE id = '03b7cbb8-5b00-4fdf-960d-4cf0c7c4e26d'; -- 設備
UPDATE categories SET slug = 'switch' WHERE id = 'a6d79f77-7e23-445f-bfc1-15660dea5984'; -- スイッチ
UPDATE categories SET slug = 'outlet' WHERE id = '7be0d2fb-7b9d-42f8-b7ec-272aa6a09047'; -- コンセント
UPDATE categories SET slug = 'intercom' WHERE id = '1456ae35-9869-4eeb-9c74-31b442d28d52'; -- インターホン
UPDATE categories SET slug = 'gas-dryer' WHERE id = 'e826cc7f-bf05-4066-9021-01ee252cf404'; -- ガス乾燥機

-- equipment カテゴリ
UPDATE categories SET slug = 'kitchen' WHERE id = 'd9800759-54d6-4357-bc5f-7f2802c89b85'; -- キッチン
UPDATE categories SET slug = 'bathroom' WHERE id = '5422e1d1-9b60-4685-a4c3-64f54111299a'; -- バスルーム
UPDATE categories SET slug = 'toilet' WHERE id = '29ad3036-a147-4833-b1f1-fed59c9b9da9'; -- トイレ
UPDATE categories SET slug = 'vanity' WHERE id = 'da3b356b-1a45-40b6-9ec2-ae512033751c'; -- 洗面化粧台
UPDATE categories SET slug = 'water-heater-eq' WHERE id = '23a14f09-2818-4038-8a1e-a0dcaedb38cf'; -- 給湯器
UPDATE categories SET slug = 'entrance-sink' WHERE id = '3978fdfc-99f8-49b0-a547-23f5a28822bb'; -- 玄関手洗い
UPDATE categories SET slug = 'laundry' WHERE id = 'eabbf5fc-8368-4aa2-906b-7306d2bed678'; -- ランドリー
UPDATE categories SET slug = 'bathroom-equipment' WHERE id = '82f681a9-9d56-4179-9aaa-bd5b43878564'; -- バスルーム設備
