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
            <div key={key}>
              <button className="searchUserButton" value={data.username}>{data.username}</button>
              <button className="favoriteButton">Favorite?</button>
            </div>
          ))
        }


{/* 
        {employeeData.map((data, key) => {
            return (
              <div key={key}>
                {data.username +" , " +data.tokenCount}
              </div>
            );
        })}

        {employeeData.filter(data => {
          if (query === "") {
            //if query is empty
            return data;
          } else if (data.username.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return data;
          }   
        })} */}




        </div>
      </div>;
}





// function SearchFeature() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//         SearchFeature
//         </p>
//       </header>
//     </div>
//   );
// }



export default SearchFeature;

