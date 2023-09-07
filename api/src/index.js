const express = require("express");
const morgan = require("morgan");
const router = require("./routes/routes");
const cors = require("cors");
const { config } = require("dotenv");

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Content-Length");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

config();
const port = process.env.PORT || 4000;

app.listen(port);
console.log("server on port 4000");
