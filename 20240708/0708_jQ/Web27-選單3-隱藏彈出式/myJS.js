$(function () {

    $("header h3").on("click", aaa)

    function aaa() {

        $("nav").removeClass("CLOSE").addClass("OPEN")
    }

    //叉叉按鈕
    $("nav h3").click(function () {

        $("nav").removeClass("OPEN").addClass("CLOSE")
    })

})
// 可以試著配合固定式浮動，讓選單可以不受捲動軸影響: position:sticky;