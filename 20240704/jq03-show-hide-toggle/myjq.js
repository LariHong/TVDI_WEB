$(function () {
    $("#AAA").click(function () {
        // $("#PP").show(250)
        // $("#PP").slideDown(250)
        // $("#PP").fadeIn(250)
        $("#PP").fadeTo(250,1)
    })

    $("#BBB").click(function () {
        // $("#PP").hide(250)
        // $("#PP").slideUp(250)
        // $("#PP").fadeOut(250)
        $("#PP").fadeTo(250,0)
    })

    $("#CCC").click(function () {
        // $("#PP").toggle(250)
        // $("#PP").slideToggle(250)
        // $("#PP").fadeToggle(250)
        $("#PP").fadeTo(250,0.5)
    })
})