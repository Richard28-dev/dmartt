import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, QrCode, Smartphone, Banknote, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, onOrderPlaced }) {
  const { items, totalAmount, discountAmount, clearCart } = useCart();
  const { user } = useAuth();

  const [customerName, setCustomerName] = useState(user?.name || 'Richard R');
  const [customerEmail, setCustomerEmail] = useState(user?.email || 'richard@example.com');
  const [customerPhone, setCustomerPhone] = useState(user?.phone || '9876543210');
  const [street, setStreet] = useState(user?.address?.street || 'Flat 402, Sunshine Towers, Link Road');
  const [city, setCity] = useState(user?.address?.city || 'Mumbai');
  const [state, setState] = useState(user?.address?.state || 'Maharashtra');
  const [pincode, setPincode] = useState(user?.address?.pincode || '400001');

  const [paymentMethod, setPaymentMethod] = useState('phonepe'); // phonepe, gpay, cod
  const [upiId, setUpiId] = useState('richard@ybl');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerPhone || !street || !pincode) {
      setErrorMsg('Please complete all delivery details');
      return;
    }

    setIsProcessing(true);
    setErrorMsg('');

    try {
      // Simulate realistic UPI gateway handoff for PhonePe / Google Pay
      if (paymentMethod !== 'cod') {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      const orderPayload = {
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress: { street, city, state, pincode },
        items,
        paymentMethod,
        discount: discountAmount
      };

      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Payment processing failed');
      }

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      clearCart();
      setIsProcessing(false);
      onOrderPlaced(data.order, data.invoice);
    } catch (err) {
      setIsProcessing(false);
      setErrorMsg(err.message || 'Something went wrong while placing order');
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        style={{ maxWidth: '640px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a' }}>Checkout & Payment</h3>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Complete your order with PhonePe, Google Pay UPI, or Cash on Delivery
            </p>
          </div>
          <button className="btn-close-modal" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handlePlaceOrder} className="modal-body">
          {errorMsg && (
            <div style={{ background: '#fef2f2', color: '#dc2626', padding: '0.6rem 1rem', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {errorMsg}
            </div>
          )}

          {/* Section 1: Customer & Shipping Details */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.8rem', color: '#1e293b' }}>
              1. Delivery & Contact Information
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Phone Number</label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
            </div>

            <div style={{ marginTop: '0.6rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Email Address (for Invoice)</label>
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
              />
            </div>

            <div style={{ marginTop: '0.6rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>House / Flat / Street Address</label>
              <input
                type="text"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginTop: '0.6rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>City</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>State</label>
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Pincode</label>
                <input
                  type="text"
                  required
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Mode Selection */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.2rem', marginBottom: '1.2rem' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.8rem', color: '#1e293b' }}>
              2. Select Payment Mode
            </h4>

            <div className="payment-methods-grid">
              {/* PhonePe Card */}
              <div
                className={`payment-method-card ${paymentMethod === 'phonepe' ? 'selected' : ''}`}
                onClick={() => {
                  setPaymentMethod('phonepe');
                  setUpiId('richard@ybl');
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: '#5f259f',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.8rem'
                  }}
                >
                  पे
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>PhonePe UPI</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>QR / App UPI</div>
              </div>

              {/* Google Pay Card */}
              <div
                className={`payment-method-card ${paymentMethod === 'gpay' ? 'selected' : ''}`}
                onClick={() => {
                  setPaymentMethod('gpay');
                  setUpiId('richard@okhdfcbank');
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: '#1a73e8',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.85rem'
                  }}
                >
                  GPay
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Google Pay</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Instant UPI</div>
              </div>

              {/* Cash On Delivery Card */}
              <div
                className={`payment-method-card ${paymentMethod === 'cod' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '8px',
                    background: '#15803d',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Banknote size={20} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Cash on Delivery</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Pay at Doorstep</div>
              </div>
            </div>

            {/* UPI Dynamic Details Box */}
            {paymentMethod !== 'cod' ? (
              <div className="upi-details-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.88rem' }}>
                  <QrCode size={18} color={paymentMethod === 'phonepe' ? '#5f259f' : '#1a73e8'} />
                  <span>Scan to pay with {paymentMethod === 'phonepe' ? 'PhonePe' : 'Google Pay'}</span>
                </div>

                {/* Simulated dynamic UPI QR code */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=dmartretail@yesbank%26pn=DMart%20Commercial%26am=${totalAmount}%26cu=INR`}
                  alt="UPI QR Code"
                  className="qr-code-img"
                />

                <div style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.4rem 0' }}>
                  Amount to Pay: <strong style={{ color: '#0f172a' }}>₹{totalAmount}</strong>
                </div>

                <div style={{ maxWidth: '300px', margin: '0.6rem auto 0 auto' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>
                    Or enter your {paymentMethod === 'phonepe' ? 'PhonePe' : 'Google Pay'} VPA / UPI ID:
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="mobile@upi or id@bank"
                    style={{
                      width: '100%',
                      padding: '0.45rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      textAlign: 'center',
                      fontWeight: 600,
                      marginTop: '4px'
                    }}
                  />
                </div>
              </div>
            ) : (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                <CheckCircle2 size={24} color="#15803d" style={{ margin: '0 auto 4px auto' }} />
                <div style={{ fontWeight: 700, color: '#15803d', fontSize: '0.9rem' }}>
                  Cash On Delivery Confirmed
                </div>
                <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>
                  Please keep exact change of <strong>₹{totalAmount}</strong> ready at the time of delivery.
                </div>
              </div>
            )}
          </div>

          {/* Place Order CTA */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Final Payable Amount:</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>₹{totalAmount}</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="btn-primary-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={18} className="spin-icon" />
                  <span>Processing {paymentMethod === 'cod' ? 'Order' : 'UPI Payment'}...</span>
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  <span>
                    {paymentMethod === 'cod'
                      ? `Confirm Cash on Delivery Order (₹${totalAmount})`
                      : `Pay ₹${totalAmount} via ${paymentMethod === 'phonepe' ? 'PhonePe' : 'Google Pay'}`}
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
