import React from 'react';
import './Navbar.css';
import Logo from '../../Images/logo.png'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="img" src={Logo} alt="My Logo" />
      </div>
      <div className="items">
        <a href="#" className="item">Home</a>
        <a href="#" className="item">About</a>
        <a href="#" className="item">Contact</a>
        <a href="#" className="item">Login</a>
      </div>
      <div className="button">
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;