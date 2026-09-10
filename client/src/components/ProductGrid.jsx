import React from 'react';
import ProductCard from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

export default function ProductGrid({
  products,
  categories,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  onInspect3D,
  loading
}) {
  return (
    <section className="products-section" id="products-catalog">
      <div className="container">
        {/* Category Filter Bar */}
        <div style={{ marginBottom: '1.8rem' }}>
          <div className="category-list">
            <button
              className={`category-pill ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => onSelectCategory('All')}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section Header with Sort Dropdown */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              {selectedCategory === 'All' ? 'Commercial Superstore Catalog' : selectedCategory}
            </h2>
            <p className="section-subtitle">
              Showing {products.length} products with guaranteed low prices & interactive 3D models
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SlidersHorizontal size={16} color="#64748b" />
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="default">Featured Offers</option>
              <option value="discount">Biggest Discount (%)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#64748b' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Loading commercial inventory...</div>
          </div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', background: '#ffffff', borderRadius: '12px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔍</div>
            <h3>No products found matching your search</h3>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
              Try searching for "oil", "rice", "phone", "boat", or click "All Categories"
            </p>
            <button
              className="btn-primary-lg"
              style={{ margin: '1.5rem auto 0 auto' }}
              onClick={() => {
                onSelectCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onInspect3D={onInspect3D}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
