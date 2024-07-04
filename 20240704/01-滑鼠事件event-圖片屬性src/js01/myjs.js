var tt = document.getElementById("text")
var pp = document.getElementById("pic")

document.getElementById("btn1").onclick = btn1fuc;
document.getElementById("btn2").onclick = btn2fuc;

function btn1fuc() {
    tt.innerHTML = "芥末綠";
    pp.src = "girl01.jpg";
}

function btn2fuc() {
    tt.innerHTML = "珊瑚粉";
    pp.src = "girl02.jpg";
}