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

      return <div className="App">
                <div className="coreComponents">
                  <YourProfile />
                </div>
                <div className="coreComponents">
                  <SearchFeature />
                </div>
             </div>;
  }

export default App;
