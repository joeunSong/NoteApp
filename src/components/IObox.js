import React from 'react';
import './IObox.css';

function IObox({ children, ht, marginBox, boxPlaceholder, wd }) {
  return (
    <div className='IObox' style={{ height: ht, marginTop: marginBox }}>
      { children }
      <textarea placeholder = {boxPlaceholder} style={{ width: wd }}>
      </textarea> 
    </div>
  )
}

export default IObox;