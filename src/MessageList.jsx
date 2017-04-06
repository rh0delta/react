import React    from 'react'
import Message  from './Message.jsx';
import Notification  from './Notification.jsx';

const MessageList = (props) => (
  <div>
  { props.messages.map ( (message) => {
    if (message.type == 'incomingMessage') {
      return ( <Message key = {message.id} message = {message} /> )
    } else if (message.type == 'incomingNotification') {
      return ( <Notification key = {message.id}  message = {message} /> )
    } else {
      return ( <h3> AAAAA </h3>)
    }
  })
}
  </div>
)

export default MessageList