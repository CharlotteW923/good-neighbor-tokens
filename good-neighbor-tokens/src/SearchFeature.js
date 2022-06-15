import React from "react";



class SearchFeature extends React.Component{

  constructor(props) {
      super(props);
    }




  render(){
      return <div className="SearchFeature">
        <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <input type="text" placeholder="Search.."></input>
        </div>
      </div>;
  }
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

