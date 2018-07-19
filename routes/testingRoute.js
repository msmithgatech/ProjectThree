// var path = require("path");

//  ORDER IS IMPORTANT....ALL OTHER ROUTES NEED TO BE BEFORE HOME

var db = require("../models/wishes.js");

module.exports = function(app) {

    //  GLOBAL LIST - SHOW ALL ACTIVE RECIPIENTS

   console.log("&&&&&&&&  IN MODULE TESTING ROUTES  &&&&&&&&");

   app.get("/showall", function(req, res) {

       console.log("***BEGIN: SHOWALL");

       Wishes.findAll(
           {group: "Wishes.wishcenter, Wishes.wishfrom"})
         .then(function(results) {

             onsole.log("==================" + "\n" +
                        " SUCCESSFUL db READ for ALL ACTIVE WISHES " + "\n ");
             console.log(results);
             console.log("==================");
    //         res.json(results);
       });
       console.log("***END:  SHOWALL in TESTINGROUTES ");
       console.log("&&&&&&&&     &&&&&&&&" + "\n");
   })

};     // END API ROUTES MODULE EXPORT