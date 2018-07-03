
// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {

    //  LIST ALL WISHES
    app.get("/api/all", function(req, res) {
        var dbQuery = "SELECT * FROM wishes";

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    //  ADD A WISH
    app.post("/api/new", function(req, res) {
        console.log("Adding a new WISH:");
        console.log(req.body);

        var dbQuery = "INSERT INTO giftpkg (giftFrom, giftCenter, giftTo, pkgType, requestDt,\n" +
                      "carrier, shipDt, deliverDt, status, comment) VALUES (?,?,?)";

        //INSERT INTO giftpkg (id, giftFrom, giftCenter, giftTo, pkgType, requestDt,
        //                      carrier, shipDt, deliverDt, status, comment)

        connection.query(dbQuery, [req.body.giftFrom, req.body.giftCenter, req.body.giftTo,
                                   req.body.pkgType, req.body.requestDt, req.body.status],
            function(err, result) {
                if (err) throw err;
                console.log("WISH SAVED for " + req.body.giftTo);
                res.end();
            }
        );
    });

    //  UPDATE A WISH --- SHIP DATE, DELIVERY DATE, STATUS (active or inactive), COMMENTS (if inactive)
    app.put("/api/update", function(req, res) {
        console.log("UPDATING A WISH:");
        console.log(req.body);

        var dbQuery = "UPDATE giftpkg SET";
            dbQuery += "requestDT = ?, carrier = ?, shipDt = ?, ";
            dbQuery += "deliveryDT = ?, satus = ?, comment = ? ";
            dbQuery += "WHERE (giftFrom = ? AND giftCenter = ? ";
            dbQuery += "AND giftTo = ? AND pkgType = ? AND status = ?)";

        connection.query(dbQuery, [req.body.requestDT, req.body.carrier, req.body.shipDt,
                                   req.body.deliveryDt, req.body.status, req.body.comment,
                                   req.body.giftFrom, req.body.giftCenter, req.body.giftTo,
                                   req.body.pkgType, req.body.status],
            function(err, result) {
                if (err) throw err;
                console.log("WISH SAVED for " + req.body.giftTo);
                res.end();
            }
        );
    });
};
