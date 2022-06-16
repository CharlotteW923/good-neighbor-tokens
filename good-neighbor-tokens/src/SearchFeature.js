import React, { Component } from "react";
import {useState} from "react";
import {employeeData} from "./data/employeeData.js"
import "./style/SearchFeature.css";
import Popup from "./Popup.js";
import FavoriteList from "./FavoriteList.js";

function SearchFeature(){
      const [query, setQuery] = useState("")
      const [isOpen, setIsOpen] = useState(false);
    

      const togglePopup = () =>{
        setIsOpen(!isOpen);
      }

      return <div className="SearchFeature">
        <div className="SearchField">
        <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        {
          employeeData.filter(data => {
            if (query === '') {
              return data;
            } else if (data.username.toLowerCase().includes(query.toLowerCase())) {
              return data;
            }
          }).map((data, key) => (
            <div className="searchUserContainer" key={key}>
              {/* <button className="searchUserButton" value={data.username} onClick={togglePopup}>{data.username}</button> */}
              <button className="searchUserButton" onClick={togglePopup}>{data.username}</button>
                {isOpen && <Popup 
                content ={<>
                  <b>New Message</b>
                  <p></p>
                  </>}
                
                handleClose = {togglePopup}/>}

              {/* <button className="favoriteButton" onClick={(() => {data.favorite = !data.favorite;})}>Favorite?</button> */}
              <button className="favoriteButton" onClick={(() => {data.favorite = !data.favorite;})}>Favorite?</button>
            </div>
          ))
        }
        </div>
      </div>;
}


export default SearchFeature;

