import React, { useContext, useRef, useEffect } from 'react';
import { ChatContext } from '../../ctx/ChatContext';
import Message from './Message';
import useWindowSize from '../useWindowEffect';

const isMessageDescendant = (messages, i) =>
  i === 0 ? false : messages[i - 1].name === messages[i].name;

const MessageList = ({ name }) => {
  const { messages } = useContext(ChatContext);
  const [, windowHeight] = useWindowSize();
  const bottomOfChat = useRef({ scrollIntoView: () => {} });

  const scrollToBottom = () =>
    bottomOfChat.current.scrollIntoView({ block: 'nearest' });
  useEffect(scrollToBottom);

  return (
    <div
      className="messages"
      style={{
        height: windowHeight - 80 - 48, // window - message form - navbar
      }}
    >
      {messages.map((m, i, list) => (
        <Message
          key={i}
          message={m}
          isSender={m.name === name}
          isDescendant={isMessageDescendant(list, i)}
        />
      ))}
      <div id="bottom-of-chat" ref={bottomOfChat}></div>
    </div>
  );
};

export default MessageList;
