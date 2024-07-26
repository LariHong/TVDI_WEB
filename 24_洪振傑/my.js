$(function () {

    $(".header h3").click(function () {

        $(".header .ul-1").toggle(".header .ul-1")

    })

})   



$(function () {
    
    var N = 1;
    setInterval(aaa, 2000)

    function aaa() {
        if (N < 4) { N = N + 1 } else { N = 1 };
        $("#foods").attr("src", "圖片素材/banner0" + N + ".jpg")
    }

})

