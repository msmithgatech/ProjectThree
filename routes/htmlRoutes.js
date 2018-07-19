var path = require("path");

           //  ORDER IS IMPORTANT....ALL OTHER ROUTES NEED TO BE BEFORE HOME


module.exports = function(app) {

          //  GLOBAL LIST - SHOW ALL ACTIVE RECIPIENTS
    app.get("/showall", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/all.html"));
    });

          //  SHOW ACTIVE WISHES FOR ONE RECIPIENTS
    app.get("/showperson", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/showperson.html"));
    });

    //  ADD NEW RECIPIENT
    app.get("/addperson", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/addperson.html"));
    });

          //  DISPLAY HOME PAGE
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

};