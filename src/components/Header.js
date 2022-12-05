import React from 'react';
import "./Header.css";

function Header({ children }) {
  return (
    <div className='outer'>
        <div className='inner'>
            <p className='logo'>Note App</p>
            { children }
        </div>
    </div>
  )
}

export default Header;