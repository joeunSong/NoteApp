import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompoButton from '../../components/CompoButton';
import IObox from '../../components/IObox';
import { listOrder_store, inputs_store } from '../../store';

function WritePage() {
  const navigate = useNavigate();
  const prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
  const [isSame, setIsSame] = useState(false);
  const { listOrder, removeListOrder } = listOrder_store();
  const { id, setId, title, setTitle, context, setContext, removeAllInputs } = inputs_store();
  console.log("listOrder: ", listOrder)

  useEffect(() => {
    if(!(listOrder === "")) {
      setTitle(prevData[listOrder].title);
      setContext(prevData[listOrder].context);
      console.log("hi", listOrder);
    }
  }, []);

  useEffect (() => {
    if(!(listOrder === "")) {
      let isIf = prevData[listOrder].title===title && prevData[listOrder].context===context;
      isIf ? setIsSame(true) : setIsSame(false);
    }
  }, [prevData])

  const onChangeSet = (e) => {
    const { name, value }= e.target;
    if (name === 'title') {
      setTitle(value);
    }
    else if (name === 'context') {
      setContext(value);
    }
  };

  const save = () => {
    
    const data = {
      title,
      context,
      date: new Date().toLocaleString(),
    };

    prevData.push(data);
    localStorage.setItem('localMemo', JSON.stringify(prevData));

    alert('Saved.');
  }

  const onSave = () => {
    if (isSame) {
      navigate("/");
      return;
    }
    if(title === '' || context === '') {
      alert('Please enter the title and context.');
      return;
    }
    save();
    removeListOrder();
    removeAllInputs();
    navigate("/");
  }

  const onRemove = () => {
    if(!(listOrder === "")) {
    let prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
    prevData.pop(listOrder);
    console.log(prevData);
    localStorage.setItem('localMemo', JSON.stringify(prevData));
    alert('Deleted.');
    }
    removeListOrder();
    removeAllInputs();
    navigate("/");
  }

  const onBack = () => {
    console.log(isSame);
    if (title === '' || context === '' || isSame){
      removeListOrder();
      removeAllInputs();
      navigate("/");
    } else {
      let result = window.confirm('Would you like to save?');
      if (result) {
        save();
      }
      removeAllInputs();
      removeListOrder();
      navigate("/");
    }
  }

  return (
    <div className='pageWrapper'>
        <CompoButton styleType="justBtn" id="backBtn"
          float="left" onClick = { onBack }>
            Back
        </CompoButton>
        <IObox height="20px" marginTop="35px" value={ title }
          placeholder="Title" name="title" onChange = { onChangeSet }>
        </IObox>
        <IObox height="200px" placeholder="Context" value={ context }
           name="context" onChange = { onChangeSet }>
        
        </IObox>
        <CompoButton 
         styleType="justBtn longBtn" id="removeBtn"
         float="left" onClick = { onRemove }>
            Remove
        </CompoButton>
        <CompoButton styleType="justBtn" id="saveBtn"
         onClick = { onSave }>
            Save
        </CompoButton>

    </div>
  )
}

export default WritePage;