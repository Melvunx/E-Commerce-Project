import mysql from "mysql";
require("dotenv").config();
const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

const database = mysql.createConnection({
  host: "localhost",
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
});

export default database;
