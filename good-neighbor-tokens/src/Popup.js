import React, {useState} from "react";

const Popup = props => {
    const[data,setData] = useState(null);
    const [print,setPrint]=useState(false);
    function getData(val){
        setData(val.target.value)
        setPrint(false)
        console.warn(val.target.value)
    }

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                <div className = "TextBox">{
                    print?
                    <h2>Message sent</h2>
                    :null
                }
                <input type = "text" onChange={getData}/>
                <button onClick={()=>setPrint(true)}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;