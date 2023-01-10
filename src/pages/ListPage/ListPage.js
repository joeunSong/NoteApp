import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IObox from '../../components/IObox';
import CompoButton from '../../components/CompoButton';
import SimpleView from '../../components/SimpleView';

/**
 * AllRemove 버튼을 눌렀을 때 현재 화면에서 렌더링이 필요하여 사용 
 * @returns 강제 재렌더링 
 */
function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => ++value); 
}

/**
 * 작성한 노트의 목록을 보여주는 노트앱의 화면
 * @returns 노트 앱 홈화면
 */
function ListPage() {
    const navigate = useNavigate();
    let prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
    const [isMemo, setIsMemo] = useState(false);
    const forceUpdate = useForceUpdate();


    const jump = () => {
        navigate("/write");
    }

    useEffect(() => {
        prevData = JSON.parse(localStorage.getItem('localMemo') || '[]');
        setIsMemo(prevData.length)
    }, []);

    const onAllRemove = () => {
        window.localStorage.clear();
        setIsMemo(false);
        forceUpdate();
    } 

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
            <CompoButton 
                styleType="justBtn longBtn"
                float="left" onClick = { onAllRemove }>
                All Remove
            </CompoButton>
            <CompoButton styleType="justBtn longBtn"
            onClick={ jump } >
                Create
            </CompoButton>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <CompoButton styleType="firstAdd"
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