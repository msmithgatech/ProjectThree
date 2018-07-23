$(document).ready(function() {
    var $inqClinicsContainer = $(".inqClinics-container");

    $(document).on("click", "#inqGlobal", getGlobal);
    $(document).on("click", "#admStatus", admstatus);
    $(document).on("click", "#arkGlobal", arkGlobal);

    var wishes = [];


    function getGlobal() {
        $.get("/inqGlobal", function(data) {

            var gCountry = ["  G H A N A  ", "  H A I T I  ", " N I G E R I A "];
            imgSource = ["./images/flagGhana.jpg", "./images/flagHaiti.jpg", "./images/flagNigeria.jpg"];


            if (data.length !== 0) {
                var examCenter = "";
                var examAdmin = "";

                for (var f = 0; f < gCountry.length; f++) {
                    var gFlag = $("<div>");
                    gFlag.addClass("wFlag");
                    gFlag.append("<img src=" + imgSource[f] + ">");
                    gFlag.append("<p>" + gCountry[f] + "</p></div>");
                    $("#wwCntry").append(gFlag);

                    var bldLi = [];
                    for (var i = 0; i < data.length; i++) {
                    }
                    var gList = $("<li>");
                    gList.addClass("list-group-item clinic-item");


                    if (i = 0)
                    {
                        examCenter = data[i].wishcenter;
                        examAdmin = data[i].wishadmin;
                    } else {
                        if (examAdmin !== data[i].wishadmin) {
                            gList.append = $("<br>");
                            examAdmin = data[i].wishadmin;
                        }
                        if (examCenter !== data[i].wishcenter) {
                            gList.append = $("<br>");
                            examCenter = data[i].wishcenter;
                        }
                    }

// "Ghana", "Krobo River CDC Techiman Ghana", "Naa", "Ampah Gyasi", 22,
// "Diverticulitis", 0,"",0,0, "Active", "")

// "Ghana", "Prah Aging Center Techiman Ghana", "Sene", "Okufore Chitwell", 17, "Emphysema",
// 20180205, "ITD Global", 20180309, 20180412, "Active", "")
                    bldLi[i] = data[i].wishcenter;
                    if (data[i].wishadmin == "") {
                        bldLi[i]  += ", "  +  "*, "  +  "*, "  +  "*, "
                                  + "*, "  +  "0, "  +  "0, "  +  "Active, "  +  "*";
                    } else {
                        bldLi[i] += ", " + data[i].wishadmin;
                    }

//  center, admin, patient, id, illness, rqdt, carrier, shipdt, delvydt
                    if (data[i].wishto === "") {
                        bldLi[i] +=  ", "  +  "*, "  +  "*, "  +  "*, "
                                  +  "*, " +  "*, "  +  "*, "  +  "*";
                    }
                    else {
                        bldLi[i] +=  ", " + data[i].wishTo + "," + data[i].id +
                            + ", " + data[i].pkgtype
                            + ", " + DATE_FORMAT(data[i].request_At, "%M %d %Y");

                        if (data[i].carrier !== "") {
                            bldLi[i] += ", " + data[i].carrier
                                + ", " + DATE_FORMAT(data[i].shipped_At, "%M %d %Y");
                        }
                        if (i >= 3 || i < 6) {
                            bldLi[i] += ", " + DATE_FORMAT(data[i].delivery_At, "%M %d %Y");
                        }
                    }     // WISHTO NOT BLANK

                    gList.append("<li>" + bldLi[i] + "</li>");
                    if (i = data.length - 1)
                    {
                        gList.append = $("<ol>");
                    }
                    $inqClinicsContainer.append(gList);

                }    // INDEX i

            }    // INDEX  f

        });    // DATA OBJECT IS NOT EMPTY

    }



     //===============================================================================
     //     READ     READ WISHES DB, DISPLAY GLOBAL ARCHIVES
     //===============================================================================

    function arkGlobal() {
        $.get("/arkGlobal", function(data) {
            wishes = data;
            getGlobal();
        });
    }


    //==============================================================================
    //     UPDATE      RECIPIENT STATUS FROM ACTIVE TO INACTIVE
    //==============================================================================

    function admstatus(wishes) {
        var id = $(this).data("id");
        $.ajax({
            method: "PUT",
            url: "/admStatus/" + id,
            data: wishes
        }).then(getGlobal);
    }

});    // END DOCUMENT READY