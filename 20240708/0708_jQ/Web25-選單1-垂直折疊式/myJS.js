$(function(){
    $(".box h3").on("touch click", show);

    function show(event) {
        
        $(this).siblings(".content").slideToggle(300);
        $(this).parent().siblings().find(".content").slideUp(300);
        event.preventDefault();

    }

});

//touch: 適用於觸控式設備
// event.preventDefault();用來防止因連結"<a>"而跳到其他操作