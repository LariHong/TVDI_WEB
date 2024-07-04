var pic = document.getElementById("pic");
for (var i = 1; i <= 6; i++) {
    document.getElementById("s" + i).onclick = changepic;
}


function changepic() {
    for (var i = 1; i <= 6; i++) {
        if (this.id == "s" + i) {
            pic.src = "./img/00" + i + ".jpg";
        }
    }
};