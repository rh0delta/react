import React from 'react';

import ChatBar      from './ChatBar.jsx';
import MessageList  from './MessageList.jsx';

import '../styles/home.scss'

var chatSocket;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          currentUser: {name: ''}, // optional. if currentUser is not defined, it means the user is Anonymous
          messages: []
        }
    this.chatSocket = chatSocket;
  }

  updateMessages = (data) => {
    let messageObj = JSON.parse(data.data)
    const messages = this.state.messages.concat(messageObj)
    this.setState({messages: messages})
  }

  handleUserUpdate = (f) => {
    this.state.currentUser = f
  }

   handleNewMessage = (e) => {
    let username = 'Anonymous'
    let message = '';
    if (! e.username == '') {
      username = e.username;
    }
    if (! e.message == '') {
      const newMessage = {username: username, content: e.message};
      const messageForServer = JSON.stringify(newMessage)
      const sendToServer = this.chatSocket.send(messageForServer);
    }
  }


  componentDidMount() {
    this.chatSocket = new WebSocket("ws://localhost:3001");
    this.chatSocket.onmessage = this.updateMessages
  }

  render() {
    return (
      <div className="chatty-app">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar submitNewMessage={this.handleNewMessage} submitUserUpdate={this.handleUserUpdate} currentUser={this.state.currentUser}/>
      </div>
    )
  }
}
export default App;
