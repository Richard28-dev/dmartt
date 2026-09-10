import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Tag, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ onProceedCheckout }) {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    mrpTotal,
    discountAmount,
    taxAmount,
    deliveryFee,
    totalAmount,
    savingsAmount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponError
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
    }
  };

  return (
    <>
      <div className="cart-drawer-backdrop" onClick={closeCart} />
      <aside className="cart-drawer">
        {/* Drawer Header */}
        <div className="modal-header" style={{ background: '#f8fafc' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="var(--primary)" />
            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>
              My Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button className="btn-close-modal" onClick={closeCart}>
            <X size={18} />
          </button>
        </div>

        {/* Savings banner */}
        {savingsAmount > 0 && (
          <div
            style={{
              background: '#dcfce7',
              color: '#166534',
              padding: '0.6rem 1.25rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>🎉 Total DMart Savings on this order:</span>
            <span>₹{savingsAmount}</span>
          </div>
        )}

        {/* Items List */}
        <div className="cart-items-scroll">
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748b' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
              <h4 style={{ color: '#0f172a', marginBottom: '0.4rem' }}>Your cart is empty</h4>
              <p style={{ fontSize: '0.85rem' }}>Add grocery essentials or 3D gadgets to save money!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item._id} className="cart-item-card">
                <img
                  src={item.imageUrl || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&auto=format&fit=crop&q=80'}
                  alt={item.name}
                  style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.3 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', margin: '2px 0 6px 0' }}>
                    {item.unit}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>
                        ₹{item.price * item.quantity}
                      </span>
                      {item.mrp && item.mrp > item.price && (
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'line-through', marginLeft: '6px' }}>
                          ₹{item.mrp * item.quantity}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--border)',
                          borderRadius: '6px',
                          background: '#ffffff'
                        }}
                      >
                        <button
                          style={{ padding: '3px 7px' }}
                          onClick={() => updateQuantity(item._id, -1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0 5px' }}>
                          {item.quantity}
                        </span>
                        <button
                          style={{ padding: '3px 7px' }}
                          onClick={() => updateQuantity(item._id, 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        style={{ padding: '4px', color: '#ef4444' }}
                        onClick={() => removeFromCart(item._id)}
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Bill Summary */}
        {items.length > 0 && (
          <div className="cart-footer">
            {/* Coupon Code Section */}
            <div style={{ marginBottom: '1rem' }}>
              {appliedCoupon ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#f0fdf4',
                    border: '1px dashed #22c55e',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#15803d', fontWeight: 700 }}>
                    <Tag size={14} /> '{appliedCoupon.code}' Applied (-₹{appliedCoupon.discount})
                  </div>
                  <button
                    onClick={removeCoupon}
                    style={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700 }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. DMART50)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.45rem 0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      fontSize: '0.82rem'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'var(--primary)',
                      color: '#ffffff',
                      padding: '0.45rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700
                    }}
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && (
                <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>
                  {couponError}
                </div>
              )}
            </div>

            {/* Bill Rows */}
            <div className="bill-summary-row">
              <span>Item Total (MRP):</span>
              <span style={{ textDecoration: 'line-through' }}>₹{mrpTotal}</span>
            </div>
            <div className="bill-summary-row" style={{ color: '#166534', fontWeight: 600 }}>
              <span>DMart Discount:</span>
              <span>-₹{mrpTotal - subtotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="bill-summary-row" style={{ color: '#166534', fontWeight: 600 }}>
                <span>Coupon Promo:</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}
            <div className="bill-summary-row">
              <span>Govt. Tax & GST (5%):</span>
              <span>₹{taxAmount}</span>
            </div>
            <div className="bill-summary-row">
              <span>Delivery Fee:</span>
              <span>{deliveryFee === 0 ? <strong style={{ color: '#166534' }}>FREE</strong> : `₹${deliveryFee}`}</span>
            </div>
            {deliveryFee > 0 && (
              <div style={{ fontSize: '0.72rem', color: '#b45309', marginBottom: '0.4rem' }}>
                Add ₹{499 - subtotal} more for FREE delivery!
              </div>
            )}

            <div className="bill-total-row">
              <span>To Pay:</span>
              <span>₹{totalAmount}</span>
            </div>

            <button
              className="btn-primary-lg"
              style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}
              onClick={() => {
                closeCart();
                onProceedCheckout();
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                color: '#64748b',
                marginTop: '0.8rem'
              }}
            >
              <ShieldCheck size={14} color="#166534" />
              <span>Safe & Secure Indian Payments: UPI & COD</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
