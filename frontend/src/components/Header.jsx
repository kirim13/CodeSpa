import React from 'react';
import logo from './bathtub.png';


function Header() {
    return (
        <header className="top-bar">
     
      {}
      <div className="logo-section">
        <img src={logo} className="website-logo" alt="Website Logo" />
        <span className="website-name">CodeSpa</span>
      </div>
      <span className="website-description">An AI-Powered Code Refactoring Tool</span>
     
    </header>
  );
}


export default Header;
