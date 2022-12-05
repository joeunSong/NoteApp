import React from 'react';
import './IObox.css';

function IObox({ children, ht }) {
  return (
    <div className='IObox'
         style={{ height: ht }}>
        { children }
    </div>
  )
}

export default IObox;