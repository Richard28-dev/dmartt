import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { 
      type: String, 
      required: true,
      enum: ['Groceries & Staples', 'Electronics & Gadgets', 'Beverages & Dairy', 'Personal Care', 'Home & Living']
    },
    brand: { type: String, default: 'DMart Choice' },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    unit: { type: String, default: '1 pc' },
    description: { type: String, required: true },
    rating: { type: Number, default: 4.5 },
    reviewsCount: { type: Number, default: 120 },
    inStock: { type: Boolean, default: true },
    badge: { type: String, default: '' }, // e.g. 'BESTSELLER', 'SUPER SAVER', 'NEW 3D'
    imageUrl: { type: String, default: '' },
    // 3D rendering configuration parameters
    model3d: {
      type: { 
        type: String, 
        enum: ['can', 'bottle', 'box', 'smartphone', 'headphone', 'coffee_cup', 'jar', 'pouch'],
        default: 'box' 
      },
      primaryColor: { type: String, default: '#094cb2' },
      secondaryColor: { type: String, default: '#fee77e' },
      accentColor: { type: String, default: '#ffffff' },
      metalness: { type: Number, default: 0.3 },
      roughness: { type: Number, default: 0.4 },
      scale: { type: Number, default: 1.0 }
    },
    specs: [{ key: String, value: String }]
  },
  { timestamps: true }
);

// Calculate discount percentage before saving
productSchema.pre('save', function (next) {
  if (this.mrp && this.price) {
    this.discountPercentage = Math.round(((this.mrp - this.price) / this.mrp) * 100);
  }
  next();
});

export default mongoose.model('Product', productSchema);
