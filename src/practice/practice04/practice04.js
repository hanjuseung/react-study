import Box from "./box";
import { useState } from 'react';
function Practice04() {
    let [box, setBox] = useState([<Box />]); //<Box/> 부분을 숫자로 바꿔서 아래에
                                            //  온클릭부분에 push로 숫자를 넣어도 상관없음
    return (
        <>
            <div style={{margin:'10px'}}>
                <button onClick={() => {
                    // //box 배열에다가 요소를 추가
                    // let box2 = [...box];
                    // box2.push(<Box/>);
                    // setBox(box2);

                    //box배열에다가 아무 값이나 추가 -> box 길이만큼 반복하면서 box를 그림
                    let box2 = [...box,1];
                    setBox(box2);


                }}>박스추가버튼</button>
            </div>

            {/* {box} */}

            {   //box 배열의 갯수만큼 반복 
                box.map(()=>{
                    return <Box/>;
                })
            }
        </>
    );
}
export default Practice04;