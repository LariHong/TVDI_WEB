$(function () {
    $("#MENU li").hover(function () {

        $(this).stop().animate({ top: 0 }, 150);
        $(this).siblings().stop().animate({ top: 60 }, 150);

     }, function () {
        $("#MENU li").stop().animate({ top: 100 }, 150);
    })













})