import React from 'react'

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      message: ''
    }
  }

  handleMessageUpdate = (e) => {
      this.setState({message: e.target.value})
  }

  checkMessageChar = (f) => {
    if (f.key === 'Enter') {
      this.props.submitNewMessage(this.state)
      this.setState({message: ''})
    }
  }

  handleUserUpdate = (e) => {
      this.setState({username: e.target.value})
  }

  checkUserChar = (f) => {
    if (f.key === 'Enter') {
      this.props.submitUserUpdate(this.state)
    }
  }

  render(props) {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" type="text"
          value={this.state.username}
          onChange={this.handleUserUpdate}
          onKeyPress={this.checkUserChar}
          placeholder="Username" />
        <input className="chatbar-message" type="text"
          value={this.state.message}
          onChange={this.handleMessageUpdate}
          onKeyPress={this.checkMessageChar}
          placeholder="Type a message and hit ENTER" />
      </footer>
  )};
}

export default ChatBar;