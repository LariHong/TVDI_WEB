$(function () {
    $(".box").hover(function () {
        $(this).addClass("BGBG")    
    },
    function () {
        $(this).removeClass("BGBG")    
    })
})

// $(function () {
//     $(".box").each(function (index) {
//         var initialSrc = $(this).find("img").attr("src"); // Get the initial src attribute
//         var hoverSrc = "images/G" + (index + 1) + ".png"; // Construct the hover src attribute

//         $(this).hover(
//             function () {
//                 $(this).addClass("BGBG");
//                 $(this).find("img").attr("src", hoverSrc);
//             },
//             function () {
//                 $(this).removeClass("BGBG");
//                 $(this).find("img").attr("src", initialSrc);
//             }
//         );
//     });
// });