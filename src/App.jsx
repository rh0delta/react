import React from 'react';

import ChatBar      from './ChatBar.jsx';
import Message      from './Message.jsx';
import MessageList  from './MessageList.jsx';

import '../styles/home.scss'


class App extends React.Component {
  render() {
    return (
      <div className="chatty-app">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList />
        <Message />
        <ChatBar />
      </div>
    )
  }
}
export default App;
