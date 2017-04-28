//npm packages 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Creating an express server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 3005;

//using bodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//points the server to the route files.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//port that the server is listening to
app.listen(3005, function() {
    console.log("server is listening on port 3005");
});
