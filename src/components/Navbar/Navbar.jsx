import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-brand">Untitled UI</span>
      </div>
      <div className="navbar-center">
        <a href="/" className="nav-link">Home</a>
        <div className="nav-dropdown">
          <button className="nav-link">Products</button>
        </div>
        <div className="nav-dropdown">
          <button className="nav-link">Resources</button>
        </div>
        <a href="/pricing" className="nav-link">Pricing</a>
      </div>
      <div className="navbar-right">
        <img src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
         alt="Profile" className="profile-image" />
      </div>
    </nav>
  );
}

export default Navbar;