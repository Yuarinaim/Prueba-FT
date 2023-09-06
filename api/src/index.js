const express = require("express");
const morgan = require("morgan");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

app.listen(4000);
console.log("server on port 4000");
