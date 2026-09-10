import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { loginWithEmail, registerWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    let res;
    if (isLoginTab) {
      res = await loginWithEmail(email, password);
    } else {
      res = await registerWithEmail(name, email, password, phone);
    }

    setIsSubmitting(false);
    if (res.success) {
      onClose();
    } else {
      setErrorMsg(res.error || 'Authentication failed');
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setErrorMsg('');
    const mockGoogleProfile = {
      googleId: `google_${Date.now()}`,
      name: 'Google Shopper',
      email: 'customer@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'
    };
    const res = await loginWithGoogle(mockGoogleProfile);
    setIsSubmitting(false);
    if (res.success) {
      onClose();
    } else {
      setErrorMsg(res.error || 'Google Login failed');
    }
  };

  const handleFacebookSignIn = async () => {
    setIsSubmitting(true);
    setErrorMsg('');
    const res = await loginWithFacebook();
    setIsSubmitting(false);
    if (res.success) {
      onClose();
    } else {
      setErrorMsg(res.error || 'Facebook Login failed');
    }
  };

  const handleQuickDemo = async () => {
    setIsSubmitting(true);
    setEmail('richard@example.com');
    setPassword('demopass123');
    // Try registering or logging in
    let res = await loginWithEmail('richard@example.com', 'demopass123');
    if (!res.success) {
      res = await registerWithEmail('Richard R', 'richard@example.com', 'demopass123', '9876543210');
    }
    setIsSubmitting(false);
    if (res.success) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        style={{ maxWidth: '440px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#0f172a' }}>
              {isLoginTab ? 'Welcome Back' : 'Create DMart 3D Account'}
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Unlock personalized 3D cart savings & express checkout
            </p>
          </div>
          <button className="btn-close-modal" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {errorMsg && (
            <div
              style={{
                background: '#fef2f2',
                color: '#dc2626',
                padding: '0.6rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <AlertCircle size={15} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Social Sign-In Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.2rem' }}>
            {/* Google Sign-in */}
            <button
              onClick={handleGoogleSignIn}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.7rem',
                padding: '0.65rem',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                background: '#ffffff',
                fontWeight: 600,
                fontSize: '0.88rem',
                color: '#1e293b'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.24v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.41l4.04-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.59l4.04 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Facebook Sign-in */}
            <button
              onClick={handleFacebookSignIn}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.7rem',
                padding: '0.65rem',
                borderRadius: '8px',
                background: '#1877f2',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.88rem'
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '1.2rem 0',
              color: '#94a3b8',
              fontSize: '0.78rem'
            }}
          >
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <span style={{ padding: '0 0.8rem' }}>OR WITH EMAIL</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'flex',
              background: '#f1f5f9',
              borderRadius: '8px',
              padding: '4px',
              marginBottom: '1rem'
            }}
          >
            <button
              onClick={() => setIsLoginTab(true)}
              style={{
                flex: 1,
                padding: '0.45rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: isLoginTab ? '#ffffff' : 'transparent',
                color: isLoginTab ? 'var(--primary)' : '#64748b',
                boxShadow: isLoginTab ? 'var(--shadow-sm)' : 'none'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLoginTab(false)}
              style={{
                flex: 1,
                padding: '0.45rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: !isLoginTab ? '#ffffff' : 'transparent',
                color: !isLoginTab ? 'var(--primary)' : '#64748b',
                boxShadow: !isLoginTab ? 'var(--shadow-sm)' : 'none'
              }}
            >
              Register
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {!isLoginTab && (
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Richard R"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.2rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                  />
                </div>
              </div>
            )}

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.2rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.2rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                />
              </div>
            </div>

            {!isLoginTab && (
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Mobile Number</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="tel"
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.2rem', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.85rem' }}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-lg"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.65rem' }}
            >
              {isSubmitting
                ? 'Please wait...'
                : isLoginTab
                ? 'Sign In to Account'
                : 'Create Account'}
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              onClick={handleQuickDemo}
              style={{ fontSize: '0.78rem', color: 'var(--secondary)', textDecoration: 'underline', fontWeight: 600 }}
            >
              ⚡ Quick Demo 1-Click Login (Richard R)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
