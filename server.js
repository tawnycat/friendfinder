var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app, path);
require("./app/routing/apiRoutes")(app, path);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});