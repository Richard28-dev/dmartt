import React from 'react';
import { ShoppingCart, Search, User as UserIcon, LogOut, MapPin, Box } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenAuth, onSearchChange, searchTerm }) {
  const { totalItemsCount, totalAmount, openCart } = useCart();
  const { user, logout } = useAuth();

  return (
    <>
      {/* Top Banner */}
      <div className="header-top">
        <div className="container header-top-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={14} color="#f59e0b" />
            <span>Delivery to: <strong>Mumbai, 400001</strong> (Standard 24hr slot)</span>
          </div>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <span>📞 24x7 DMart Helpline: 1800-266-0000</span>
            <span>💳 PhonePe & GPay UPI Accepted</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="nav-container">
          {/* Brand Logo */}
          <div className="logo-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-icon-3d">
              <Box size={24} />
            </div>
            <div>
              <div className="logo-title">DMart <span style={{ color: 'var(--primary)' }}>3D</span></div>
              <div className="logo-subtitle">Interactive Commercial Superstore</div>
            </div>
          </div>

          {/* Search Box */}
          <div className="search-bar-wrapper">
            <Search size={18} className="search-icon-pos" />
            <input
              type="text"
              placeholder="Search groceries, gadgets, daily staples, 3D products..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="nav-actions">
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="btn-nav-action" style={{ background: '#e8f5e9' }}>
                  <img
                    src={user.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=user'}
                    alt="avatar"
                    style={{ width: 24, height: 24, borderRadius: '50%' }}
                  />
                  <span>{user.name.split(' ')[0]}</span>
                </div>
                <button
                  className="btn-nav-action"
                  onClick={logout}
                  title="Logout"
                  style={{ padding: '0.55rem' }}
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button className="btn-nav-action" onClick={onOpenAuth}>
                <UserIcon size={18} />
                <span>Sign In / Join</span>
              </button>
            )}

            {/* Cart Trigger */}
            <button className="btn-cart-action" onClick={openCart}>
              <ShoppingCart size={20} />
              <span>₹{totalAmount}</span>
              {totalItemsCount > 0 && (
                <span className="cart-count-badge">{totalItemsCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
