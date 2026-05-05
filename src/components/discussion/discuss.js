import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('https://recipe-b.onrender.com');

const Discuss = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [joined, setJoined] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [onlineCount, setOnlineCount] = useState(1);
  const bottomRef = useRef(null);
  const nameRef = useRef('');

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    const handleHistory = (history) => {
      const loaded = history.map(msg => ({
        type: 'received',
        text: msg.message,
        sender: msg.name,
        time: msg.createdAt ? new Date(msg.createdAt) : null,
        isHistory: true
      }));
      setMessages(loaded);
    };

    const handleUserJoined = (joinedName) => {
      if (!joinedName) return;
      setMessages(prev => [...prev, { type: 'system', text: `${joinedName} joined the chat` }]);
    };
    const handleReceive = (data) => {
      if (!data || !data.name) return;
      setMessages(prev => [...prev, { type: 'received', text: data.message.message, sender: data.name, time: new Date(data.createdAt || Date.now()) }]);
    };
    const handleLeft = (leftName) => {
      if (!leftName) return;
      setMessages(prev => [...prev, { type: 'system', text: `${leftName} left the chat` }]);
    };
    const handleOnlineCount = (count) => {
      setOnlineCount(count);
    };

    socket.on('chat-history', handleHistory);
    socket.on('user-joined', handleUserJoined);
    socket.on('receive', handleReceive);
    socket.on('left', handleLeft);
    socket.on('online-count', handleOnlineCount);

    // Request history after listeners are set up
    socket.emit('get-history');

    return () => {
      socket.off('chat-history', handleHistory);
      socket.off('user-joined', handleUserJoined);
      socket.off('receive', handleReceive);
      socket.off('left', handleLeft);
      socket.off('online-count', handleOnlineCount);
      // Notify others when navigating away
      if (nameRef.current) {
        socket.emit('user-left', nameRef.current);
      }
    };
  }, []);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    setName(nameInput.trim());
    nameRef.current = nameInput.trim();
    socket.emit('new-user-joined', nameInput.trim());
    setJoined(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessages(prev => [...prev, { type: 'sent', text: messageText.trim(), sender: 'You', time: new Date() }]);
    socket.emit('send', { message: messageText.trim(), name });
    setMessageText('');
  };

  if (!joined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-sm text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">💬</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Join Discussion</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your name to start chatting with the community</p>
          <form onSubmit={handleJoin}>
            <input
              autoFocus
              type="text"
              placeholder="Your name..."
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-[#e26310] mb-4"
              maxLength={30}
            />
            <button
              type="submit"
              className="w-full bg-[#e26310] text-white font-semibold py-3 rounded-lg hover:bg-[#c9560e] transition-colors"
            >
              Join Chat
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col" style={{paddingTop: '70px'}}>
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-xl">💬</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-800 text-[16px]">Recipe Rover Discussion</h1>
            <p className="text-[12px] text-green-600 font-medium">{onlineCount} online</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-[13px] text-gray-600 font-medium">{name}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2" style={{maxHeight: 'calc(100vh - 210px)'}}>
        <div className="text-center">
          <span className="text-[12px] bg-gray-200 text-gray-600 px-3 py-1 rounded-full">You joined as <strong>{name}</strong></span>
        </div>
        {messages.some(m => m.isHistory) && (
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-[11px] text-gray-400 whitespace-nowrap">Previous messages</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        )}
        {messages.map((msg, index) => {
          if (msg.type === 'system') {
            return (
              <div key={index} className="flex justify-center">
                <span className="text-[12px] bg-gray-200 text-gray-500 px-3 py-1 rounded-full">{msg.text}</span>
              </div>
            );
          }
          const isSent = msg.type === 'sent';
          return (
            <div key={index} className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${isSent ? '' : 'flex flex-col'}`}>
                {!isSent && (
                  <span className="text-[11px] text-[#e26310] font-semibold ml-1 mb-1">{msg.sender}</span>
                )}
                <div className={`px-4 py-2 rounded-2xl text-[14px] shadow-sm ${
                  isSent
                    ? 'bg-[#e26310] text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
                {msg.time && (
                  <span className={`text-[10px] text-gray-400 mt-0.5 ${isSent ? 'text-right' : 'text-left ml-1'}`}>
                    {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    {msg.isHistory && ` · ${msg.time.toLocaleDateString([], { month: 'short', day: 'numeric' })}`}
                  </span>
                )}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-[14px] outline-none focus:border-[#e26310]"
          />
          <button
            type="submit"
            disabled={!messageText.trim()}
            className="w-10 h-10 bg-[#e26310] text-white rounded-full flex items-center justify-center hover:bg-[#c9560e] transition-colors disabled:opacity-40"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Discuss;
