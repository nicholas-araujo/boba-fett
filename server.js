var express = require('express');
var app = express();
var path = require('path');

// "www" is considered as the public folder in your app to serve the static resources
app.use(express.static(express.static(__dirname + '/dist')));

// This is necessary to specify the port from process.env
// Otherwise heroku will throw an error
app.listen(process.env.PORT || 5000);
console.log("Application server started...");
