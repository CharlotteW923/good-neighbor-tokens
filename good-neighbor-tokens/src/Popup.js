import React, {useState} from "react";
import {employeeData} from "./data/employeeData.js"
import {profile} from "./data/userData.js"

const Popup = props => {
    const[data,setData] = useState(null);
    const [print,setPrint]=useState("");

    function getData(val){
        setData(val.target.value)
    }

    function updateSendData(){
        employeeData.filter(eData => {
            if (eData.username.toLowerCase().includes(props.user.toLowerCase())){
              eData.messagesRecieved.push({
                "message":data,
                "from": profile.username,
            })

            profile.tokenCount -= 1;
            eData.tokenCount += 1;
            
            console.log(employeeData);
            console.log(profile);

            }
          })
    }

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                <div className = "TextBox">{
                    print?
                    <h2>Token sent to {props.user}</h2>
                    :null
                }
                <input type = "text" onChange={getData}/>
                <button onClick={updateSendData}>Save Message</button>
                <div>{data}</div>
                </div>
            </div>
        </div>
    );
};

export default Popup;