import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CompoButton.css';


function CompoButton(props) {
  const navigate = useNavigate();
  
  const onCheckDone = (e) => {
    // setMemo({
    //     id: "1",
    //     [title]: value,
    //     [contents]: value
    // });
    console.log(e);
  }
  const onClickBtn = (e) => {
    switch (props.id){
      case 'saveBtn' :
        onCheckDone(e);
        break;
      case 'removeBtn' :
        navigate("/");
        break;
      case 'backBtn' :
        navigate("/");
        break;
      case 'createBtn' :
        navigate("/write");
        break;
    }
  };

  return ( 
    <div>
      <div className={props.styleType} id={props.id}
        onClick={props.onClick}
        style={{ float: props.float }} >
          { props.children }
      </div>
    </div>
  )
}

export default CompoButton;