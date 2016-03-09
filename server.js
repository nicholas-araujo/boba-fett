var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dist'));

// This is necessary to specify the port from process.env
// Otherwise heroku will throw an error
app.listen(process.env.PORT || 5000);
console.log("Application server started...");
