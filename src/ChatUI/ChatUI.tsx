import React, { useState } from 'react';
import { Send, Camera, ChevronLeft } from 'lucide-react';
import "./ChatUI.css"

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi Jakub, How is it going?\nSomething new?",
      sender: "them",
    },
    {
      id: 2,
      text: "Hello",
      sender: "me",
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: "me",
      }]);
      setNewMessage("");
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <ChevronLeft className="back-button" />
        <div className="profile-info">
          <div className="status-indicator" />
          <div className="user-details">
            <div className="username">Dominika Faniz</div>
            <div className="user-status">REALXED</div>
          </div>
        </div>
        <img 
          src="/api/placeholder/40/40" 
          alt="Profile" 
          className="profile-image"
        />
      </div>

      <div className="chat-area">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-container ${message.sender === 'me' ? 'message-right' : 'message-left'}`}
          >
            <div className={`message-bubble ${message.sender === 'me' ? 'message-mine' : 'message-theirs'}`}>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="input-area">
        <div className="input-container">
          <Camera className="camera-icon" />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Your message"
            className={`message-input ${isAnimating ? 'animate-slide-up' : ''}`}
          />
          <button
            onClick={handleSend}
            className="send-button"
          >
            <Send className="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;