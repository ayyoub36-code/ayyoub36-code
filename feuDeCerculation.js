window.onload = function fadeOutEffect() {
    changeColor;
}
let feuRouge = document.getElementById("rouge");
let feuVert = document.getElementById("vert");
let feuOrange = document.getElementById("orange");

let changeColor = setInterval(function () {

    feuVert.style.backgroundColor = 'green';
    feuRouge.style.backgroundColor = 'white';

    setTimeout(function () {

        feuVert.style.backgroundColor = 'white';
        feuOrange.style.backgroundColor = 'orange';

    }, 3000)

    setTimeout(function () {

        feuVert.style.backgroundColor = 'white';
        feuOrange.style.backgroundColor = 'white'
        feuRouge.style.backgroundColor = 'red';

    }, 5000)

}, 8000);
