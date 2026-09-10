import React, { useState } from 'react';
import ThreeCanvas from './ThreeCanvas';
import { Sparkles, ShoppingBag, Eye, RotateCw, Layers } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Hero3D({ featuredProduct, onInspect3D }) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('#1e293b');
  const [secondaryColor, setSecondaryColor] = useState('#38bdf8');
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const colorThemes = [
    { label: 'Titanium Slate', primary: '#1e293b', secondary: '#38bdf8' },
    { label: 'DMart Emerald', primary: '#00733d', secondary: '#facc15' },
    { label: 'Royal Sapphire', primary: '#1d4ed8', secondary: '#93c5fd' },
    { label: 'Sunset Amber', primary: '#b45309', secondary: '#fef08a' }
  ];

  const handleColorChange = (theme) => {
    setSelectedColor(theme.primary);
    setSecondaryColor(theme.secondary);
  };

  const handleAddHeroToCart = () => {
    if (featuredProduct) {
      addToCart({
        ...featuredProduct,
        selectedColor
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Pitch */}
          <div>
            <div className="hero-tag">
              <Sparkles size={16} /> NEXT-GEN 3D SHOPPING EXPERIENCE
            </div>
            <h1 className="hero-title">
              Shop Daily Essentials & Tech with{' '}
              <span className="hero-title-highlight">Interactive 3D Views</span>
            </h1>
            <p className="hero-desc">
              Experience the future of commercial retail. Inspect products in 360-degree 3D,
              customize colors, get unbeatable DMart savings, and checkout seamlessly with
              PhonePe, Google Pay, or Cash on Delivery.
            </p>

            <div className="hero-features-chips">
              <div className="feature-chip">
                <span>🛡️</span> 100% Genuine Quality
              </div>
              <div className="feature-chip">
                <span>⚡</span> Express 24-Hour Delivery
              </div>
              <div className="feature-chip">
                <span>💰</span> Min. 20% Off Every Day
              </div>
              <div className="feature-chip">
                <span>🤖</span> AI Assistant Guided
              </div>
            </div>

            <div className="hero-cta-group">
              <button className="btn-primary-lg" onClick={handleAddHeroToCart}>
                <ShoppingBag size={20} />
                Add Featured to Cart (₹{featuredProduct?.price || 24999})
              </button>
              {featuredProduct && (
                <button className="btn-secondary-lg" onClick={() => onInspect3D(featuredProduct)}>
                  <Eye size={18} /> Inspect 3D
                </button>
              )}
            </div>
          </div>

          {/* Right 3D Showcase Card */}
          <div>
            <div className="three-hero-card">
              <div className="three-overlay-controls">
                <button
                  className="three-control-btn"
                  onClick={() => setAutoRotate(!autoRotate)}
                  title="Toggle Auto Rotation"
                >
                  <RotateCw size={14} className={autoRotate ? 'spin-icon' : ''} />
                  {autoRotate ? 'Rotating' : 'Paused'}
                </button>
                <button
                  className="three-control-btn"
                  onClick={() => setIsWireframe(!isWireframe)}
                  title="Toggle Wireframe"
                >
                  <Layers size={14} />
                  {isWireframe ? 'Solid' : '3D Wire'}
                </button>
              </div>

              <div className="three-drag-hint">
                <span>🖱️ Drag to rotate 360°</span>
              </div>

              <ThreeCanvas
                modelType={featuredProduct?.model3d?.type || 'smartphone'}
                primaryColor={selectedColor}
                secondaryColor={secondaryColor}
                isWireframe={isWireframe}
                autoRotate={autoRotate}
                height="390px"
              />

              <div className="three-hero-info">
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {featuredProduct?.badge || '3D FLAGSHIP'}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>
                    {featuredProduct?.name || 'Galaxy Ultra 5G Pro'}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    DMart Price: <strong style={{ color: '#0f172a' }}>₹{featuredProduct?.price || 24999}</strong>
                    <span style={{ textDecoration: 'line-through', marginLeft: '6px' }}>₹{featuredProduct?.mrp || 29999}</span>
                  </div>
                </div>

                {/* Color Customizer */}
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', marginBottom: '4px', textAlign: 'right' }}>
                    CUSTOMIZE COLOR
                  </div>
                  <div className="three-color-picker">
                    {colorThemes.map((theme, i) => (
                      <div
                        key={i}
                        className={`color-dot ${selectedColor === theme.primary ? 'active' : ''}`}
                        style={{ backgroundColor: theme.primary }}
                        onClick={() => handleColorChange(theme)}
                        title={theme.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
