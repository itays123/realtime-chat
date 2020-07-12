import React, { useState } from 'react';
import './chat/chat.css';
import MessageList from './chat/MessageList';
import NameForm from './NameForm';
import Navbar from '../layout/Navbar';
import MessageForm from './chat/MessageForm';

const Chat = () => {
  const [name, setName] = useState(null);
  return (
    <div className="chat">
      <Navbar name={name} />
      {name ? <MessageList name={name} /> : <NameForm updateName={setName} />}
      {name && <MessageForm name={name} />}
    </div>
  );
};

export default Chat;
