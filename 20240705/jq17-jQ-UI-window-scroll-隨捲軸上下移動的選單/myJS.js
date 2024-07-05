$(function () {
    $(window).scroll(function () {
        var menutop = $(window).scrollTop() + 150
        $("#MENU").stop().animate({ top: menutop }, 600)
    })
})