const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db",
  port: 3307,                // Default MySQL port
  connectTimeout: 10000  
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;
