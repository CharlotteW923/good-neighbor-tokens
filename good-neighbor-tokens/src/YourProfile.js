import React from "react";
import {profile} from "./data/userData.js"



// class YourProfile extends React.Component{

//     constructor(props) {
//         super(props);
//       }


//     render(){
//         return <div className="App">
//             <div>
//                 {this.props.name}
//             </div>
//             <div>
//                 {this.props.tokenCount}
//             </div>
//         </div>;
//     }
// }











function YourProfile() {
    
  return (
    <div className="App">
      <div className="profileInfo">
        {profile.username}
      </div>
      <div className="profileInfo">
        {profile.tokenCount}
      </div>

    </div>
  );
}



export default YourProfile;

