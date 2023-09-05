const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  password: "EYKK9HP7YCc",
  host: "localhost",
  port: 5432,
  database: "clientsdb",
});

module.exports = db;
