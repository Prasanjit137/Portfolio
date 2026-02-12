import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Persistence for Session ID
  const [sessionId] = useState(() => {
    return localStorage.getItem('chat_session_id') || `sess-${Math.random().toString(36).substr(2, 9)}`;
  });

  useEffect(() => {
    localStorage.setItem('chat_session_id', sessionId);
  }, [sessionId]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const n8nWebhookUrl = process.env.REACT_APP_N8N_WEBHOOK_URL;

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = { text: input, sender: 'user', time: userTime };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          chatInput: input, 
          sessionId: sessionId 
        }),
      });

      const data = await response.json();
      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const aiMessage = { 
        text: data.output || data.text || "I'm sorry, I couldn't process that.", 
        sender: 'ai',
        time: aiTime
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Network error. Please try again later.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bot-integration">
      {/* Floating Action Button with Scale Effect */}
      <button 
        className={`fab-button ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <span className="close-icon">✕</span>
        ) : (
          <svg className="chat-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.01 22l5.076-1.338C8.587 21.513 10.237 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.863-.393-4.061-1.077l-2.903.765.765-2.903A7.953 7.953 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
          </svg>
        )}
      </button>

      {/* Chat Window with Glassmorphism */}
      <div className={`chat-widget ${isOpen ? 'visible' : ''}`}>
        <header className="widget-header">
          <div className="bot-profile">
            <div className={`bot-avatar ${isLoading ? 'pulsing' : ''}`}>PS</div>
            <div className="header-info">
              <h4>Assistant</h4>
              <span className="status">Online</span>
            </div>
          </div>
        </header>

        <div className="widget-body">
          {messages.length === 0 && !isLoading && (
            <div className="empty-state">
              <div className="welcome-icon">👋</div>
              <p>Hi! I'm Prasanjit's AI. How can I help you today?</p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message-row ${msg.sender}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="message-bubble">
                {msg.text}
                {msg.time && <span className="message-time">{msg.time}</span>}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message-row ai">
              <div className="message-bubble typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="widget-input" onSubmit={sendMessage}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type a message..." 
            autoComplete="off"
          />
          <button type="submit" className="send-btn" disabled={!input.trim() || isLoading}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;

