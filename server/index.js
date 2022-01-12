const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 8000;

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "employeesystem",
// });

const db = mysql.createConnection({
  user: "b0bd4c4fe3358d",
  host: "us-cdbr-east-05.cleardb.net",
  password: "3ece77f3",
  database: "heroku_245442ac4a472af",
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
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.listen(8000, () => {
//   console.log("Server is running on PORT 8000");
// });

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
