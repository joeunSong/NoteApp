import React from 'react';
import './Components.css';

function IObox(props) {

  return (
    <div className='IObox' style={{ height: props.height, marginTop: props.marginTop }}>
      { props.children }
      <textarea placeholder={ props.placeholder } style={{ width: props.width }} name={props.name}
       onChange={ props.onChange }  value={ props.value }
       onClick ={()=>{console.log("click: ",props.name);}} >
      </textarea> 
    </div>
  )
}

export default IObox;