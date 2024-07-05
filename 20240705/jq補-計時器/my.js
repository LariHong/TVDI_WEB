$(function () {
    var count = 2;
    setInterval(changeImg, 1000)
    
    function changeImg() {
        
        $("#car").fadeOut(400, function () {
            $(this).attr("src", "./img/0" + count + ".jpg");
            count += 1;
            if (count == 7) {
                count = 1;
            }
            $(this).fadeIn(400);
        });
    }
})