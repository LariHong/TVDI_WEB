$(function () {
    $("#M01").click(function (e) {
        var top = $("#AAA").offset().top
        $("html,body").stop().animate({ scrollTop: top }, 600)
        e.preventDefault()
    })
    $("#M02").click(function (e) {
        var top = $("#BBB").offset().top
        $("html,body").stop().animate({ scrollTop: top }, 600)
        e.preventDefault()
    })
    $("#M03").click(function (e) {
        var top = $("#CCC").offset().top
        $("html,body").stop().animate({ scrollTop: top }, 600)
        e.preventDefault()
    })
    $("#M04").click(function (e) {
        var top = $("#DDD").offset().top
        $("html,body").stop().animate({ scrollTop: top }, 600)
        e.preventDefault()
    })
})
