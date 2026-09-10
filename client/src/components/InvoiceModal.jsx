import React from 'react';
import { X, Printer, CheckCircle2, Download, Box, ShieldCheck } from 'lucide-react';

export default function InvoiceModal({ order, invoice, onClose }) {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(order.createdAt || Date.now()).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card invoice-modal-content"
        style={{ maxWidth: '750px', width: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header no-print">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <CheckCircle2 size={20} color="#166534" />
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#166534' }}>
              Order Confirmed & Tax Invoice Generated
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button
              className="btn-nav-action"
              onClick={handlePrint}
              style={{ background: '#f1f5f9', color: '#0f172a' }}
            >
              <Printer size={16} /> Print / Save PDF
            </button>
            <button className="btn-close-modal" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Tax Invoice Container */}
        <div className="invoice-container">
          {/* Header */}
          <div className="invoice-header-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <div
                  style={{
                    background: 'var(--primary)',
                    color: '#ffffff',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800
                  }}
                >
                  D
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>DMart 3D Retail Limited</h2>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Avenue Supermarts Commercial Division<br />
                GSTIN: 27AABCA1234F1Z8 | CIN: L51900MH2000PLC126427<br />
                FSSAI Lic. No: 10014022002683
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="badge badge-primary" style={{ marginBottom: '0.4rem' }}>
                TAX INVOICE / CASH BILL
              </span>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>
                {order.invoiceNumber || invoice?.invoiceNumber}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Order No: <strong>{order.orderNumber}</strong>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Date: {formattedDate}</div>
            </div>
          </div>

          {/* Customer & Payment Meta */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#f8fafc', padding: '0.9rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Billed & Shipped To:
              </div>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>{order.customerName}</div>
              <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '2px' }}>
                {order.shippingAddress?.street}, {order.shippingAddress?.city}, {order.shippingAddress?.state} - {order.shippingAddress?.pincode}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '4px' }}>
                Phone: {order.customerPhone} | Email: {order.customerEmail}
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '0.9rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Payment Summary:
              </div>
              <div style={{ fontSize: '0.82rem', marginBottom: '3px' }}>
                Payment Mode:{' '}
                <strong style={{ textTransform: 'uppercase', color: 'var(--primary)' }}>
                  {order.paymentMethod === 'phonepe' ? 'PhonePe UPI' : order.paymentMethod === 'gpay' ? 'Google Pay UPI' : 'Cash on Delivery (COD)'}
                </strong>
              </div>
              <div style={{ fontSize: '0.82rem', marginBottom: '3px' }}>
                Payment Status: <strong>{order.paymentStatus}</strong>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                Transaction Ref: <code style={{ fontSize: '0.75rem' }}>{order.transactionId || 'TXN-CONFIRMED'}</code>
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <table className="invoice-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Description</th>
                <th>Unit</th>
                <th>Rate (₹)</th>
                <th>Qty</th>
                <th style={{ textAlign: 'right' }}>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {order.items?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>{item.name}</strong>
                  </td>
                  <td>{item.unit}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>
                    ₹{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bill Calculation Breakdown */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <div style={{ width: '280px' }}>
              <div className="bill-summary-row">
                <span>Subtotal:</span>
                <span>₹{order.subtotal}</span>
              </div>
              {order.discount > 0 && (
                <div className="bill-summary-row" style={{ color: '#166534', fontWeight: 600 }}>
                  <span>Promotional Discount:</span>
                  <span>-₹{order.discount}</span>
                </div>
              )}
              <div className="bill-summary-row">
                <span>CGST (2.5%) + SGST (2.5%):</span>
                <span>₹{order.taxAmount}</span>
              </div>
              <div className="bill-summary-row">
                <span>Delivery Charge:</span>
                <span>{order.deliveryFee === 0 ? 'FREE' : `₹${order.deliveryFee}`}</span>
              </div>
              <div className="bill-total-row" style={{ fontSize: '1.25rem', color: '#0f172a' }}>
                <span>Total Amount Paid:</span>
                <span>₹{order.totalAmount}</span>
              </div>
              {order.savingsAmount > 0 && (
                <div
                  style={{
                    background: '#dcfce7',
                    color: '#166534',
                    padding: '0.4rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: '0.6rem'
                  }}
                >
                  You Saved ₹{order.savingsAmount} with DMart Deals!
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '1rem',
              marginTop: '1.8rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.75rem',
              color: '#94a3b8'
            }}
          >
            <span>This is a computer-generated tax invoice and requires no physical signature.</span>
            <span>Customer Support: help@dmart3d.com</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="modal-header no-print" style={{ borderTop: '1px solid var(--border)' }}>
          <button className="btn-primary-lg" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
