import React from 'react';
import logo from './bathtub.png';


function Header() {
    return (
        <header className="top-bar">
     
      {}
      <div className="logo-section">
        <img src={logo} className="logo" alt="Logo" />
        <span className="name">CodeSpa</span>
      </div>
      <span className="description">An AI-Powered Code Refactoring Tool</span>
     
    </header>
  );
}


export default Header;
