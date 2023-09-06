const express = require("express");
const morgan = require("morgan");
const router = require("./routes/routes");
const cors = require("cors");
const { config } = require("dotenv");

const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

config();
const port = process.env.PORT || 4000;

app.listen(port);
console.log("server on port 4000");
