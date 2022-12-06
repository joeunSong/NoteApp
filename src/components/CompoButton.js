import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CompoButton.css';


function CompoButton({ children, styleType, isWrite, btnPos }) {
  const navigate = useNavigate();

  return ( 
    <div>
      <div className={styleType}
        onClick={() => isWrite ? navigate("/"):navigate("/write")}
        style={{ float: btnPos }}
        >
          { children }
      </div>
    </div>
  )
}

export default CompoButton