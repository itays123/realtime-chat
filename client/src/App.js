import React from 'react';
import './App.css';
import ChatContextProvider from './ctx/ChatContext';
import Wrapper from './layout/Wrapper';
import Chat from './components/Chat';

function App() {
  return (
    <ChatContextProvider>
      <Wrapper>
        <Chat />
      </Wrapper>
    </ChatContextProvider>
  );
}

export default App;
