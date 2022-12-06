import React from 'react';
import CompoButton from '../../components/CompoButton';
import IObox from '../../components/IObox';

function WritePage() {
  return (
    <div className='pageWrapper'>
        <CompoButton styleType="justBtn"
         isWrite={true}
          btnPos="left">
            Back
        </CompoButton>
        <IObox ht="20px" marginBox="35px"
          boxPlaceholder="Title" >
        </IObox>
        <IObox ht="200px" boxPlaceholder="Contents">
        
        </IObox>
        <CompoButton 
        styleType="justBtn removeBtn" 
        btnPos="left">
            remove
        </CompoButton>
        <CompoButton styleType="justBtn">
            Done
        </CompoButton>

    </div>
  )
}

export default WritePage;