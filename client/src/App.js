import "./App.css";
import react, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

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
        <label>Annual Salary ($):</label>
        <input
          value={salary}
          className="information__input"
          type="number"
          onChange={handleSalary}
        ></input>
        <button className="information__button">Add Employee</button>
      </div>
    </div>
  );
}

export default App;
