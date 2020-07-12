import React, { useState, useContext, useRef } from 'react';
import { ChatContext } from '../../ctx/ChatContext';

const MessageForm = ({ name }) => {
  const [messageContent, setMessageContent] = useState('');
  const { sendMessage } = useContext(ChatContext);
  const inputRef = useRef({ focus: () => {} });

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({ name, content: messageContent });
    setMessageContent('');
    inputRef.current.focus();
  };

  return (
    <form className="message input single-field" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={messageContent}
        onChange={e => setMessageContent(e.target.value)}
        placeholder="type a message..."
      />
      <button disabled={!messageContent || messageContent.trim() === ''}>
        <i className="material-icons">send</i>
      </button>
    </form>
  );
};

export default MessageForm;
