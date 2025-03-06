const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "travel_blog",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

module.exports = db;
