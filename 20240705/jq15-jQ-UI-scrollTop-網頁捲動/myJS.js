$(function () {
    $("#gotop").click(function (event) {
        $("html,body").animate({ scrollTop: 0 }, 800)
        event.preventDefault()
    })
})