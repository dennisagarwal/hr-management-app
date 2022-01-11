const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: "rootroot",
  database: 'employeesystem',
});

app.get

app.listen(8000, () => {
  console.log("Server is running on PORT 8000");
});
