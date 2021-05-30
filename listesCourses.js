window.onload = function init() {

}
// fonction qui cree une liste li qui contient les element selectionneés 

document.getElementById("choisF").addEventListener("click", getValueFruit);
document.getElementById("choisL").addEventListener("click", getValueLegumes);

function createListe(fruit) {
    let li = document.createElement('li');
    li.innerHTML = fruit;
    document.getElementById("courses").appendChild(li);
}

// fonction qui prends la valeur du choix est l ajoute dans li 

function getValueFruit() {
    let selectedFruit = document.getElementById("fruit-select").value;
    if (selectedFruit !== "1") {
        createListe(selectedFruit);
    }

}
// fonction pour les legumes 

function getValueLegumes() {
    let selectedLegumes = document.getElementById("legumes-select").value;
    if (selectedLegumes !== "1") {
        createListe(selectedLegumes);
    }
}