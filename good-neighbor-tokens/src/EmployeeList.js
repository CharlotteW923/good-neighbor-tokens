
import {employeeData} from "./data/employeeData.js"

function EmployeeList() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="employee-container">
          {employeeData.map((data, key) => {
            return (
              <div key={key}>
                {data.username +" , " +data.tokenCount}
              </div>
            );
          })}
      </div>
    </div>
  );
}



export default EmployeeList;

