//  ROUTES TO SAVE TO THE DB

        //  DEPENDENCY:  REQUIRE THE DB MODEL (wishes table)
var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

       //==== CRUD ROUTES  ====
module.exports = function(app) {

    //  FIND ALL RECIPIENTS
    app.get("/inqGlobal", function (req, res) {
        db.Wishes.findAll({group: "wishcenter, wishfrom, wishto"},
            {where:
                    {
                        wishtostatus: "Active"
                    }
            }).then(function(dbwishes) {
            res.json(dbwishes);
        });
    });


    //  UPDATING A RECIPIENT'S STATUS FROM
    //  ACTIVE TO INACTIVE ARCHIVES THAT RECORD
    app.put("/admStatus/:id", function (req, res) {
        db.Wishes.update(
           {
               wishtostatus: req.body.wishtostatus
           },
           {where:
              {
               id: req.body.id,
               wishtostatus: "Active"
              }
           }).then(function(dbwishes) {
                res.json(dbwishes);
                  //  ERRORS ARE THROWN    (VALIDATION ERROR or ERROR FLAG)
                  //  CATCH THE THROWN ERROR TO PREVENT APP CRASH
           }).catch(function(err) {
                res.json(err);
        });
    });


    //  GLOBAL ARCHIVE LIST
    app.get("/arkGlobal", function (req, res) {
        db.Wishes.findAll({group: "wishcenter, wishfrom, wishto"},
           {where:
              {
                wishtostatus: "Inactive"
              }
           }).then(function(dbwishes) {
             res.json(dbwishes);
        });
    })

};