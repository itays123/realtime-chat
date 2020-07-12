import React, { createContext, Component } from 'react';

export const ChatContext = createContext();

class ChatContextProvider extends Component {
  state = {
    messages: [],
    online: 0,
  };

  getUri = path => {
    const loc = window.location;
    let uri = 'ws:';

    if (loc.protocol === 'https:') {
      uri = 'wss:';
    }
    uri += '//' + loc.host;
    uri += path;
    return uri;
  };

  ws = new WebSocket(this.getUri('/ws'));

  sendMessage = message => {
    if (this.ws) {
      this.ws.send(JSON.stringify(message));
    }
  };

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const e = JSON.parse(evt.data);
      if (e.online) {
        this.setState(prevState => ({ ...prevState, online: e.online }));
      }
      if (e.content) {
        this.setState(prevState => ({
          ...prevState,
          messages: [...prevState.messages, e],
        }));
      }
    };

    this.ws.onclose = () => {
      console.log('disconnected');
    };
  }

  render() {
    return (
      <ChatContext.Provider
        value={{
          messages: this.state.messages,
          online: this.state.online,
          sendMessage: this.sendMessage,
        }}
      >
        {this.props.children}
      </ChatContext.Provider>
    );
  }
}

export default ChatContextProvider;
