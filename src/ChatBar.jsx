import React from 'react'

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.currentUser.name,
      message: ''
    }
  }

  handleMessageUpdate = (e) => {
      this.setState({message: e.target.value})
  }

  checkChar = (f) => {
    if (f.key === 'Enter') {
      this.props.handleNewMessage(this.state)
      this.setState({message: ''})
    }
  }

  render(props) {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" type="text" defaultValue={this.state.username} />
        <input className="chatbar-message" type="text"
          value={this.state.message}
          onChange={this.handleMessageUpdate}
          onKeyPress={this.checkChar}
          placeholder="Type a message and hit ENTER" />
      </footer>
  )};
}

export default ChatBar;