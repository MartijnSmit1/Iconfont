var grootte = document.querySelector('#grootte');
var icons = document.querySelectorAll('.icns');
console.log(icons);

grootte.style.width = '50%';

bepaalGrootte = function(e) {
    console.log(grootte.value);
    pasAan(grootte.value);
}
pasAan = function(fsize) {
    for(var i=0; i<icons.length; i++) {
        icons[i].style.fontSize = fsize + 'em';
    }
}

grootte.addEventListener('change', bepaalGrootte);