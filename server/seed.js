import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dmartt';

const sampleProducts = [
  {
    name: 'Galaxy Ultra 5G Pro Smartphone',
    category: 'Electronics & Gadgets',
    brand: 'Samsung / TechCorp',
    mrp: 29999,
    price: 24999,
    unit: '1 unit (8GB RAM / 256GB)',
    description: 'Flagship 5G smartphone with 120Hz dynamic AMOLED display, 200MP OIS camera, and 5000mAh battery. Explore in full 3D!',
    rating: 4.8,
    reviewsCount: 342,
    inStock: true,
    badge: '3D SHOWCASE',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'smartphone',
      primaryColor: '#1e293b',
      secondaryColor: '#38bdf8',
      accentColor: '#0f172a',
      metalness: 0.85,
      roughness: 0.2,
      scale: 1.0
    },
    specs: [
      { key: 'Display', value: '6.7 inch Dynamic AMOLED 120Hz' },
      { key: 'Processor', value: 'Octa-Core 4nm AI Engine' },
      { key: 'Camera', value: '200MP + 12MP + 10MP Telephoto' },
      { key: 'Battery', value: '5000 mAh with 45W Fast Charging' }
    ]
  },
  {
    name: 'boAt Rockerz Wireless ANC Headphones',
    category: 'Electronics & Gadgets',
    brand: 'boAt',
    mrp: 2999,
    price: 1499,
    unit: '1 unit (Matte Black)',
    description: 'Over-ear wireless headphones with Active Noise Cancellation, 40mm drivers, and up to 30 hours of continuous playtime.',
    rating: 4.6,
    reviewsCount: 890,
    inStock: true,
    badge: '50% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'headphone',
      primaryColor: '#0f172a',
      secondaryColor: '#ef4444',
      accentColor: '#334155',
      metalness: 0.7,
      roughness: 0.35,
      scale: 1.1
    },
    specs: [
      { key: 'Driver Size', value: '40mm Dynamic Bass' },
      { key: 'Battery Life', value: '30 Hours ASAP Charge' },
      { key: 'ANC', value: 'Up to 25dB Noise Reduction' }
    ]
  },
  {
    name: 'Fortune Sunlite Refined Sunflower Oil',
    category: 'Groceries & Staples',
    brand: 'Fortune',
    mrp: 180,
    price: 135,
    unit: '1 Litre Pouch',
    description: 'Healthy and light refined sunflower oil fortified with Vitamins A & D. Ideal for daily Indian cooking and deep frying.',
    rating: 4.7,
    reviewsCount: 1540,
    inStock: true,
    badge: 'SUPER SAVER',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'pouch',
      primaryColor: '#eab308',
      secondaryColor: '#ffffff',
      accentColor: '#ca8a04',
      metalness: 0.2,
      roughness: 0.6,
      scale: 0.95
    },
    specs: [
      { key: 'Volume', value: '1 Litre' },
      { key: 'Diet Type', value: 'Vegetarian' },
      { key: 'Fortified', value: 'With Vitamins A & D' }
    ]
  },
  {
    name: 'Daawat Rozana Gold Basmati Rice',
    category: 'Groceries & Staples',
    brand: 'Daawat',
    mrp: 550,
    price: 389,
    unit: '5 kg Bag',
    description: 'Aged long grain aromatic Basmati rice, perfect for every day meals, biryanis, and festive celebrations.',
    rating: 4.5,
    reviewsCount: 620,
    inStock: true,
    badge: 'BESTSELLER',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'box',
      primaryColor: '#15803d',
      secondaryColor: '#fef08a',
      accentColor: '#166534',
      metalness: 0.1,
      roughness: 0.8,
      scale: 1.05
    },
    specs: [
      { key: 'Weight', value: '5 kg' },
      { key: 'Grain Length', value: 'Long Grain Premium' },
      { key: 'Aging', value: 'Aged for Fluffy Texture' }
    ]
  },
  {
    name: 'Nescafé Classic Instant Coffee Jar',
    category: 'Beverages & Dairy',
    brand: 'Nestlé',
    mrp: 499,
    price: 399,
    unit: '200g Glass Jar',
    description: '100% pure natural coffee beans roasted to perfection, delivering rich aroma and distinctive signature taste.',
    rating: 4.8,
    reviewsCount: 970,
    inStock: true,
    badge: '20% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'jar',
      primaryColor: '#78350f',
      secondaryColor: '#dc2626',
      accentColor: '#b45309',
      metalness: 0.4,
      roughness: 0.25,
      scale: 0.95
    },
    specs: [
      { key: 'Net Quantity', value: '200g' },
      { key: 'Roast Level', value: 'Medium-Dark Roast' },
      { key: 'Origin', value: 'Premium Robusta & Arabica' }
    ]
  },
  {
    name: 'Amul Pure Cow Ghee Tin',
    category: 'Beverages & Dairy',
    brand: 'Amul',
    mrp: 680,
    price: 595,
    unit: '1 Litre Tin',
    description: 'Traditional aroma and golden granular texture. Made from fresh cow milk fat, rich in vitamins.',
    rating: 4.9,
    reviewsCount: 2100,
    inStock: true,
    badge: 'PURE QUALITY',
    imageUrl: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'can',
      primaryColor: '#facc15',
      secondaryColor: '#1d4ed8',
      accentColor: '#ca8a04',
      metalness: 0.8,
      roughness: 0.3,
      scale: 0.9
    },
    specs: [
      { key: 'Net Weight', value: '1 Litre' },
      { key: 'Packaging', value: 'Airtight Tin Can' }
    ]
  },
  {
    name: 'Dove Deeply Nourishing Body Wash',
    category: 'Personal Care',
    brand: 'Dove',
    mrp: 375,
    price: 279,
    unit: '800 ml Pump Bottle',
    description: 'NutriumMoisture technology delivers natural nutrients to skin. Leaves skin softer and smoother after just one shower.',
    rating: 4.6,
    reviewsCount: 750,
    inStock: true,
    badge: 'HOT DEAL',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'bottle',
      primaryColor: '#f8fafc',
      secondaryColor: '#2563eb',
      accentColor: '#38bdf8',
      metalness: 0.1,
      roughness: 0.3,
      scale: 1.05
    },
    specs: [
      { key: 'Volume', value: '800 ml' },
      { key: 'Skin Type', value: 'All Skin Types' }
    ]
  },
  {
    name: 'Prestige Omega Deluxe Non-Stick Cookware Set',
    category: 'Home & Living',
    brand: 'Prestige',
    mrp: 3200,
    price: 2199,
    unit: 'Set of 3 (Fry Pan, Omni Tawa, Kadai)',
    description: '3-layer non-stick coating with granite finish. Induction and gas compatible with ergonomic cool-touch handles.',
    rating: 4.7,
    reviewsCount: 430,
    inStock: true,
    badge: '31% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1584990347449-39c27771764c?w=600&auto=format&fit=crop&q=80',
    model3d: {
      type: 'box',
      primaryColor: '#334155',
      secondaryColor: '#f97316',
      accentColor: '#1e293b',
      metalness: 0.6,
      roughness: 0.4,
      scale: 1.2
    },
    specs: [
      { key: 'Material', value: 'Aluminium with Granite Finish' },
      { key: 'Warranty', value: '2 Years Manufacturer Warranty' }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Product.deleteMany({});
    console.log('Cleared existing products.');

    for (const p of sampleProducts) {
      const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
      await Product.create({ ...p, discountPercentage: discount });
    }

    console.log(`Successfully seeded ${sampleProducts.length} commercial products with 3D specifications!`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seedDatabase();
