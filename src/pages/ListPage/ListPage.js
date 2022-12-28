import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IObox from '../../components/IObox';
import CompoButton from '../../components/CompoButton';
import SimpleView from '../../components/SimpleView';

function ListPage() {
    const navigate = useNavigate();
    let prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
    const [isMemo, setIsMemo] = useState(false);
    const jump = () => {
        navigate("/write");
    }

    useEffect(() => {
        prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
        setIsMemo(prevData.length)
    }, []);

  return (
    <div className='pageWrapper'>
        <IObox height="20px" placeholder="Search" width="90%">
        <span style={{
             float: "left", 
             margin: "0 5px" }}>🔍</span>
        </IObox>

        {isMemo ? (
            <React.Fragment>
            <div className='listOuter'>
                {
                    prevData.map((item, idx)=>{
                        return(
                            <div key={idx.toString()} className="list-div">
                                <SimpleView
                                    title={item.title}
                                    keyIdx={idx.toString()}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <CompoButton styleType="justBtn longBtn" id="createBtn"
            onClick={ jump } >
                Create
            </CompoButton>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <CompoButton styleType="firstAdd" id="createBtn"
                onClick={ jump } >
                    &nbsp;
                    Start <br/> Note-App
                </CompoButton>
            </React.Fragment>
            )
        }     
    </div>
  )
}

export default ListPage;