import React from 'react';
import './CompoButton.css';


function CompoButton(props) {

  return ( 
    <div>
      <div className={props.styleType}
        onClick={props.onClick}
        style={{ float: props.float }} >
          { props.children }
      </div>
    </div>
  )
}

export default CompoButton;