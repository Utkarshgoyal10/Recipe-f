// MessageContainer.js
// import React from 'react';
// import './style.css'

// const MessageContainer = ({ messages }) => {

//   const textureStyle = {
//     background: `
      
//       url('https://cdn.architextures.org/textures/21/07/textured-plaster-60ed6926acbb6-1200.jpg') repeat`,
//   };

//   return (
//     <div className="container rounded-xl" style={textureStyle}>
//       {messages.map((message, index) => (
//         <div key={index} className={`message ${message.position}`}>
//           {message.content}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageContainer;
import React, { useEffect, useRef } from 'react';
import './style.css';

const MessageContainer = ({ messages }) => {
  const messageContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  const textureStyle = {
    background: `
      url('https://cdn.architextures.org/textures/21/07/textured-plaster-60ed6926acbb6-1200.jpg') repeat`,
  };

  return (
    <div className="container rounded-xl" style={{ ...textureStyle, overflowY: 'auto' }} ref={messageContainerRef}>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.position}`}>
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;
