import React from 'react';
import './Components.css';
import { useNavigate } from 'react-router-dom';
import { listOrder_store } from '../store';

export const SimpleView = (props) => {
    const navigate = useNavigate();
    const { listOrder, setListOrder } = listOrder_store();

    const listClick = () => {
      setListOrder(props.keyIdx);
      console.log("keyIdx: ", props.keyIdx);
      // console.log("SimpleView_listOrder: ", listOrder);
      navigate('/write');
    };
    return (
    <div 
       className='compoList'
       onClick={listClick}
    >
        <span>&nbsp;</span>
        <div className='simpleView'
        >
            &nbsp;{props.title}
        </div>
    </div>
  )
}

export default SimpleView;