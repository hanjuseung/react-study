function ColorBox(props){

    return(<div className="box" style={{ backgroundColor:props.bgColor }}>
        <button onClick={()=>{
            let box2 = [...props.box];
            box2.splice(props.index,1);
            props.setBox(box2);
        }}>x</button>
    </div>);
    
}

export default ColorBox;