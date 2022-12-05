import React from 'react';
import './CompoButton.css';

function CompoButton({ children, type }) {

  return ( 
    <div>
      <div className={type}>
          { children }
      </div>
    </div>
  )
}

export default CompoButton