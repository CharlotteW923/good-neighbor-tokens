import React, {Component} from "react";
import {employeeData} from "./data/employeeData.js"
import {favoritesData} from "./data/favorites.js"
import "./style/SearchFeature.css";
import Button from '@material-ui/core/Button';
import StarIcon from '@mui/icons-material/Star';



const FavoriteList = props => {


  var isInFavorites = false;


  for(var i = 0; i < favoritesData.length; i++){
    if(favoritesData[i].username === props.favoritedUser){
      isInFavorites = true;
    }
  }


  if(isInFavorites == false){
        favoritesData.push(
          {
            "username":props.favoritedUser
          }
        )
  }


  return <div>
  {
    favoritesData.map((fData, key) => (
      <div key={key}>
        {fData.username}
      </div>
    ))
  }

  </div>



}

export default FavoriteList;
