// load express module
var express = require('express');
require('./setupMongo')();

//Create express app
var app = express();

app.use(express.json());
app.use("/auth", require("./routes/auth"))
app.use("/todo", require("./routes/todo"))

module.exports = app;