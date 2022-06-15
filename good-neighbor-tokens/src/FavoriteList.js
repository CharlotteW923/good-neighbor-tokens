
import {employeeData} from "./data/employeeData.js"

function FavoriteList() {
  return (
    <div className="App">
        <div className="employee-container">
          {employeeData.map((data, key) => {
            return (
              <div key={key}>
                {data.username +" , " +data.favorite}
              </div>
            );
          })}
      </div>
    </div>
  );
}



export default FavoriteList;

