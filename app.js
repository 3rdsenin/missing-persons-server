//import express module

const express = require("express");
const cors = require("cors");

//create an instance of express
const app = express();

//apply cors middleware
app.use(cors());

module.exports = app;



