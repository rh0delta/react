import React    from 'react'
import Message  from './Message.jsx';

const MessageList = (props) => (
  <div>
  { props.messages.map ( (message) =>
    <Message key = {message.id} message = {message} />
    )}
  </div>
)

export default MessageList