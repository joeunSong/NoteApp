import React from 'react';
import IObox from '../../components/IObox';
import CompoButton from '../../components/CompoButton';

function ListPage() {

  return (
    <div className='pageWrapper'>
        <IObox ht={"20px"} boxPlaceholder="Search" wd="90%">
        <div style={{
             float: "left", 
             margin: "0 5px" }}>🔍</div>
        </IObox>
        
        {/* 곧 지울 코드 */}
        <IObox ht={"230px"} boxPlaceholder="ListPage">
        
        </IObox>

        <CompoButton styleType="justBtn" isWrite={false} >
            {/* &nbsp;&nbsp;&nbsp;
            Start <br/> Note-App */}
            add
        </CompoButton>
    </div>
  )
}

export default ListPage;