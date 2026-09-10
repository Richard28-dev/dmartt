import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { register, login, googleAuth, getMe } from './controllers/authController.js';
import { getProducts, getProductById, getCategories } from './controllers/productController.js';
import { createOrder, getOrderById, getOrderByInvoice } from './controllers/orderController.js';
import { chatWithAI } from './controllers/aiController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dmartt';

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date(), service: 'DMart 3D Commercial API' });
});

// Authentication
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.post('/api/auth/google', googleAuth);
app.get('/api/auth/me', getMe);

// Products & Categories
app.get('/api/products', getProducts);
app.get('/api/products/categories', getCategories);
app.get('/api/products/:id', getProductById);

// Orders & Invoices & Payments
app.post('/api/orders', createOrder);
app.get('/api/orders/:id', getOrderById);
app.get('/api/orders/invoice/:invoiceNumber', getOrderByInvoice);

// Python AI Assistant
app.post('/api/ai-assistant/chat', chatWithAI);

// Database Connection & Server Start
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected successfully to MongoDB (dmartt database)');
    app.listen(PORT, () => {
      console.log(`DMart Backend Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });
