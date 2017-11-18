// Packages required 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Initializes body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Requires routing Javascript files
require("./app/routing/htmlRoutes")(app, path);
require("./app/routing/apiRoutes")(app, path);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});