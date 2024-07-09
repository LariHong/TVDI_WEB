// $(function () {

//     $(".BANNER").click(function () {

//         $(this).find(".BOX").slideDown(300).end().siblings().find(".BOX").slideUp(300);
//     })
// })
// =================================================
// $(function () {
//     // 點擊 .BANNER 元素時的操作
//     $(".BANNER").click(function () {
//         // 展開當前點擊的 .BANNER 下的 .BOX，收起其他兄弟元素的 .BOX
//         $(this).find(".BOX").slideDown(300).end().siblings().find(".BOX").slideUp(300);
//     });

//     // 點擊頁面其他地方時的操作
//     $(document).click(function (event) {
//         // 如果點擊的不是 .BANNER 元素或其內部元素
//         if (!$(event.target).closest(".BANNER").length) {
//             // 收起所有 .BANNER 下的 .BOX
//             $(".BANNER .BOX").slideUp(300);
//         }
//     });
// });
// =================================================
$(function () {

    $(".BANNER").on("click", aaa);

    function aaa() {
        $(this).find(".BOX").slideDown(300).end().siblings().find(".BOX").slideUp(300);
    }
});


