$(function () {
    $("#menu").hover(function () {
        $(this).stop(true,false).animate({left:0},800)
    }, function () {
        $(this).stop(true, false).animate({ left: -158 }, 800)
    })
    
    // document.getElementById("menu").onmousedown = function () {
    //     $(this).stop(true, false).animate({ left: 0 }, 800)
    // }
    // document.getElementById("menu").onmouseup = function () {
    //     $(this).stop(true, false).animate({ left: -158}, 800)
    // }
    
    // //計時器
    // var count = 0;
    // setInterval(timeAdd, 1000);

    // function timeAdd() {
    //     count += 100;
    //     $("#menu").stop().animate({left:count})

    // }
})