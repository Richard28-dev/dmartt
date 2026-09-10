# DMart 3D — Interactive Commercial E-Commerce Superstore

An interactive 3D commercial e-commerce platform built with React + Three.js, Node.js + Express, Python AI engine, and MongoDB.

## 🌟 Features
- **Interactive 3D Product Viewer** — Drag, rotate, zoom, wireframe mode, live color customizer
- **Full E-Commerce Flow** — Product catalog, cart management, coupon codes, billing
- **Indian Payments** — PhonePe UPI (QR + ID), Google Pay UPI, Cash on Delivery (COD)
- **GST Tax Invoice** — Auto-generated printable/PDF invoice with CGST/SGST breakdown
- **Authentication** — Email/Password + Google + Facebook login (JWT-based)
- **AI Shopping Assistant** — Python-powered chatbot with product recommendations & 1-click cart
- **MongoDB Backend** — Persistent products, users, and orders

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Three.js, Lucide React, Vanilla CSS |
| Backend | Node.js, Express.js |
| AI Engine | Python 3 (ai_engine.py) |
| Database | MongoDB (Mongoose ODM) |
| Auth | JWT, bcryptjs, Google OAuth |
| Payments | PhonePe UPI, Google Pay UPI, COD |

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### 2. Set Up Environment
Create `server/.env`:
```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/dmartt
JWT_SECRET=dmart_super_secret_jwt_key_2026
```

### 3. Seed the Database
```bash
cd server
node seed.js
```

### 4. Start the Servers
```bash
# Terminal 1 — Backend
cd server && node server.js

# Terminal 2 — Frontend
cd client && npm run dev
```

Open **http://localhost:5173/**

## 💳 Test Coupons
| Code | Discount |
|---|---|
| `DMART50` | ₹50 flat off |
| `SAVE100` | ₹100 flat off |

## 📁 Project Structure
```
dmartt/
├── client/            ← React + Three.js Frontend
│   └── src/
│       ├── components/
│       └── context/
└── server/            ← Node.js + Express Backend
    ├── controllers/
    ├── models/
    ├── ai_engine.py   ← Python AI Shopping Engine
    └── seed.js        ← MongoDB Seeder
```

## 🤖 AI Assistant Queries
- `"deals on oil"` → Recommends Fortune Sunflower Oil  
- `"5G phone"` → Shows Galaxy Ultra 5G with 3D View  
- `"offers today"` → Lists all discounts + coupon `DMART50`  
- `"payment methods"` → Explains PhonePe, GPay, COD  
- `"add coffee to cart"` → Triggers cart intent  

---
Made with ❤️ by Richard — Built with Antigravity AI
