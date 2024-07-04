$(function () {
    for (var i = 1; i <= 5; i++) {
        (function (index) {
            $("#MENU" + index).hover(
                function () {
                    $("#SUB" + index).stop(true, true).
                    slideDown();
                }, 
                function () {
                    $("#SUB" + index).stop(true, true).
                    slideUp();
                })
        })(i)

    }
})