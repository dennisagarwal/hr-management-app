const express = require("express");
const app = express();
const mysql = require("mysql");
const cors= require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rootroot",
  database: "employeesystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const position = req.body.position;
  const country = req.body.country;
  const education = req.body.education;
  const wage = req.body.wage;

  //column names  (name, age, country, position education, wage)
  db.query(
    "INSERT INTO employees (name, age, country, position, wage,education) VALUES (?,?,?,?,?,?)",
    [name, age, country, position, wage, education],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {

  db.query("SELECT * FROM employees",(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on PORT 8000");
});
