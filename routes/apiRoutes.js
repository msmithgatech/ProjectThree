        //  DEPENDENCY:  REQUIRE THE DB MODEL (wishes table)
var db = require("../models");


       //==== CRUD ROUTES  ====
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.wishes.findAll({
            where: {wishtostatus: true}
        })
            .then(function(dbwishes) {
                res.json(dbwishes)
            })
    });

          //  FIND ALL ACTIVE WISHES
    app.get("/api/active", function(req, res) {
        db.wishes.findAll({
            where: {wishtostatus: true}
        })
        .then(function(dbwishes) {
            res.json(dbwishes)
        })
    });


          //  FIND ACTIVE RECORDS FOR ONE RECIPIENT
    app.get("/api/one", function(req, res) {
        db.wishes.findWhere(
          {where: {wishto: req.params.wishto,
                   wishtostatus: true
          }
        })
        .then(function(dbwishes) {
            res.json(dbwishes)
        })
    });


           //  ADD NEW RECIPIENT
    app.post("/api/wishto", function(req, res) {
        db.wishes.create(req.body).then(function(dbwishes) {
            res.json(dbwishes);
        });
    });


          //  UPDATE AN EXISTING WISH
    app.put("/api/update", function(req, res) {
        db.wishes.update(wishes,
          {where: {wishfrom: req.body.wishfrom,
                   wishcenter: req.body.wishcenter,
                   wishto: req.body.wishto,
                   pkgtype: req.body.pkgtype,
                   wishtostatus: true
          }
        })
        .then(function(dbwishes) {
            res.json(dbwishes);
        });
    });


          //  ARCHIVE AN EXISTING RECIPIENT
          //  THERE WONT BE A DELETE FUNCTION
          //  RECORDS WILL BE KEPT FOR AUDITS
    app.put("/api/update", function(req, res) {
        db.wishes.update(wishes,
          {where: {wishfrom: req.body.wishfrom,
                   wishcenter: req.body.wishcenter,
                   wishto: req.body.wishto,
                   pkgtype: req.body.pkgtype,
                   deliverdt: req.body.deliverdt,
                   wishtostatus: true
          }
        })
        .then(function(dbwishes) {
            res.json(dbwishes);
        });
    });

};






//================================================================================================
    //  ADD A WISH
 //   app.post("/api/new", function(req, res) {
 //       console.log("Adding a new WISH:");
 //       console.log(req.body);

 //       var dbQuery = "INSERT INTO wishes (giftFrom, giftCenter, giftTo, pkgType, ";
 //           dbQuery+= "requestDt, carrier, giftToStatus) VALUES (?, ?, ?, ?, ?, ?, ?)";

        //INSERT INTO wishes (id, giftFrom, giftCenter, giftTo, pkgType, requestDt,
        //                      carrier, shipDt, deliverDt, status, comment)

   //     connection.query(dbQuery, [req.body.giftFrom, req.body.giftCenter, req.body.giftTo, req.body.pkgType,
     //                              req.body.requestDt, req.body.carrier, req.body.giftToStatus],
   //         function(err, result) {
   //             if (err) throw err;
   //             console.log("============  BEGIN   ADD NEW REQUEST   ===========");
   //             console.log(" ON " + req.body.requestDT + " GIFTBAG " + req.body.pkgType );
   //             console.log("ADDED for " + req.body.giftTo + "by " + req.body.giftFrom);
   //             console.log("============  END     ADD NEW REQUEST   ===========");
   //             res.end();
   //         }
   //     );
   // });

    //  UPDATE A WISH --- SHIP DATE, DELIVERY DATE, STATUS (active or inactive), COMMENTS (if inactive)
//    app.put("/api/update", function(req, res) {
//        console.log("UPDATING A WISH:");
//        console.log(req.body);

//        var dbQuery = "UPDATE wishes SET ";
//            dbQuery += "requestDT = ?, carrier = ?, shipDt = ?, ";
//            dbQuery += "deliveryDT = ?, giftToStatus = ?, giftcomment = ? ";
//            dbQuery += "WHERE (giftFrom = ? AND giftCenter = ? ";
//            dbQuery += "AND giftTo = ? AND pkgType = ? AND goftToStatus = ?)";

//        connection.query(dbQuery, [req.body.requestDT, req.body.carrier, req.body.shipDt,
//                                   req.body.deliveryDt, req.body.giftToStatus, req.body.giftcomment,
//                                   req.body.giftFrom, req.body.giftCenter, req.body.giftTo,
//                                   req.body.pkgType, req.body.giftToStatus],
//            function(err, result) {
//                if (err) throw err;
//                console.log("#############  BEGIN   UPDATE EXISTING REQUEST   #############");
//                console.log(" ON " + req.body.requestDT + " GIFTBAG " + req.body.pkgType );
//                console.log("UPDATED for " + req.body.giftTo + "by " + req.body.giftFrom);
//                console.log("#############  END     UPDATE EXISTING REQUEST   #############");
//                res.end();
//            }
//        );
//    });

