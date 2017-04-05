import React from 'react'

const Notification = (props) => (
  <div className = "message system">
    {props.message.content}
  </div>
)

export default Notification