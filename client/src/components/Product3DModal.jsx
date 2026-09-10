import React, { useState } from 'react';
import ThreeCanvas from './ThreeCanvas';
import { X, Plus, Minus, ShoppingBag, RotateCw, Layers, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Product3DModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [primaryColor, setPrimaryColor] = useState(product.model3d?.primaryColor || '#00733d');
  const [secondaryColor, setSecondaryColor] = useState(product.model3d?.secondaryColor || '#ffffff');
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const colorVariants = [
    { label: 'Default', primary: product.model3d?.primaryColor || '#00733d', secondary: product.model3d?.secondaryColor || '#ffffff' },
    { label: 'Matte Obsidian', primary: '#0f172a', secondary: '#38bdf8' },
    { label: 'Gold Amber', primary: '#d97706', secondary: '#fef3c7' },
    { label: 'Crimson Ruby', primary: '#dc2626', secondary: '#ffffff' }
  ];

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        model3d: {
          ...product.model3d,
          primaryColor,
          secondaryColor
        }
      },
      quantity
    );
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card modal-3d-layout"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge badge-primary">3D Interactive Viewer</span>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a' }}>
              {product.name}
            </span>
          </div>
          <button className="btn-close-modal" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="inspect-3d-grid">
            {/* Left 3D Viewport */}
            <div
              style={{
                background: 'radial-gradient(circle at center, #f1f5f9 0%, #e2e8f0 100%)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--border)'
              }}
            >
              <div className="three-overlay-controls">
                <button
                  className="three-control-btn"
                  onClick={() => setAutoRotate(!autoRotate)}
                >
                  <RotateCw size={13} />
                  {autoRotate ? 'Rotating' : 'Paused'}
                </button>
                <button
                  className="three-control-btn"
                  onClick={() => setIsWireframe(!isWireframe)}
                >
                  <Layers size={13} />
                  {isWireframe ? 'Solid' : 'Wireframe'}
                </button>
              </div>

              <div className="three-drag-hint" style={{ bottom: '1rem' }}>
                <span>🖱️ Click & Drag to inspect 360°</span>
              </div>

              <ThreeCanvas
                modelType={product.model3d?.type || 'box'}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                metalness={product.model3d?.metalness || 0.5}
                roughness={product.model3d?.roughness || 0.3}
                isWireframe={isWireframe}
                autoRotate={autoRotate}
                height="340px"
              />
            </div>

            {/* Right Details & Specs */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                {product.brand} • {product.category}
              </div>
              <h2 style={{ fontSize: '1.3rem', margin: '0.3rem 0', color: '#0f172a' }}>
                {product.name}
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.8rem' }}>
                Unit: <strong>{product.unit}</strong>
              </div>

              <div className="product-pricing-row" style={{ marginBottom: '0.8rem' }}>
                <span className="price-current" style={{ fontSize: '1.6rem' }}>₹{product.price}</span>
                {product.mrp > product.price && (
                  <span className="price-mrp" style={{ fontSize: '1rem' }}>₹{product.mrp}</span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="price-discount-pill">{product.discountPercentage}% OFF</span>
                )}
              </div>

              <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.5 }}>
                {product.description}
              </p>

              {/* Color Finish Switcher */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>
                  CHOOSE 3D FINISH:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                  {colorVariants.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPrimaryColor(c.primary);
                        setSecondaryColor(c.secondary);
                      }}
                      style={{
                        padding: '0.3rem 0.6rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: primaryColor === c.primary ? '2px solid var(--primary)' : '1px solid var(--border)',
                        background: primaryColor === c.primary ? 'var(--primary-light)' : '#ffffff',
                        color: primaryColor === c.primary ? 'var(--primary)' : '#0f172a'
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs Table */}
              {product.specs && product.specs.length > 0 && (
                <div style={{ marginBottom: '1.2rem', background: '#f8fafc', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '0.4rem' }}>
                    SPECIFICATIONS:
                  </div>
                  {product.specs.map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '2px 0' }}>
                      <span style={{ color: '#64748b' }}>{s.key}:</span>
                      <span style={{ fontWeight: 600, color: '#0f172a' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity Stepper & Add Button */}
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <button
                    style={{ padding: '0.5rem 0.7rem' }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={14} />
                  </button>
                  <span style={{ fontWeight: 700, padding: '0 0.6rem', minWidth: '24px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button
                    style={{ padding: '0.5rem 0.7rem' }}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  className="btn-primary-lg"
                  style={{ flex: 1, padding: '0.65rem 1rem' }}
                  onClick={handleAddToCart}
                >
                  {addedSuccess ? (
                    <>
                      <CheckCircle2 size={18} /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} /> Add {quantity} to Cart (₹{product.price * quantity})
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
