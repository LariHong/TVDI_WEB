$(function () {
    //Jq作法
    $("#BBB").click(function(){
        $("#CON_BOX").css({"font-size":"30px","color":"red"})
    })
    $("#MMM").click(function () {
        $("#CON_BOX").css({ "font-size": "16px" })
    })
    //color 設定空  則會把style內的color 內清掉
    $("#SSS").click(function () {
        $("#CON_BOX").css({ "font-size": "9px", "color": "" })
    })

    //JS作法
    // document.getElementById("BBB").onclick = function () {
    //     document.getElementById("CON_BOX").style.fontSize = "30px"
    //     document.getElementById("CON_BOX").style.color="red"
    // }
    // document.getElementById("MMM").onclick = function () {
    //     document.getElementById("CON_BOX").style.fontSize = "16px"
    // }
    // document.getElementById("SSS").onclick = function () {
    //     document.getElementById("CON_BOX").style.fontSize = "9px"
    //     document.getElementById("CON_BOX").style.color = ""
    // }
})

/*

 */