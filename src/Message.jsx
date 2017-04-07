import React from 'react'

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    return (
      <div className="message">
        <span className="message-username"> {this.props.message.username} </span>
        <span className="message-content" style={{color: this.props.message.color}}> {this.props.message.content}</span>
      </div>
    )
  }
}

export default Message