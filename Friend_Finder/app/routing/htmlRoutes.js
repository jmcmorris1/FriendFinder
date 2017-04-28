//Using the path package to get the correct file path for the html
var path = require("path");

module.exports = function(app) {

    //leads to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //leads to home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
