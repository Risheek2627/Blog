const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rayaru",
  database: "blog_database",
});

module.exports = db;
