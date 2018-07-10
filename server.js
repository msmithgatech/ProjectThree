     //  DEPENDENCIES  --  EXPRESS, BODYPARSER, MYSQL
var express = require("express");
var bodyParser = require("body-parser");



     // MYSQL CONNECTION for Heroku is set via PROCESS.ENV VARIABLES
     // WEB SERVER CONNECTION IS PORT 3090
     // LOCAL MYSQL DB CONNECTION IS ON PORT 3306 (PER MYSQL SHELL)
var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");

      // EXPRESS USES BODY-PARSER UTILITIES urlencoded and json
      // TO CONVERT FROM BINARY to JSON FORMAT
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

     // the PUBLIC folder includes html, css, images, js files (other than server.js)
app.use(express.static("public"));


     //  HTML AND API ROUTES

require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);


    //  MYSQL CONNECTS via the DB VARIABLE
    //  the DB VARIABLE requires the MODELS FOLDER
    //
    //  and START LISTENING on SERVER-SIDE PORT
//console.log("NEXT LINE CONNECTS THE DB AND PORT LISTENING");
//db.sequelize.sync({force: false}).then(function() {

 db.sequelize.sync().then(function() {
   app.listen(PORT, function() {
       console.log("SERVER listening on localhost Port:" + PORT);
    });
});