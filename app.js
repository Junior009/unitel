
var _carater = document.getElementById('carater');
var menu = document.getElementById('barra_menu');
var img_btn = document.getElementById('img_btn');
function abrir(){
if(menu.style.width == "0px") {
   abre();
}else{
    menu.style.width = "0px";
    esconder();
}
}

function esconder(){
    if(menu.style.width = "0px"){
        _carater.style.opacity = "0";
    }

}

function abre(){
    menu.style.width = "280px";
    _carater.style.opacity = "1";
    menu.style.color = "white";
    menu.style.background = "rgb(26, 24, 24)";
    menu.style.height = "100vh";
}