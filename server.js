     //  DEPENDENCIES  --  EXPRESS, BODYPARSER, MYSQL
var express = require("express");
var bodyParser = require("body-parser");



     // MYSQL CONNECTION for Heroku is set via PROCESS.ENV VARIABLES
     // WEB SERVER CONNECTION IS PORT 3090
     // LOCAL MYSQL DB CONNECTION IS ON PORT 3306 (PER MYSQL SHELL)
var app = express();
var PORT = process.env.PORT || 3000;

var Sequelize = require("sequelize");

     // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
//     var sequelize = new Sequelize("sequelize_chirpy", "root", "", {
//         host: "localhost",
//        port: 3306,
//         dialect: "mysql",
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 10000
//         }
//     });


     //  the DB VARIABLE requires the MODELS FOLDER
     //  MYSQL CONNECTS via the DB VARIABLE
var db = require("./models");


      // EXPRESS USES BODY-PARSER UTILITIES urlencoded and json
      // TO CONVERT FROM BINARY to JSON FORMAT
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

     // the PUBLIC folder includes html, css, images, js files (other than server.js)
app.use(express.static("public"));


     //  API ROUTES

require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);


    // START LISTENING on SERVER-SIDE PORT

 db.sequelize.sync().then(function() {
     app.listen(PORT, function() {
       console.log("]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");
       console.log("]]]]]]  STEP 1: SERVER listening on localhost Port: " + PORT);
         });
     console.log("]]]]]]  STEP 2: DB CONNECTION  - NO ERRORS");
     console.log("]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");
 });