import React, { useState } from 'react';

const ChatBot = () => {
  // State to manage messages
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?', time: '08:25 A.M.' },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle sending messages
  const sendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message to the conversation
    const userMessage = {
      sender: 'user',
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue.trim());
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000); // Delay to simulate typing
  };

  // Function to generate a bot response
  const generateBotResponse = (userInput) => {
    let response = 'I am sorry, I didn’t understand that.';
    if (userInput.toLowerCase().includes('hello')) {
      response = 'Hi there! How can I help you?';
    } else if (userInput.toLowerCase().includes('project')) {
      response = 'Let’s discuss your project. What do you need help with?';
    } else if (userInput.toLowerCase().includes('bye')) {
      response = 'Goodbye! Have a great day!';
    }

    return {
      sender: 'bot',
      text: response,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  return (
    <div className="flex flex-col flex-grow bg-white shadow-md">
      {/* Header */}
      <div className="bg-purple-700 text-white p-4 flex items-center">
        <h2 className="text-lg font-semibold">let's Chat</h2>
      </div>

      {/* Messages */}
      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : ''}`}
          >
            <div
              className={`${
                message.sender === 'user'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-purple-200 text-gray-800'
              } p-3 rounded-lg max-w-xs`}
            >
              <p>{message.text}</p>
              <span className="text-xs text-gray-500">{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-gray-100 border-t flex items-center">
        <input
          type="text"
          placeholder="Type Your Message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={sendMessage}
          className="ml-3 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
