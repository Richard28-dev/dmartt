import React from 'react';
import { Eye, Plus, Minus, Check, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onInspect3D }) {
  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = items.find((i) => i._id === product._id);
  const qty = cartItem ? cartItem.quantity : 0;

  const savings = (product.mrp || product.price) - product.price;

  return (
    <div className="product-card">
      <div className="product-card-media">
        {product.badge && (
          <div className="badge-position">
            <span
              className={`badge ${
                product.badge.includes('OFF') || product.badge.includes('HOT')
                  ? 'badge-sale'
                  : product.badge.includes('SAVER') || product.badge.includes('BEST')
                  ? 'badge-gold'
                  : 'badge-primary'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        <img
          src={product.imageUrl || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />

        {/* 3D Inspect Trigger */}
        <button
          className="btn-3d-inspect-trigger"
          onClick={() => onInspect3D(product)}
          title="Inspect in 3D"
        >
          <Eye size={13} />
          <span>3D View</span>
        </button>
      </div>

      <div className="product-card-body">
        <div className="product-category-brand">
          <span>{product.brand}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#f59e0b' }}>
            <Star size={12} fill="#f59e0b" /> {product.rating || 4.5}
          </span>
        </div>

        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>
        <div className="product-unit">{product.unit || '1 pc'}</div>

        <div className="product-pricing-row">
          <span className="price-current">₹{product.price}</span>
          {product.mrp && product.mrp > product.price && (
            <span className="price-mrp">₹{product.mrp}</span>
          )}
          {product.discountPercentage > 0 && (
            <span className="price-discount-pill">{product.discountPercentage}% OFF</span>
          )}
        </div>

        {savings > 0 && (
          <div className="product-savings-note">
            DMart Savings: ₹{savings}
          </div>
        )}

        <div className="product-card-actions">
          {qty === 0 ? (
            <button className="btn-add-cart" onClick={() => addToCart(product, 1)}>
              <Plus size={16} /> Add to Cart
            </button>
          ) : (
            <div className="quantity-stepper">
              <button className="btn-stepper" onClick={() => updateQuantity(product._id, -1)}>
                <Minus size={14} />
              </button>
              <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{qty} added</span>
              <button className="btn-stepper" onClick={() => updateQuantity(product._id, 1)}>
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
