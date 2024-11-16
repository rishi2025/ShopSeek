import React from 'react';

const ChatSidebar = () => {
  return (
    <div className="w-1/4 bg-purple-100 p-4">
      <h2 className="text-lg font-semibold mb-4">CHATS</h2>
      {/* Chat Item */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-md mb-2 cursor-pointer hover:bg-purple-200">
        <img
          src="https://i.ibb.co/sCnF7Gk/image-44.png"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <span className="font-medium text-gray-800">Shreyash</span>
      </div>
      <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-md cursor-pointer hover:bg-purple-200">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <span className="font-medium text-gray-800">John Doe</span>
      </div>
    </div>
  );
};

export default ChatSidebar;
