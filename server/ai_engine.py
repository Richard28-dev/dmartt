#!/usr/bin/env python3
"""
DMart AI Shopping Engine (Python Backend Service)
Handles conversational shopping queries, product recommendations,
discount matchings, and interactive cart suggestions.
"""

import sys
import json
import re

KNOWLEDGE_BASE = [
    {
        "keywords": ["oil", "cooking", "fortune", "sunflower"],
        "category": "Groceries & Staples",
        "response": "For cooking essentials, we have Fortune Sunlite Sunflower Oil (1L) at ₹135 with 25% off MRP. It's a top DMart saver!",
        "recommend_product_name": "Fortune Sunlite Refined Sunflower Oil",
        "action": "RECOMMEND"
    },
    {
        "keywords": ["rice", "basmati", "daawat", "grain"],
        "category": "Groceries & Staples",
        "response": "Daawat Rozana Gold Basmati Rice (5 kg) is currently at ₹389 (29% off). Perfect for daily biryani and pulao.",
        "recommend_product_name": "Daawat Rozana Gold Basmati Rice",
        "action": "RECOMMEND"
    },
    {
        "keywords": ["phone", "smartphone", "mobile", "samsung", "5g"],
        "category": "Electronics & Gadgets",
        "response": "Check out our 3D featured Galaxy Ultra 5G Pro with 120Hz AMOLED and 200MP camera, on special promo for ₹24,999 (saving ₹5,000). You can even inspect the 3D model right on screen!",
        "recommend_product_name": "Galaxy Ultra 5G Pro Smartphone",
        "action": "RECOMMEND"
    },
    {
        "keywords": ["headphone", "earphone", "audio", "boat", "wireless"],
        "category": "Electronics & Gadgets",
        "response": "Looking for great sound? boAt Rockerz Wireless ANC Headphones are on deal at ₹1,499 (50% off MRP).",
        "recommend_product_name": "boAt Rockerz Wireless ANC Headphones",
        "action": "RECOMMEND"
    },
    {
        "keywords": ["coffee", "nescafe", "beverage", "tea"],
        "category": "Beverages & Dairy",
        "response": "Nescafe Classic Instant Coffee Jar (200g) is available for ₹399 with 20% discount. Rich aroma and morning fresh taste.",
        "recommend_product_name": "Nescafé Classic Instant Coffee Jar",
        "action": "RECOMMEND"
    },
    {
        "keywords": ["offer", "discount", "deal", "cheap", "best price", "sale", "save"],
        "category": "All",
        "response": "Today's Top DMart Deals:\n1. Fortune Sunflower Oil - 25% OFF\n2. Galaxy Ultra 5G Pro - ₹5,000 Instant Discount\n3. boAt Rockerz Headphones - 50% OFF\n4. Use coupon 'DMART50' at checkout for flat ₹50 extra off!",
        "recommend_product_name": "Fortune Sunlite Refined Sunflower Oil",
        "action": "PROMO_CODE"
    },
    {
        "keywords": ["payment", "phonepe", "gpay", "google pay", "cod", "upi"],
        "category": "Billing",
        "response": "We support PhonePe UPI QR code & UPI ID, Google Pay UPI, and Cash on Delivery (COD). You also receive an immediate downloadable GST tax invoice upon checkout!",
        "action": "PAYMENT_INFO"
    },
    {
        "keywords": ["delivery", "shipping", "time"],
        "category": "Service",
        "response": "Standard delivery takes 24-48 hours. Free delivery is applied for all orders above ₹499!",
        "action": "DELIVERY_INFO"
    }
]

def analyze_query(query_text, products=None):
    q = query_text.lower().strip()
    
    # 1. Check for Direct Cart Intent (e.g., "add rice to cart", "buy oil")
    add_match = re.search(r"(?:add|buy|get|put)\s+(.*?)(?:\s+to\s+cart|\s+in\s+cart|$)", q)
    if add_match and len(add_match.group(1).strip()) > 1:
        target_name = add_match.group(1).strip()
        return {
            "reply": f"Added '{target_name.title()}' recommendation to your attention! Click 'Add to Cart' to confirm.",
            "intent": "ADD_TO_CART",
            "target": target_name,
            "chips": ["View Cart", "Checkout Now", "More Deals"]
        }
        
    # 2. Check Match in Knowledge Base
    for item in KNOWLEDGE_BASE:
        for kw in item["keywords"]:
            if kw in q:
                return {
                    "reply": item["response"],
                    "intent": item.get("action", "RECOMMEND"),
                    "category": item.get("category"),
                    "recommend_product_name": item.get("recommend_product_name"),
                    "chips": ["Show Electronics", "Show Groceries", "View Cart"]
                }
                
    # 3. Default smart commercial assistant response
    return {
        "reply": f"Welcome to DMart 3D! I can help you find products, get maximum discounts, explore 3D product previews, and process payments via PhonePe, Google Pay, or Cash on Delivery. What are you looking for today?",
        "intent": "GENERAL_HELP",
        "chips": ["Top 3D Deals", "Groceries & Staples", "Payment Methods", "Discounts & Offers"]
    }

def main():
    if len(sys.argv) > 1:
        raw_input = sys.argv[1]
        try:
            payload = json.loads(raw_input)
            query = payload.get("query", "")
        except Exception:
            query = raw_input
    else:
        query = "hello"

    result = analyze_query(query)
    print(json.dumps(result))

if __name__ == "__main__":
    main()
