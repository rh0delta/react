import React    from 'react'

const Navbar = (props) => (
  <nav className="navbar">
    <a href="/" className="navbar-brand">Chatty</a>
    <div className="navbar-users">
      {props.userCount} Users Online
    </div>
  </nav>
)

export default Navbar
