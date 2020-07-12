import React, { useContext } from 'react';
import './Navbar.css';
import { ChatContext } from '../ctx/ChatContext';

const Navbar = ({ name }) => {
  const { online } = useContext(ChatContext);
  return (
    <nav className="navbar">
      <div className="brand">
        <h1>Realtime Chat</h1>
      </div>
      <div className="info">{name && <p>{online} online</p>}</div>
    </nav>
  );
};

export default Navbar;
