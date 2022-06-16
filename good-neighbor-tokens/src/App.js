import React from "react";
import logo from './logo.svg';
import './App.css';
import {profile} from "./data/userData.js"
import YourProfile from "./YourProfile.js";
import SearchFeature from "./SearchFeature.js"
import FavoriteList from "./FavoriteList.js";
import Popup from './Popup';
import {useState} from 'react';
import './style.css';


function App(){


  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () =>{
    setIsOpen(!isOpen);
  }

      return <div className="App">
                <div className="coreComponents">
                  <YourProfile />
                </div>
                <div className="coreComponents">
                  <SearchFeature />
                </div>
                <div className="coreComponents">
                  <FavoriteList />
                </div>

                <button onClick={togglePopup}>Send a message</button>
                {isOpen && <Popup 
                content ={<>
                  <b>New Message</b>
                  <p>This is sample content</p>
                  </>}
                
                handleClose = {togglePopup}/>}

             </div>;
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
