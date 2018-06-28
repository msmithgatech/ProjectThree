//  REQUIREMENTS  --  EXPRESS, BODYPARSER, MYSQL
var mysql = require("mysql");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

// express will use bodyparser to help determine routing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// the PUBLIC folder has the html, css, js, etc.
app.use("./public");


//   ROUTES

app.use("./routes/apiRoutes");
app.use("./routes/htmlRoutes");



//  DB CONNECT and FRONT-END LISTENING PORT

    app.listen(PORT, function() {
        console.log("WELLWISHES db connected and server listening at port " + PORT);
    });

