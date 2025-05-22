import './Practice03-box.css';

function Box( { title } ){ 

    return(
        <div className='textItem'>

            <h1 className='title'>제목 : {title}</h1>
            <p>내용 : 내용{title}</p>
        </div>
    );
}

export default Box;