import './NewsBlog.css';
import { useState } from 'react';

function NewsBlog() {

    let title = 'React study';

    let [post, setPost] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    //                            ['Today News','어제의 뉴스','내일의 뉴스'] 

    let [count, setCount] = useState([0,0,0]);
    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: 'orange', fontSize: '20px' }}>{title}</p>
            </div>

            <div className='post-list'>
                <h4>{post[0]}<span onClick={() => { 
                    let count2 = [...count];
                    count2[0]++;
                    setCount(count2) }}>🤍</span>{count[0]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{post[1]}<span onClick={() => { 
                    let count2 = [...count];
                    count2[1]++;
                    setCount(count2) }}>🤍</span>{count[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{post[2]}<span onClick={() => { 
                    let count2 = [...count];
                    count2[2]++;
                    setCount(count2) }}>🤍</span>{count[2]}</h4>
                <p>내용 무</p>
            </div>
            <button onClick={() => {
                let post2 = [...post];
                post2[0] = 'Today News';
                post2[1] = 'Yesterday News';
                post2[2] = 'Tomorrow News';
                setPost(post2);
            }}>제목 변경</button>
        </div>

    );
}

export default NewsBlog;