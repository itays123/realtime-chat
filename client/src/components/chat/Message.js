import React from 'react';

const Message = ({ message, isSender, isDescendant }) => {
  return (
    <div
      className={`message ${isSender ? 'is-sender' : 'normal'} ${
        isDescendant ? 'descendant' : ''
      }`}
    >
      <div className="content">
        <h4>{message.name}</h4>
        <p>{message.content}</p>
      </div>
      <div className="dec"></div>
    </div>
  );
};

export default Message;
