import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const API_BASE = 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('dmart_token');
    const savedUser = localStorage.getItem('dmart_user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const saveAuth = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('dmart_token', newToken);
    localStorage.setItem('dmart_user', JSON.stringify(newUser));
  };

  const loginWithEmail = async (email, password) => {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      saveAuth(data.token, data.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const registerWithEmail = async (name, email, password, phone) => {
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      saveAuth(data.token, data.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const loginWithGoogle = async (googleData) => {
    try {
      const res = await fetch(`${API_BASE}/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googleData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Google login failed');
      saveAuth(data.token, data.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const loginWithFacebook = async () => {
    // Facebook login simulation and account sync
    const fbUser = {
      name: 'Facebook Customer',
      email: `fb_user_${Math.floor(Math.random() * 10000)}@facebook.com`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      phone: '9876543210'
    };
    return await loginWithGoogle(fbUser);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('dmart_token');
    localStorage.removeItem('dmart_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        loginWithEmail,
        registerWithEmail,
        loginWithGoogle,
        loginWithFacebook,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
