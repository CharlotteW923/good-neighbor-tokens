import React from "react";
import {useState} from "react";
import {employeeData} from "./data/employeeData.js"
import "./style/SearchFeature.css";



function SearchFeature(){
      const [query, setQuery] = useState("")

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
              <button className="searchUserButton" value={data.username}>{data.username}</button>
              <button className="favoriteButton" onClick={(() => {
                data.favorite = !data.favorite;
                console.log("Is " +data.username+ " a favorite?: " + data.favorite)
              })}>Favorite?</button>
            </div>
          ))
        }






        </div>
      </div>;
}


export default SearchFeature;

