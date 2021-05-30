// button cree nouveau objet 
creeListTodo = document.getElementById("creeListe");

creeListTodo.addEventListener('click', function () {
    let todoListe;
    let separate = document.createElement('hr');
    document.body.appendChild(separate);
    let container = document.createElement('div');
    document.body.appendChild(container);
    // le titre todo

    let title = document.getElementById("titreTodo").value;
    let titre = document.createElement('h2');
    titre.innerHTML = `Liste à ${title}`;
    titre.style.fontFamily = 'cursive';
    titre.style.fontSize = '30px';
    container.appendChild(titre);

    // input qui contient les labels taches 

    let champSaisie = document.createElement('input');
    champSaisie.type = 'text';
    container.appendChild(champSaisie);

    // button qui ajoute des taches 
    let ajouTache = document.createElement('button');
    ajouTache.type = 'button';
    ajouTache.innerHTML = 'Ajouter une tâche';

    container.appendChild(ajouTache);

    // button sauvegarder 
    let sauvegarder = document.createElement('button');
    sauvegarder.type = 'button';
    sauvegarder.innerHTML = 'sauvegarder';
    container.appendChild(sauvegarder);
    todoListe = new TodoListe(titre, champSaisie, ajouTache, sauvegarder);
    ajouTache.addEventListener('click', function () {

        todoListe.ajouTaches();
    })

});


// creer un objet Todoliste 
class TodoListe {

    titre = "";
    champSaisie;
    sauvegarder;
    ajouTache;

    constructor(titre, champSaisie, ajouTache, sauvegarder) {
        this.titre = titre;
        this.champSaisie = champSaisie
        this.sauvegarder = sauvegarder
        this.ajouTache = ajouTache
    }

    // creer les methodes 
    // function sauvegarder local storage BOM
    sauvegarder() {

    }

    // boutton ajouTaches cree une liste avec btn sup et btn modif et un label titre tache 
    ajouTaches() {
        // creer une liste ordonnée 
        let divTache = document.createElement('div');
        document.body.appendChild(divTache);
        let listeTaches = document.createElement('ul');
        listeTaches.style.display = 'block';
        divTache.appendChild(listeTaches);

        //creer un li 
        let liTaches = document.createElement('li');
        liTaches.style.display = 'flex';
        listeTaches.appendChild(liTaches);

        // lable de la tache 
        let labelTâche = this.champSaisie.value;
        let label = document.createElement('p');
        label.innerHTML = labelTâche;
        label.style.fontFamily = 'cursive';
        label.style.fontSize = '25px';
        liTaches.appendChild(label);

        // button supprimer 
        let supprimer = document.createElement('button');
        supprimer.type = 'button';
        supprimer.innerHTML = 'supprimer';
        supprimer.addEventListener('click', function () {
            divTache.remove();
        })
        supprimer.style.color = 'red';
        supprimer.style.height = '25px'
        supprimer.style.border = '2px solid'
        supprimer.style.borderRadius = '10px 10px 10px 10px'
        liTaches.appendChild(supprimer);
        // button modifier 
        let modifier = document.createElement('button');
        modifier.type = 'button';
        modifier.innerHTML = 'modifier';
        modifier.addEventListener('click', function () {
            label.innerHTML = prompt("", label.innerHTML);
        })
        modifier.style.color = 'green';
        modifier.style.height = '25px'
        modifier.style.border = '2px solid'
        modifier.style.borderRadius = '10px 10px 10px 10px'
        liTaches.appendChild(modifier);

        let barrer =  document.createElement('button');
        barrer.type = 'button';
        barrer.innerHTML = 'Rayer';
        liTaches.appendChild(barrer);
        barrer.addEventListener('click', function(){
            label.style.textDecoration="line-through";
        })
        barrer.style.height = '25px'
        barrer.style.border = '2px solid'
        barrer.style.borderRadius = '10px 10px 10px 10px'
        barrer.style.color = 'purple';


    }
}