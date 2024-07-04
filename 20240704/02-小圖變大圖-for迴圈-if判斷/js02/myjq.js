var pic = $("#pic");
for (var i = 1; i <= 6; i++) {
    $("#s" + i).click(changepic);
}

function changepic() {
    for (var i = 1; i <= 6; i++) {
        if (this.id == "s"+i) {
            pic.attr("src", "./img/00"+i+".jpg");
        }
    }
};