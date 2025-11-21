// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:8000'); // Update with your server URL

// const App = () => {
//     const [name, setName] = useState('');
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         const getName = () => {
//             const enteredName = prompt('Enter your name to join');
//             if (enteredName) {
//                 setName(enteredName);
//                 socket.emit('new-user-joined', enteredName);
//             }
//         };

//         getName();

//         return () => {
//             socket.disconnect();
//         };
//     }, []);

//     useEffect(() => {
//         socket.on('user-joined', (user) => {
//             setMessages((prevMessages) => [...prevMessages, `${user} joined the chat`]);
//         });

//         socket.on('receive', (data) => {
//             setMessages((prevMessages) => [...prevMessages, `${data.name}: ${data.message}`]);
//         });
//     }, []);

//     const sendMessage = (e) => {
//         e.preventDefault();
//         if (message.trim() !== '') {
//             socket.emit('send', message);
//             setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
//             setMessage('');
//         }
//     };

//     return (
//         <div>
//             <h1>React Chat App</h1>
//             <div>
//                 {messages.map((msg, index) => (
//                     <div key={index}>{msg}</div>
//                 ))}
//             </div>
//             <form onSubmit={sendMessage}>
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Type your message"
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default App;

