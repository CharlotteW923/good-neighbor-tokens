import React, { Component } from "react";
import {useState} from "react";
import {employeeData} from "./data/employeeData.js"
import "./style/SearchFeature.css";
import Popup from "./Popup.js";
import FavoriteList from "./FavoriteList.js";


function SearchFeature(){
      const [query, setQuery] = useState("")
      const [isOpen, setIsOpen] = useState(false);
      const [userName, setUserName] = useState("")
      const [favUser, setFavorite] = useState("")
  

      const togglePopup = (u) =>{
        setIsOpen(!isOpen);
        setUserName(u.target.value);
      }


      const AddToFavorite = (f) =>{
        setFavorite(f.target.value);
      }

      return <div className="SearchFeature">
        <div className="AliasSearch">
        <input className="AliasSearchField" placeholder="Enter Alias Here" onChange={event => setQuery(event.target.value)} />
        {
          employeeData.filter(data => {
            if (query === '') {
              return data;
            } else if (data.username.toLowerCase().includes(query.toLowerCase())) {
              return data;
            }
          }).map((data, key) => (
            <div className="searchUserContainer" key={key}>
              <button className="searchUserButton" value={data.username} onClick={u => {togglePopup(u)}}>{data.username}</button>
                {isOpen && <Popup 
                content ={<>
                  <b>Send {userName} a Neighborly Token?</b>
                  <p></p>
                  </>}
                user={userName}                
                handleClose = {togglePopup}/>}

              <button className="favoriteButton" value={data.username} onClick={f => {AddToFavorite(f)}}>Favorite {data.username}?</button>
            </div>
          ))
        }
        </div>
        {<FavoriteList 
                favoritedUser={favUser}/>}
      </div>;
}


export default SearchFeature;

