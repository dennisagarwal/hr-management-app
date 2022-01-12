import "./App.css";
import react, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList,setEmployeeList]=useState([])

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleWage = (event) => {
    setWage(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleEducation = (event) => {
    setEducation(event.target.value);
  };

  const addEmployee = () => {
    axios.post("http://localhost:8000/create", {
      //second or white or value name,age,position etc refer to value in input
      //yellow or key or first name, age, education refers to req.body.name in server
      name: name,
      age: age,
      position: position,
      country: country,
      education: education,
      wage: wage,
    }).then(()=>{
      console.log("success")
    }).catch((error) => {
      console.log(error);
    });
  };

  const getEmployees=()=>{
    axios.get("http://localhost:8000/employees", {

    }).then((result)=>{
      console.log(result)
    }).catch((error) => {
      console.log(error);
    });
  };


  return (
    <div className="app">
      <div className="information">
        <label>Name:</label>
        <input
          value={name}
          className="information__input"
          type="text"
          onChange={handleName}
        ></input>
        <label>Age:</label>
        <input
          value={age}
          className="information__input"
          type="number"
          onChange={handleAge}
        ></input>
        <label>Country:</label>
        <input
          value={country}
          className="information__input"
          type="text"
          onChange={handleCountry}
        ></input>
        <label>Position:</label>
        <input
          value={position}
          className="information__input"
          type="text"
          onChange={handlePosition}
        ></input>
        <label>Education:</label>
        <input
          value={education}
          className="information__input"
          type="text"
          onChange={handleEducation}
        ></input>
        <label>Annual Wage ($):</label>
        <input
          value={wage}
          className="information__input"
          type="number"
          onChange={handleWage}
        ></input>
        <button onClick={addEmployee} className="information__button">
          Add Employee
        </button>
        <hr className="line" />
        <div className="employees">
        <button onClick={getEmployees} className="information__button"> Show Employees</button>
        </div>
      </div>
    </div>
  );
}

export default App;
