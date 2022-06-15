import React from "react";
import {profile} from "./data/userData.js"



class YourProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            usename: profile.username,
            tokenCount: profile.tokenCount
         };
      }


    componentDidMount(){
        this.setState(state, (() => "dumb"))
    }


    render(){
        return <div className="App">
            <header className="App-header">
            </header>
            <div className="profileInfo">
                {this.state.usename}
            </div>
            <div className="profileInfo">
            {this.state.tokenCount}
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

