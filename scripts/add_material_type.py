#!/usr/bin/env python3
"""外壁・床材製品データにmaterialTypeを追加するスクリプト"""

import re

def add_material_type_to_exterior():
    """外壁製品にmaterialTypeを追加"""
    with open('src/data/exteriorProducts.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # ニチハ、KMEW → 窯業系サイディング
    # IG工業 → 金属サイディング
    # AICA → 塗り壁

    # 外壁カテゴリの製品を検出してmaterialTypeを追加
    # パターン: categoryName: '外壁', の後に manufacturer があるものを探す

    lines = content.split('\n')
    new_lines = []
    in_exterior_product = False
    manufacturer = None

    for i, line in enumerate(lines):
        new_lines.append(line)

        # 外壁カテゴリかどうか確認
        if "categoryName: '外壁'" in line:
            in_exterior_product = True

        # メーカーを取得
        if in_exterior_product and "manufacturer: '" in line:
            match = re.search(r"manufacturer: '([^']+)'", line)
            if match:
                manufacturer = match.group(1)

                # materialTypeを決定
                if manufacturer in ['ニチハ', 'KMEW', 'KONOSHIMA']:
                    material_type = '窯業系サイディング'
                elif manufacturer == 'IG工業':
                    material_type = '金属サイディング'
                elif manufacturer == 'AICA':
                    material_type = '塗り壁'
                else:
                    material_type = None

                # materialTypeを追加（manufacturerの次の行に）
                if material_type:
                    indent = '    '  # 4スペースのインデント
                    new_lines.append(f"{indent}materialType: '{material_type}',")

                in_exterior_product = False
                manufacturer = None

    with open('src/data/exteriorProducts.ts', 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))

    print("外壁製品データにmaterialTypeを追加しました")


def add_material_type_to_interior():
    """床材製品にmaterialTypeを追加"""
    with open('src/data/interiorProducts.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    new_lines = []
    in_floor_product = False

    for i, line in enumerate(lines):
        new_lines.append(line)

        # 床材カテゴリかどうか確認
        if "categoryName: '床材'" in line:
            in_floor_product = True

        # subcategoryを取得してmaterialTypeを決定
        if in_floor_product and "subcategory: '" in line:
            match = re.search(r"subcategory: '([^']+)'", line)
            if match:
                subcategory = match.group(1)

                # subcategoryからmaterialTypeを決定
                material_type = None
                if subcategory == 'フローリング':
                    # descriptionを確認する必要があるので、次の処理で判断
                    pass
                elif subcategory == '無垢床':
                    material_type = '無垢'
                elif subcategory == 'フロアタイル':
                    material_type = 'フロアタイル'
                elif subcategory == 'CFシート':
                    material_type = 'CFシート'
                elif subcategory == 'カーペットタイル':
                    material_type = 'カーペットタイル'
                elif subcategory == 'タイル':
                    material_type = 'タイル'

                if material_type:
                    indent = '    '
                    new_lines.append(f"{indent}materialType: '{material_type}',")

                in_floor_product = False

    # フローリングは別途処理（シートor突板）
    content = '\n'.join(new_lines)

    # ベリティス → シート
    content = re.sub(
        r"(name: 'ベリティスフロアーベースコート',\n)",
        r"\1    materialType: 'シート',\n",
        content
    )

    # ライブナチュラル → 突板
    content = re.sub(
        r"(name: 'ライブナチュラルMRX 2P',\n)",
        r"\1    materialType: '突板',\n",
        content
    )
    content = re.sub(
        r"(name: 'ライブナチュラルMSX/MSX-L',\n)",
        r"\1    materialType: '突板',\n",
        content
    )

    with open('src/data/interiorProducts.ts', 'w', encoding='utf-8') as f:
        f.write(content)

    print("床材製品データにmaterialTypeを追加しました")


if __name__ == '__main__':
    add_material_type_to_exterior()
    add_material_type_to_interior()
