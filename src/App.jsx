import React from 'react';

import ChatBar      from './ChatBar.jsx';
import MessageList  from './MessageList.jsx';
import Navbar       from './Navbar.jsx'

import '../styles/home.scss'

var chatSocket;
const uuid = require('uuid');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          currentUser: {name: 'Anonymous', uuid: uuid()},
          messages: [],
          userCount: 0,
        }
    this.chatSocket = chatSocket;
  }

  updateMessages = (data) => {
    let messageObj = JSON.parse(data.data)
    if ( messageObj.type != 'incomingSystemNotification') {
      const messages = this.state.messages.concat(messageObj)
      this.setState({messages: messages})
    } else {
      this.setState({userCount: messageObj.userCount})
    }
  }

  handleUserUpdate = (f) => {
    let oldUserName = this.state.currentUser.name;
    let newUserName = f.username
    if (oldUserName != newUserName) {
      const newMessage = {type: 'postNotification', oldUserName: oldUserName, newUserName: newUserName};
      const messageForServer = JSON.stringify(newMessage)
      console.log(messageForServer)
      const sendToServer = this.chatSocket.send(messageForServer);
      this.state.currentUser.name = newUserName
    }
  }

   handleNewMessage = (e) => {
    let username = 'Anonymous'
    let message = '';
    if (! e.username == '') {
      username = e.username;
    }
    if (! e.message == '') {
      const newMessage = {type: 'postMessage', username: username, uuid: this.state.currentUser.uuid, content: e.message};
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
        <Navbar userCount = {this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar submitNewMessage={this.handleNewMessage} submitUserUpdate={this.handleUserUpdate} currentUser={this.state.currentUser}/>
      </div>
    )
  }
}
export default App;
