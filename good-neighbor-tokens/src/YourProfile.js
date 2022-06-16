import React from "react";
import {profile} from "./data/userData.js"
import "./style/YourProfile.css";

function YourProfile() {
    
  return (
    <div className="YourProfile">
      <div className="profileInfo">
      <div id="username">{profile.username}</div>
      </div>
      <div className="profileInfo">
      <div id="tokenCount">{profile.tokenCount} Tokens</div>
      </div>

    </div>
  );
}



export default YourProfile;

