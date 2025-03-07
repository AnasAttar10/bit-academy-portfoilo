const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const api = require("./server/routes/api");
mongoose.connect("mongodb://localhost/bitAcademyDB", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", api);
const port = 8888;

app.listen(process.env.PORT || port, function () {
  console.log(`Runnin runnin and runnin runnin on port ${port}`);
});
