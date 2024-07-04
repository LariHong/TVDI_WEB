$(function () {
    for (var i = 1; i <= 6; i++){
        (function (i) {
            $("#SS" + i).click(function () {
                for (var j = 1; j <= 6; j++) {
                    if (i === j) {
                        $("#BB" + j).show();
                    } else {
                        $("#BB" + j).hide();
                    }
                }
            });
        })(i);
    }
    // $("#SS1").click(function () {
    //     $("#BB1").show()
    //     $("#BB2").hide()
    //     $("#BB3").hide()
    //     $("#BB4").hide()
    //     $("#BB5").hide()
    //     $("#BB6").hide()
    // })
    // $("#SS2").click(function () {
    //     $("#BB1").hide()
    //     $("#BB2").show()
    //     $("#BB3").hide()
    //     $("#BB4").hide()
    //     $("#BB5").hide()
    //     $("#BB6").hide()
    // })
    // $("#SS3").click(function () {
    //     $("#BB1").hide()
    //     $("#BB2").hide()
    //     $("#BB3").show()
    //     $("#BB4").hide()
    //     $("#BB5").hide()
    //     $("#BB6").hide()
    // })
})
