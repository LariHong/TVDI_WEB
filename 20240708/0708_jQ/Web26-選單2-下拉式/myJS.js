// 手機板_下拉式選單
$(function () {

    $("header h3").on("click", aaa);

    function aaa(e) {

        $("header nav").toggle();
        $("section").on("click", hide)
        e.preventDefault();
    }
    function hide() {
        $("header nav").hide()
        $("section").off("click")
    }
    

})
// 未完成
// $(function () {
	
//     $(".header h3").on("touch click", show);

//     function show(event) {
        
//         $("header nav").slideToogle(300);
//         $("section").on("touch ")
//     }
	
	
	
	
	
	
	
	
// })

