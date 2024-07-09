// -BANNER-
$(function () {

    $(".BANNER").hover(function () {

        $(this).find(".BOX").stop().slideDown(300);
    }, function () {

        $(this).find(".BOX").stop().slideUp(300);
    })

})

// -h3-
// $(function () {

//     $("h3").hover(function () {

//         $(this).siblings().stop().slideDown(300);
//     }, function () {

//         $(this).siblings().stop().slideUp(300);
//     })

// })