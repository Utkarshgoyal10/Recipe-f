import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Navbar from './Navbar';
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';
import './style.css';

const socket = io('https://recipe-b.onrender.com');

const Discuss = () => {
  const gradientStyle = {
    background: `
      linear-gradient(rgb(255,255,255),rgb(198 220 222))
    `,
  };

  const [messages, setMessages] = useState([]);
  const [name, setName] = useState(null);

  useEffect(() => {
    if(!name){
    const getName = () => {
      const nameInput = prompt('Enter your name to join');
      setName(nameInput);
      socket.emit('new-user-joined', nameInput);
    };  getName();}

  

  
  }, []);

  const appendMessage = (content, position) => {
    setMessages((prevMessages) => [...prevMessages, { content, position }]);
  };

  const handleSendMessage = (message) => {
    appendMessage(`You: ${message}`, 'right');
    socket.emit('send', { message, name });
  };

  useEffect(() => {
    const handleUserJoined = (nameInput) => {
      appendMessage(`${nameInput} joined the chat`, 'middle');
    };

    const handleReceive = (data) => {
      console.log(data);
      appendMessage(`${data.namee}: ${data.message.message}`, 'left');
    };

    const handleLeft = (nameInput) => {
      appendMessage(`${nameInput} left the chat`, 'middle');
    };

    socket.on('user-joined', handleUserJoined);
    socket.on('receive', handleReceive);
    socket.on('left', handleLeft);

    return () => {
      // Unsubscribe or cleanup socket event listeners
      socket.off('user-joined', handleUserJoined);
      socket.off('receive', handleReceive);
      socket.off('left', handleLeft);
    };
  }, [messages]);

  return (
    <div className='pt-28 h-screen' style={gradientStyle}>
      <Navbar />
      <MessageContainer messages={messages} />
      <SendMessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Discuss;
