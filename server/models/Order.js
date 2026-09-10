import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  mrp: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  unit: { type: String, default: '1 pc' }
});

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    invoiceNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true }
    },
    items: [orderItemSchema],
    subtotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    taxAmount: { type: Number, default: 0 }, // 5% GST on commercial items
    deliveryFee: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
    savingsAmount: { type: Number, default: 0 },
    paymentMethod: { 
      type: String, 
      required: true,
      enum: ['phonepe', 'gpay', 'cod']
    },
    paymentStatus: { 
      type: String, 
      default: 'PENDING',
      enum: ['PENDING', 'COMPLETED', 'CASH_ON_DELIVERY']
    },
    transactionId: { type: String, default: '' },
    orderStatus: { 
      type: String, 
      default: 'CONFIRMED',
      enum: ['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED']
    }
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
