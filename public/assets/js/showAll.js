
/* global moment */
$(document).ready(function ( {
// When user clicks add-btn
    $("#iqShowAll").on("click", function (event) {
        event.preventDefault();

        // ADD A NEW RECIPIENT using HTML FORM and THE DB MODEL

        var tempstatus = "active";

        var newWish = {
            wishcenter: $("#addCntr").val().trim(),
            wishfrom: $("#addWishFrom").val().trim(),
            wishto: $("#addWishTo").val().trim(),
            pkgtype: $("#addPkg").val().trim(),
            request_At: moment().format("YYYY-MM-DD HH:mm:ss"),
            wishtostatus: tempstatus


            //  ????  NEED TO SUPPLY DEFAULT VALUES ON AN ADD?  ????
            //  carrier: $("#addCarrier").val().trim(),
            //  ship_At: moment().format("YYYY-MM-DD HH:mm:ss"),
            //  deliver_At: moment().format("YYYY-MM-DD HH:mm:ss"),
            //  remarks: ""

        };

        console.log(newWish);

// Send an AJAX POST-request with jQuery
        $.post("/api/new", newChirp)
        // On success, run the following code
            .then(function () {

                var row = $("<div>");

                row.addClass("wCentre");
                row.append("<img>");
                row.append(src = "<img src='./images/ghana3x2WinPhoto.png\'>");

                row.append("<p>" + newChirp.author + " chirped: </p>");
                row.append("<p>" + newChirp.body + "</p>");
                row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

                $("#chirp-area").append(row);

            });

        // Empty each input box by replacing the value with an empty string
        $("#author").val("");
        $("#chirp-box").val("");
    });

// When the page loads, grab all of our chirps
    $.get("/showall", function (data) {

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var row = $("<div>");
                row.addClass("chirp");

                row.append("<p>" + data[i].author + " chirped.. </p>");
                row.append("<p>" + data[i].body + "</p>");
                row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

                $("#chirp-area").prepend(row);

            }

        }

    });
});