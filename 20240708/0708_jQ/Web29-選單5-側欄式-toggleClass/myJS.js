/*1. .rrr{}
  2. transition
  3. toggleClass
*/

// 點擊"選單圖案"可同時顯示與隱藏下拉式選單
$(function () {

    $("header h3").on("click",aaa);

    function aaa() {
        $("nav").toggleClass("rrr");
        
    }

});

