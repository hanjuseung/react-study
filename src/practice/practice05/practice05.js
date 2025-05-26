import ColorBox from './ColorBox';
import './practice05.css';
import { useState } from 'react';

function Practice05() {
    let [box, setBox] = useState(['red', 'blue', 'green', 'black']);
    return (

        <div>
            <button onClick={() => {
                let box2 = [...box];
                box2.unshift('red');
                setBox(box2);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.unshift('blue');
                setBox(box2);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.unshift('green');
                setBox(box2);
            }}>앞초록박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.push('red');
                setBox(box2);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.push('blue');
                setBox(box2);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.push('green');
                setBox(box2);
            }}>뒤초록박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.shift();
                setBox(box2);
            }}>앞 박스 삭제</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.pop();
                setBox(box2);
            }}>뒤 박스 삭제</button>
            <br>
            </br>
            {
                box.map((item, index) => {
                    return (
                        <ColorBox box={box} setBox={setBox} bgColor={item} index={index}/>
                    );
                })
            }
        </div>
    );
}
/*
function Practice05(){
    let [box, setBox] = useState(['red', 'blue','green','black']);
    return (
<div>
            <button onClick={() => {
                let box2 = ['red',...box];
                setBox(box2);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let box2 = ['blue',...box];
                setBox(box2);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let box2 = ['green',...box];
                setBox(box2);
            }}>앞초록박스추가</button>
            <button onClick={() => {
                let box2 = [...box,'red'];
                setBox(box2);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let box2 = [...box,'blue'];
                setBox(box2);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let box2 = [...box,'green'];
                setBox(box2);
            }}>뒤초록박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.shift();
                setBox(box2);
            }}>앞 박스 삭제</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.pop();
                setBox(box2);
            }}>뒤 박스 삭제</button>
            <br>
            </br>
            {box.map((item)=>{
                // return <div className="box" style={{ backgroundColor:item }}></div>
                return <ColorBox bgColor={item}/>
            })}
        </div>
    );
}
*/
/*
function Practice05() {
    let [box, setBox] = useState(['red','blue','green','black']);
    return (

        <div>
            <button onClick={() => {
                let box2 = [...box];
                box2.unshift(<Boxred />);
                setBox(box2);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.unshift(<Boxblue />);
                setBox(box2);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.unshift(<Boxgreen />);
                setBox(box2);
            }}>앞초록박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.push(<Boxred />);
                setBox(box2);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.push(<Boxblue />);
                setBox(box2);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.push(<Boxgreen />);
                setBox(box2);
            }}>뒤초록박스추가</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.shift();
                setBox(box2);
            }}>앞 박스 삭제</button>
            <button onClick={() => {
                let box2 = [...box];
                box2.pop();
                setBox(box2);
            }}>뒤 박스 삭제</button>
            <br>
            </br>
            {box}
        </div>
    );
    function Boxred() {
        return (
            <div className="box" style={{ backgroundColor: 'red' }}>
                <button onClick={() => {
                    let box2 = [...box];
                    box2.splice(box2[index], 1);
                    setBox(box2);
                }}>x</button>
            </div>
        );
    }
    function Boxblue() {
        return (
            <div className="box" style={{ backgroundColor: 'blue' }}>
                <button onClick={() => {
                    let box2 = [...box];
                    box2.splice(box2[index], 1);
                    setBox(box2);
                }}>x</button>
            </div>
        );
    }
    function Boxgreen() {
        return (
            <div className="box" style={{ backgroundColor: 'green' }}>
                <button onClick={() => {
                    let box2 = [...box];
                    box2.splice(box2[index], 1);
                    setBox(box2);
                }}>x</button>
            </div>
        );
    }
    function Boxblack() {
        return (
            <div className="box" style={{ backgroundColor: 'black' }}>
                <button onClick={() => {
                    let box2 = [...box];
                    box2.splice(box2[index], 1);
                    setBox(box2);
                }}>x</button>
            </div>
        );
    }
}
*/
export default Practice05;