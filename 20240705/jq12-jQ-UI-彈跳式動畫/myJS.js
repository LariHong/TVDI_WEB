$(function () {
    $("#RRR").click(function () {
        $("#KIDS").stop(true, false).hide({ left: 800 }, 2500,"easeInOutElastic")
    })

    $("#LLL").click(function () {
        $("#KIDS").stop(true, false).show({ left: 0 }, 2500, "easeInOutElastic")
    })

})