const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/data", require("./routes/data.routes"));

module.exports = app;
