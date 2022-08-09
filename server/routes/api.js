const express = require("express");
const router = express.Router();
const Program = require("../models/Program");
const Company = require("../models/Companies");

router.get("/program/:programName", (req, res) => {
  let programName = req.params.programName;

  Program.findOne({ name: programName }, function (err, program) {
    res.send(program);
  });
});

router.get("/get", (req, res) => {
  Program.find({}, function (err, programms) {
    res.send(programms);
  });
});

router.post("/save", (req, res) => {
  let program = req.body;
  let newProgram = new Program(program);
  newProgram.save();
  res.end();
});

router.get("/companies", (req, res) => {
  Company.find({}, function (err, companies) {
    res.send(companies);
  });
});

router.post("/company", (req, res) => {
  let newCompany = new Company(program);
  newCompany.save();
  res.end();
});

module.exports = router;
