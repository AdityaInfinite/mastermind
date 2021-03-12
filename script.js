document.onclick = hideMenu;
$('.attemtCircle').contextmenu(rightClick);

var target;

$('.menuItem').click(function () {
    // console.log(target);
    console.log(this.style.backgroundColor);
    $(target).css("background-color", `${this.style.backgroundColor}`)
})
// document.getElementsByClassName('menuItem').onclick = console.log('hlo');

function hideMenu() {
    document.getElementById(
        "contextMenu").style.display = "none"
}

function rightClick(e) {
    // console.log(e);
    e.preventDefault();
    target = e.target;
    // $(e.target).css("background-color","black")
    if (document.getElementById(
        "contextMenu").style.display == "block")
        hideMenu();
    else {
        var menu = document
            .getElementById("contextMenu")

        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}