import React, {Component} from "react";
import {employeeData} from "./data/employeeData.js"
import "./style/SearchFeature.css";

class FavoriteList extends Component {

  constructor(props) { super(props); this.state = { count: this.props.count } } 


  increment(){
    console.log("this.props.count");
    console.log(this.props.count);
    let count = this.state.count;
    count.push("new element");
    this.setState({ count: count}) 
  } 

  render(){
    return (
      <div className="Favorite">
          <div className="employee-container">
          {
            employeeData.filter(data => {
              if (data.favorite == true) {
                return data.username;
              }
            }).map((data, key) => (
              <div className="searchUserContainer" key={key}>
                <button className="searchUserButton">{data.username}</button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}


export default FavoriteList;

