import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductGrid from './components/ProductGrid';
import Product3DModal from './components/Product3DModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import InvoiceModal from './components/InvoiceModal';
import AuthModal from './components/AuthModal';
import AIAssistant from './components/AIAssistant';
import { useCart } from './context/CartContext';
import { ShieldCheck, Truck, RotateCcw, CreditCard, Heart } from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [loading, setLoading] = useState(true);

  // Modals
  const [inspectProduct, setInspectProduct] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [completedInvoice, setCompletedInvoice] = useState(null);

  // Fetch initial products and categories
  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = `${API_BASE}/products?`;
      if (selectedCategory && selectedCategory !== 'All') {
        url += `category=${encodeURIComponent(selectedCategory)}&`;
      }
      if (searchTerm) {
        url += `search=${encodeURIComponent(searchTerm)}&`;
      }
      if (sortBy !== 'default') {
        url += `sort=${encodeURIComponent(sortBy)}&`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error('Failed to load products:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API_BASE}/products/categories`);
      const data = await res.json();
      setCategories(data || []);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 250);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredProduct = products.find((p) => p.badge?.includes('SHOWCASE')) || products[0];

  const handleOrderPlaced = (order, invoice) => {
    setIsCheckoutOpen(false);
    setCompletedOrder(order);
    setCompletedInvoice(invoice);
  };

  return (
    <div className="app-layout">
      {/* Navigation */}
      <Navbar
        onOpenAuth={() => setIsAuthOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Hero with 3D Interactive Viewer */}
      <Hero3D
        featuredProduct={featuredProduct}
        onInspect3D={(p) => setInspectProduct(p)}
      />

      {/* Trust Badges Banner */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', padding: '1.2rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <Truck size={22} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Fast Doorstep Delivery</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Same day & 24hr guaranteed slots</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={22} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>100% Quality Assurance</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Direct from verified distributors</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <CreditCard size={22} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>PhonePe, GPay & COD</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Zero payment friction & tax invoices</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <RotateCcw size={22} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Easy 7-Day Returns</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Hassle-free replacement policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog */}
      <main>
        <ProductGrid
          products={products}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onInspect3D={(p) => setInspectProduct(p)}
          loading={loading}
        />
      </main>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '3.5rem 0 1.5rem 0', marginTop: '4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.8rem' }}>DMart 3D</h4>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#94a3b8' }}>
              India's premier high-value retail superstore, reimagined with interactive 3D product previews, instant UPI payments, and intelligent AI shopping support.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '0.95rem' }}>Quick Categories</h5>
            <ul style={{ listStyle: 'none', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#94a3b8' }}>
              <li>Groceries & Staples</li>
              <li>Electronics & Gadgets</li>
              <li>Beverages & Dairy</li>
              <li>Personal Care & Hygiene</li>
              <li>Home & Living Essentials</li>
            </ul>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '0.95rem' }}>Supported Payments</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <span style={{ background: '#1e293b', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>PhonePe UPI</span>
              <span style={{ background: '#1e293b', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>Google Pay</span>
              <span style={{ background: '#1e293b', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>Cash on Delivery</span>
              <span style={{ background: '#1e293b', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#ffffff' }}>RuPay Cards</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              Instant GST Invoice generation on all orders.
            </p>
          </div>

          <div>
            <h5 style={{ color: '#ffffff', marginBottom: '0.8rem', fontSize: '0.95rem' }}>Customer Care</h5>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Toll-Free: 1800-266-0000<br />
              Email: support@dmart3d.com<br />
              Mon - Sun: 7:00 AM to 11:00 PM
            </p>
          </div>
        </div>

        <div className="container" style={{ borderTop: '1px solid #334155', paddingTop: '1.2rem', textAlign: 'center', fontSize: '0.78rem', color: '#64748b' }}>
          © {new Date().getFullYear()} DMart 3D Retail Commercial Platform. All rights reserved.
        </div>
      </footer>

      {/* Modals & Drawers */}
      <CartDrawer onProceedCheckout={() => setIsCheckoutOpen(true)} />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderPlaced={handleOrderPlaced}
      />

      {completedOrder && (
        <InvoiceModal
          order={completedOrder}
          invoice={completedInvoice}
          onClose={() => setCompletedOrder(null)}
        />
      )}

      {inspectProduct && (
        <Product3DModal
          product={inspectProduct}
          onClose={() => setInspectProduct(null)}
        />
      )}

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Interactive AI Shopping Assistant */}
      <AIAssistant onInspect3D={(p) => setInspectProduct(p)} />
    </div>
  );
}
