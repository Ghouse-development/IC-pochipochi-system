#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract interior and water equipment products from G-House specification master CSV
"""

import csv
import json
from collections import defaultdict

def clean_value(value):
    """Clean and normalize CSV values"""
    if value is None:
        return ""
    return str(value).strip()

def extract_products():
    """Extract products from the CSV file"""
    csv_file = r"C:\Users\nishino\Downloads\【Gハウス仕様書マスタ】　20250429 - 【マスタデータ】.csv"

    # Categories we're interested in
    interior_categories = {
        '内装': 'Interior',
        '階段': 'Stairs',
        '床材': 'Flooring',
        '収納': 'Storage',
        '室内ドア': 'Interior Doors',
        '階段用腰壁': 'Stair Wainscoting',
        '吹き抜け用腰壁': 'Atrium Wainscoting',
        '内装（ベース）': 'Interior Base',
        '内装(アクセント)': 'Interior Accent',
        'ニッチ': 'Niche',
        '補強・下地': 'Reinforcement/Foundation'
    }

    water_equipment_categories = {
        '給湯器': 'Water Heater',
        '水栓': 'Water Faucets',
        '外部水栓等': 'External Water Faucets',
        '玄関手洗い': 'Entrance Washbasin',
        'スロップシンク': 'Slop Sink',
        '洗濯機混合水栓': 'Washing Machine Mixed Faucet',
        'ナノバブル発生装置': 'Nano-bubble Generator'
    }

    # Kitchen and bathroom related items (we'll search for these in subcategories)
    water_keywords = ['キッチン', 'バス', '浴室', 'トイレ', '洗面', '給湯', '水栓', '排水']

    all_categories = {**interior_categories, **water_equipment_categories}

    products = defaultdict(lambda: defaultdict(list))

    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            header = next(reader)  # Skip header

            for row_num, row in enumerate(reader, start=2):
                if len(row) < 26:  # Ensure we have enough columns
                    continue

                # Extract key fields
                category1 = clean_value(row[0])
                category2 = clean_value(row[1])
                category3 = clean_value(row[2])
                product = clean_value(row[3])
                product_name = clean_value(row[4])
                color = clean_value(row[6])
                unit = clean_value(row[13])
                manufacturer = clean_value(row[14])
                model_number = clean_value(row[15])

                # Price columns (LIFE, LIFE+, HOURS, LACIE)
                price_life = clean_value(row[18])
                price_life_plus = clean_value(row[19])
                price_hours = clean_value(row[20])
                price_lacie = clean_value(row[21])

                # Skip empty rows
                if not any([category1, category2, category3, product, product_name]):
                    continue

                # Check if this is an interior or water equipment item
                is_interior = False
                is_water_equipment = False
                main_category = ""

                # Check direct category matches
                if category1 in all_categories:
                    main_category = category1
                    if category1 in interior_categories:
                        is_interior = True
                    else:
                        is_water_equipment = True

                # Check for water equipment keywords in any category or product fields
                text_to_search = f"{category1} {category2} {category3} {product} {product_name}".lower()
                if any(keyword in text_to_search for keyword in water_keywords):
                    is_water_equipment = True
                    if not main_category:
                        main_category = "水廻り関連" # Water equipment related

                # Check for additional interior categories
                if category2 and any(term in category2 for term in ['クロス', '壁', '天井', '床', 'フローリング', 'カーペット']):
                    is_interior = True
                    if not main_category:
                        main_category = category1 if category1 else "内装"

                if is_interior or is_water_equipment:
                    # Create product entry
                    product_entry = {
                        'row_number': row_num,
                        'category1': category1,
                        'category2': category2,
                        'category3': category3,
                        'product': product,
                        'product_name': product_name,
                        'color': color,
                        'unit': unit,
                        'manufacturer': manufacturer,
                        'model_number': model_number,
                        'prices': {
                            'LIFE': price_life,
                            'LIFE+': price_life_plus,
                            'HOURS': price_hours,
                            'LACIE': price_lacie
                        },
                        'type': 'Interior' if is_interior else 'Water Equipment'
                    }

                    # Organize by main category and subcategory
                    subcategory = category2 if category2 else category3 if category3 else "その他"
                    products[main_category][subcategory].append(product_entry)

    except Exception as e:
        print(f"Error reading CSV: {e}")
        return None

    return dict(products)

def format_output(products):
    """Format the extracted products into a readable structure"""
    if not products:
        return "No products found."

    output = []
    output.append("# G-HOUSE SPECIFICATION MASTER - INTERIOR & WATER EQUIPMENT PRODUCTS")
    output.append("=" * 80)
    output.append("")

    # Interior Products
    interior_found = False
    for main_cat, subcategories in products.items():
        has_interior = any(item['type'] == 'Interior' for subcat in subcategories.values() for item in subcat)
        if has_interior:
            if not interior_found:
                output.append("## INTERIOR PRODUCTS (内装)")
                output.append("-" * 40)
                interior_found = True

            output.append(f"\n### {main_cat}")

            for subcat, items in subcategories.items():
                interior_items = [item for item in items if item['type'] == 'Interior']
                if interior_items:
                    output.append(f"\n#### {subcat}")

                    for item in interior_items:
                        output.append(f"**Product:** {item['product'] or item['product_name']}")
                        if item['manufacturer']:
                            output.append(f"**Manufacturer:** {item['manufacturer']}")
                        if item['model_number']:
                            output.append(f"**Model:** {item['model_number']}")
                        if item['color']:
                            output.append(f"**Color:** {item['color']}")
                        if item['unit']:
                            output.append(f"**Unit:** {item['unit']}")

                        # Prices
                        prices = []
                        for plan, price in item['prices'].items():
                            if price and price != '0':
                                prices.append(f"{plan}: ¥{price}")
                        if prices:
                            output.append(f"**Prices:** {' | '.join(prices)}")

                        output.append("")

    # Water Equipment Products
    water_found = False
    for main_cat, subcategories in products.items():
        has_water = any(item['type'] == 'Water Equipment' for subcat in subcategories.values() for item in subcat)
        if has_water:
            if not water_found:
                output.append("\n## WATER EQUIPMENT PRODUCTS (水廻り)")
                output.append("-" * 40)
                water_found = True

            output.append(f"\n### {main_cat}")

            for subcat, items in subcategories.items():
                water_items = [item for item in items if item['type'] == 'Water Equipment']
                if water_items:
                    output.append(f"\n#### {subcat}")

                    for item in water_items:
                        output.append(f"**Product:** {item['product'] or item['product_name']}")
                        if item['manufacturer']:
                            output.append(f"**Manufacturer:** {item['manufacturer']}")
                        if item['model_number']:
                            output.append(f"**Model:** {item['model_number']}")
                        if item['color']:
                            output.append(f"**Color:** {item['color']}")
                        if item['unit']:
                            output.append(f"**Unit:** {item['unit']}")

                        # Prices
                        prices = []
                        for plan, price in item['prices'].items():
                            if price and price != '0':
                                prices.append(f"{plan}: ¥{price}")
                        if prices:
                            output.append(f"**Prices:** {' | '.join(prices)}")

                        output.append("")

    return "\n".join(output)

if __name__ == "__main__":
    print("Extracting products from G-House specification master...")
    products = extract_products()

    if products:
        # Save detailed data as JSON
        with open('extracted_products.json', 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=2)

        # Create formatted output
        formatted_output = format_output(products)

        # Save formatted output
        with open('products_report.md', 'w', encoding='utf-8') as f:
            f.write(formatted_output)

        print(f"Extraction complete!")
        print(f"Found {sum(len(subcat) for cat in products.values() for subcat in cat.values())} total products")
        print("Files saved:")
        print("- extracted_products.json (detailed data)")
        print("- products_report.md (formatted report)")

        # Print summary
        print("\nSummary by category:")
        for main_cat, subcategories in products.items():
            total_items = sum(len(items) for items in subcategories.values())
            print(f"  {main_cat}: {total_items} items")
    else:
        print("Failed to extract products")