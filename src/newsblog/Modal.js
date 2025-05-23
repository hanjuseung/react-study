import {useState} from 'react';

function Modal(props){
    //props = {title:'', likeCount:10, post:[], setPost:setPost함수
    //         bgColor:'lightcyan'}

    let [num,setNum] = useState(10);
    return(
        <div className='modal' style={{backgroundColor:props.bgColor}}>
            <h3>{props.title} 🤍{props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p>

            <button onClick={()=>{
                //이 버튼을 눌렀을때
                //천번째 제목 오늘의 뉴스 -> Today News
                let temp = [...props.post];
                temp[0] = 'Today News';
                props.setPost(temp);
            }}>제목변경</button>
        </div>
    );
}

export default Modal;