import React from "react";
import {profile} from "./data/userData.js"



class YourProfile extends React.Component{

    constructor(props) {
        super(props);
      }


    render(){
        return <div className="App">
            <div>
                {this.props.name}
            </div>
            <div>
                {this.props.tokenCount}
            </div>
        </div>;
    }
}











// function YourProfile() {
    
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//       <div className="profileInfo">
//         {this.props.name}
//       </div>
//       <div className="profileInfo">
//         {profile.tokenCount}
//       </div>

//     </div>
//   );
// }



export default YourProfile;

