window.onload = function init() {

}
// generation aleatoire de chiffre 
function LancerDes(min, max) {
    let lancer = Math.ceil(Math.random() * (max - min) + min);
    return lancer;
}

document.getElementById("hasard").addEventListener("click", affiche);

//affichage des Dés dans les input

function affiche() {
    let valeurLancer1 = LancerDes(0, 6);
    //document.getElementById("firstInput").value = valeurLancer1;
    
    let Des = document.getElementById("firstInput");
    Des.src = `des${valeurLancer1}.jpg`;
    let valeurLancer2 = LancerDes(0, 6);
    let Des2 = document.getElementById("secondInput");
    Des2.src = `des${valeurLancer2}.jpg`;

    // conditions de victoire ou défaite 
    let victoire = document.getElementById("victoire");

    if (valeurLancer1 == valeurLancer2) {
        victoire.innerHTML = 'Victoire';
        victoire.style.color = 'green';
        victoire.style.visibility = 'visible';

    } else {
        victoire.innerHTML = 'Défaite !'
        victoire.style.color = 'red';
        victoire.style.visibility = 'visible';
    }
}
// lancer img de DES qui correspont a la valeur obtenue !






