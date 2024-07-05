$(function () {
    $(".AA").click(function () {
        // $(this).siblings().css({ "background-color": "#93C" });

        //可以是標籤名稱 或者是 選擇器
        $(this).nextUntil("p").css({ "background-color": "#93C" });
    });
});