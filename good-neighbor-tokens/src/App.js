import React from "react";
import logo from './logo.svg';
import './App.css';
import {profile} from "./data/userData.js"
import YourProfile from "./YourProfile.js";
import SearchFeature from "./SearchFeature.js"
import FavoriteList from "./FavoriteList.js";


class App extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        username: profile.username,
        tokenCount: profile.tokenCount
     };
    }


  render(){

      return <div className="App">
                <div className="coreComponents">
                  <YourProfile />
                </div>
                <div className="coreComponents">
                  <SearchFeature favoriteList={FavoriteList} />
                </div>
                <div className="coreComponents">
                  <FavoriteList favoriteList={FavoriteList}/>
                </div>
             </div>;
  }
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//         {SearchFeature()}
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
