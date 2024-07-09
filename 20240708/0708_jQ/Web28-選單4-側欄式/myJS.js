// $(function(){
	
//     $("header h3").on("touchend click", show);

//     function show(e) {
        
//         $("nav").animate({ left: "0" }, 300);
//         $("section").on("touchend click", hide);
//         e.preventDefault();
//     }
	
//     function hide(e) {
        
//         $("nav").animate({ left: "-180" }, 300);
//         $("section").on("touchend click");
//         e.preventDefault();
//     }
// })

$(function () {

    $("header h3").on("click", aaa);

    function aaa(e) {
        $("nav").animate({ left: "0" }, 300);
        $("section").one("click", hide); // 使用one()只绑定一次click事件
        e.preventDefault();
    }

    function hide(e) {
        $("nav").animate({ left: "-180" }, 300);
        $("section").off("click", hide); // 解除click事件的绑定
        e.preventDefault();
    }

})
