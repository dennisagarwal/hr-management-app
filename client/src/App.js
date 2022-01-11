import "./App.css";
import react, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(35000);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };


  const handlePosition = (event) => {
    setPosition(event.target.value);
  };


  const handleSalary = (event) => {
    setSalary(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleEducation = (event) => {
    setEducation(event.target.value);
  };


  return (
    <div className="app">
      <div className="information">
        <label>Name:</label>
        <input
          className="information__input"
          type="text"
          onChange={handleName}
        ></input>
        <label>Age:</label>
        <input
          className="information__input"
          type="number"
          onChange={handleAge}
        ></input>
        <label>Country:</label>
        <input className="information__input" type="text"></input>
        <label>Position:</label>
        <input className="information__input" type="text"></input>
        <label>Education:</label>
        <input className="information__input" type="text"></input>
        <label>Annual Salary ($):</label>
        <input className="information__input" type="number"></input>
        <button className="information__button">Add Employee</button>
      </div>
    </div>
  );
}

export default App;
