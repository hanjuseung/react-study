import {useState} from 'react';
import './practice01.css'

function Practice01(){
    let [cnt2,setCnt2] = useState(0);
    return(
        <div className='App'>
            <button onClick={()=>{
                
                setCnt2(cnt2+2);
                // setCnt2(매개변수)
                // this.cnt2 = 매개변수;
                console.log('cnt2 : ' + cnt2);
                
            }}>짝수출력</button>
            {/* <span style={{color:red}}>{cnt2}</span> */}
            <span className="txt-red">{cnt2}</span>
        </div>
    );
}

export default Practice01;