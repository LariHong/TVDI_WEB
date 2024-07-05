$(function () {
    $(window).scroll(function () {
        var cond = $(window).scrollTop()

        if (cond > 100) {
            $("#top-bar").stop().animate({ top: 0 }, 600)
        }
        else {
            $("#top-bar").stop().animate({ top: -65 }, 600)
        }
    })
})