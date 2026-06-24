"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! How can I help you with Oryol Technologies today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: input }]);
    const currentInput = input;
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: "bot", content: "Thanks for reaching out! A representative will connect with you shortly regarding: " + currentInput }
      ]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="chat-window glass-panel"
          >
            <div className="chat-header">
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>Oryol Support</h3>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>Typically replies instantly</span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Chat" className="close-btn">
                <X size={18} color="white" />
              </button>
            </div>
            
            <div className="chat-body">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.role}`}>
                  <div className="message-bubble">{msg.content}</div>
                </div>
              ))}
            </div>

            <form className="chat-footer" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" disabled={!input.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className="chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} color="white" />
      </button>

      <style jsx>{`
        .chatbot-wrapper {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }

        .chat-trigger {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--accent-1));
          border: none;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .chat-trigger:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }

        .chat-window {
          width: 350px;
          height: 500px;
          max-height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg-color); /* solid bg fallback */
          background: var(--glass-bg);
          transform-origin: bottom right;
        }

        .chat-header {
          padding: 1.25rem;
          background: linear-gradient(135deg, var(--primary), var(--accent-1));
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        .chat-body {
          flex: 1;
          padding: 1.25rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          width: 100%;
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.bot {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 80%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .user .message-bubble {
          background: var(--primary);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .bot .message-bubble {
          background: var(--secondary);
          color: var(--text-color);
          border-bottom-left-radius: 4px;
        }

        .chat-footer {
          padding: 1rem;
          border-top: 1px solid var(--glass-border);
          display: flex;
          gap: 0.5rem;
          background: rgba(0,0,0,0.2);
        }

        .chat-footer input {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          background: var(--bg-color);
          color: var(--text-color);
          font-family: inherit;
          outline: none;
        }
        
        .chat-footer input:focus {
          border-color: var(--primary);
        }

        .chat-footer button {
          background: var(--primary);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .chat-footer button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
