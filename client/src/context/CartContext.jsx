import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('dmart_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        setItems([]);
      }
    }
  }, []);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('dmart_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, qty = 1) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item._id === product._id);
      if (existing) {
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        return [
          ...prevItems,
          {
            _id: product._id,
            productId: product._id,
            name: product.name,
            price: product.price,
            mrp: product.mrp,
            unit: product.unit,
            imageUrl: product.imageUrl,
            category: product.category,
            quantity: qty,
            model3d: product.model3d
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item._id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item._id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
    localStorage.removeItem('dmart_cart');
  };

  // Coupons
  const applyCoupon = (code) => {
    const upper = code.trim().toUpperCase();
    if (upper === 'DMART50') {
      setAppliedCoupon({ code: 'DMART50', discount: 50, desc: '₹50 Instant Savings' });
      setCouponError('');
      return true;
    } else if (upper === 'SAVE100') {
      setAppliedCoupon({ code: 'SAVE100', discount: 100, desc: '₹100 Super Saver' });
      setCouponError('');
      return true;
    } else {
      setCouponError('Invalid coupon code. Try "DMART50"!');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const mrpTotal = items.reduce((sum, item) => sum + (item.mrp || item.price) * item.quantity, 0);
  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const taxAmount = Math.round(subtotal * 0.05); // 5% GST
  const deliveryFee = subtotal === 0 || subtotal >= 499 ? 0 : 49;
  const totalAmount = Math.max(0, subtotal + taxAmount + deliveryFee - discountAmount);
  const savingsAmount = (mrpTotal - subtotal) + discountAmount;
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        couponError,
        subtotal,
        mrpTotal,
        discountAmount,
        taxAmount,
        deliveryFee,
        totalAmount,
        savingsAmount,
        totalItemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
