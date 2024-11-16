import React from 'react';
import {ChatBot,ChatSidebar, Container} from './mainComponent';

function ChatPage() {
  return (
    <Container className='flex flex-row flex-wrap bg-[#F1EAFF] gap-y-8 h-[45.5rem] overflow-y-scroll    '>
        <ChatSidebar />
        <ChatBot />
    </Container>

  )
}

export default ChatPage;

