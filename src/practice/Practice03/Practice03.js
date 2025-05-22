import './Practice03.css';
import Box from './Practice03-box';
import {useState} from "react";

function Practice03() {

    // let titleArr = ['하나','둘','셋','넷','다섯'];
    // return (
    //     <div>
    //         <Box title={titleArr[0]}/>
    //         <Box title={titleArr[1]}/>
    //         <Box title={titleArr[2]}/>
    //         <Box title={titleArr[3]}/>
    //         <Box title={titleArr[4]}/>
    //     </div>
    // );

    let [titleArr,setTitleArr] = useState(['하나','둘','셋','넷','다섯']);

    return(
        
        titleArr.map((title,index)=>{
                    return <Box title={titleArr[index]}/>;
                })
        
    );
    


}

export default Practice03;