// SendMessageForm.js
import React, { useState } from 'react';

const SendMessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="send">
      <form onSubmit={handleSubmit} id="send-container">
        <input
          type="text"
          name="messageInp"
          id="messageInp"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='pl-4'
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
