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
      <div className="how-to">
            <p>Simply paste your code into the text box provided, or upload a file from your device. Click the 'Refactor' button to process your code. The refactored code will appear in the adjacent text box.
            </p>
      </div>
    </header>
  );
}


export default Header;
