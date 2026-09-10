import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, ShoppingBag, Eye, CornerDownLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function AIAssistant({ onInspect3D }) {
  const { addToCart, openCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! 👋 I am your DMart 3D Smart AI Shopping Assistant. Ask me about daily grocery discounts, 3D tech products, coupon deals, or payment options!',
      chips: ['Fortune Oil Deals', '5G Smartphone 3D', 'Payment Methods', 'Today Coupons']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (textToSend) => {
    const q = textToSend || inputText;
    if (!q.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: q };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/ai-assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });
      const data = await res.json();

      const botMessage = {
        sender: 'bot',
        text: data.reply,
        chips: data.chips || [],
        recommendedProduct: data.recommendedProduct,
        intent: data.intent
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'I can recommend top savings! Check out Fortune Sunflower Oil (25% off) or the 3D Galaxy Ultra 5G Pro in the store.',
          chips: ['Show Groceries', 'Show Electronics']
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChipClick = (chipText) => {
    if (chipText === 'View Cart') {
      openCart();
    } else {
      sendMessage(chipText);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        className="ai-assistant-fab"
        onClick={() => setIsOpen(!isOpen)}
        title="Open DMart 3D AI Assistant"
      >
        <div className="ai-pulse-ring" />
        <Bot size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00733d, #38bdf8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>DMart AI Copilot</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Powered by Python AI Service</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: '#cbd5e1', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages List */}
          <div className="ai-messages-list" ref={scrollRef}>
            {messages.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  className={`ai-bubble ${
                    m.sender === 'user' ? 'ai-bubble-user' : 'ai-bubble-bot'
                  }`}
                >
                  <p style={{ whiteSpace: 'pre-line' }}>{m.text}</p>

                  {/* Embedded Product Card if AI recommended a specific product */}
                  {m.recommendedProduct && (
                    <div
                      style={{
                        background: '#f8fafc',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        padding: '0.6rem',
                        marginTop: '0.6rem',
                        display: 'flex',
                        gap: '0.6rem',
                        alignItems: 'center'
                      }}
                    >
                      <img
                        src={m.recommendedProduct.imageUrl}
                        alt={m.recommendedProduct.name}
                        style={{ width: 50, height: 50, borderRadius: 6, objectFit: 'cover' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>
                          {m.recommendedProduct.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)' }}>
                          ₹{m.recommendedProduct.price}{' '}
                          <span style={{ fontSize: '0.7rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                            ₹{m.recommendedProduct.mrp}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.4rem', marginTop: '4px' }}>
                          <button
                            onClick={() => addToCart(m.recommendedProduct, 1)}
                            style={{
                              background: 'var(--primary)',
                              color: '#ffffff',
                              fontSize: '0.72rem',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px'
                            }}
                          >
                            <ShoppingBag size={11} /> Add to Cart
                          </button>
                          <button
                            onClick={() => onInspect3D(m.recommendedProduct)}
                            style={{
                              background: '#ffffff',
                              border: '1px solid var(--border)',
                              fontSize: '0.72rem',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px'
                            }}
                          >
                            <Eye size={11} /> 3D View
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Suggestion Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="ai-chips-row" style={{ padding: '0.3rem 0 0.5rem 0' }}>
                    {m.chips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        className="ai-chip-btn"
                        onClick={() => handleChipClick(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="ai-bubble ai-bubble-bot" style={{ fontStyle: 'italic', color: '#64748b' }}>
                Thinking & analyzing DMart catalog...
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form
            className="ai-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Ask about deals, products, or UPI..."
              className="ai-chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="ai-send-btn" disabled={!inputText.trim()}>
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
