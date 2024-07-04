var pic = document.getElementById("pic")
var count = 0

pic.onmouseover = aaa;
pic.onmouseout = bbb;
pic.onmousedown = ccc;
pic.onmouseup = ddd;

function aaa() {
    this.src = "./img/p2.png"
}
function bbb() {
    this.src = "./img/p1.png"
}
function ccc() {
    count += 1
    this.src = "./img/p3.png"
    document.getElementById("tt").innerHTML = count
}
function ddd() {
    this.src = "./img/p2.png"
}