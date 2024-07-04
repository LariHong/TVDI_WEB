$(function () {
    $("#btn1").click(btn1fuc);
    $("#btn2").click(btn2fuc);

    function btn1fuc() {
        $("#text").html("芥末綠");
        $("#pic").attr("src","girl01.jpg");
    }

    function btn2fuc() {
        $("#text").html("珊瑚粉");
        $("#pic").attr("src", "girl02.jpg");
    }
});


// $(function () {
//     $("#btn1").click(function () {
//         $("#text").html("芥末綠");
//         $("#pic").attr("src", "girl01.jpg");
//     });
//     $("#btn2").click(function () {
//         $("#text").html("珊瑚粉");
//         $("#pic").attr("src", "girl02.jpg");
//     });
// });