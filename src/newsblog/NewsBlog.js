import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    let title = 'React study';

    let [post, setPost] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    //                            ['Today News','어제의 뉴스','내일의 뉴스'] 

    let [count, setCount] = useState([0,0,0]);

    let [showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: 'orange', fontSize: '20px' }}>{title}</p>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    if(showModal){
                        setShowModal(false);}
                    else {
                        setShowModal(true);}

                    setSelectedTitle(post[0]);
                }}>{post[0]}<span onClick={() => { 
                    let count2 = [...count];
                    count2[0]++;
                    setCount(count2) }}>🤍</span>{count[0]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    if(showModal){
                        setShowModal(false);}
                    else {
                        setShowModal(true);}
                        setSelectedTitle(post[1]);
                }}>{post[1]}<span onClick={() => { 
                    let count2 = [...count];
                    count2[1]++;
                    setCount(count2) }}>🤍</span>{count[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    if(showModal){
                        setShowModal(false);}
                    else {
                        setShowModal(true);}
                        setSelectedTitle(post[2]);
                }}>{post[2]}<span onClick={(event) => { 
                    event.stopPropagation(); //전파를 막겠다
                    // 속해있는 부모 요소의 이벤트 처리까지 전파되는걸 막겠다.
                    //<h4><span></span></h4>
                    let count2 = [...count];
                    count2[2]++;
                    setCount(count2) }}>🤍</span>{count[2]}</h4>
                <p>내용 무</p>
            </div>

            {
                //showModal == true ? <Modal/> : null
                showModal && <Modal title={selectedTitle}/>
            }


            {/* <button onClick={() => {
                let post2 = [...post];
                post2[0] = 'Today News';
                post2[1] = 'Yesterday News';
                post2[2] = 'Tomorrow News';
                setPost(post2);
            }}>제목 변경</button> */}


        </div>

    );
}

export default NewsBlog;