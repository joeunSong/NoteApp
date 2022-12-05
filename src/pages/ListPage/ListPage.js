import React from 'react';
import IObox from '../../components/IObox';
import CompoButton from '../../components/CompoButton';

function ListPage() {
  return (
    <div className='pageWrapper'>
        <IObox ht={"20px"}>
        <div style={{
             float: "left", 
             margin: "0 5px" }}>🔍</div>
        <div contentEditable
             placeholder="search"
             style={{ whiteSpace: "nowrap",
             overflow: "hidden"}}></div>
        </IObox>
        
        {/* 곧 지울 코드 */}
        {/* <IObox ht={"220px"}>
        <div contentEditable
             placeholder='ListPage'>

        </div>
        </IObox> */}

        <CompoButton type="firstAdd">
            &nbsp;&nbsp;&nbsp;
            Start <br/> Note-App
        </CompoButton>
    </div>
  )
}

export default ListPage;