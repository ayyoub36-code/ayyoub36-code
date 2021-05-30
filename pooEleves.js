window.onload = function () {



    let button = document.getElementById("creeEleve");
    button.addEventListener('click', function () {

        // creer un eleve
        let prenom = document.getElementById("nom").value;

        let note1 = document.getElementById("note1").value;

        let note2 = document.getElementById("note2").value;

        let note3 = document.getElementById("note3").value;

        let note4 = document.getElementById("note4").value;

        eleve = new eleves(prenom, note1, note2, note3, note4);
        eleve.calculMoyene();
        eleve.affiche();
    });


    class eleves {
        nom = ""
        notes = []

        constructor(nom = "", note1 = "", note2 = "", note3 = "", note4 = "") {
            this.nom = nom
            this.notes = [note1, note2, note3, note4]
            //console.log(notes)
        }
        calculMoyene() {
            let sum = 0;
            let moyenne = 0;
            for (this.note of this.notes) {
                sum = sum + parseInt(this.note);
                console.log(sum)

            }
            moyenne = sum / 4;
            return moyenne;

        }
        affiche() {
            let divContainer = document.getElementById("eleves");
            let prenoMPlace = document.createElement('p');
            prenoMPlace.innerHTML = eleve.nom;
            prenoMPlace.style.fontSize = '25px';
            prenoMPlace.style.fontFamily = 'cursive';
            divContainer.appendChild(prenoMPlace);

            let ulContainer = document.createElement('ul');
            divContainer.appendChild(ulContainer);


            let note1Place = document.createElement('li');
            note1Place.innerHTML = eleve.notes[0]
            ulContainer.appendChild(note1Place);

            let note2Place = document.createElement('li');
            note2Place.innerHTML = eleve.notes[1]
            ulContainer.appendChild(note2Place);

            let note3Place = document.createElement('li');
            note3Place.innerHTML = eleve.notes[2]
            ulContainer.appendChild(note3Place);

            let note4Place = document.createElement('li');
            note4Place.innerHTML = eleve.notes[3]
            ulContainer.appendChild(note4Place);

            let laMoyenne = document.createElement('p');
            laMoyenne.innerHTML = `Moyenne : ${eleve.calculMoyene()}/20`;
            laMoyenne.style.fontSize = '20px';
            laMoyenne.style.fontFamily = 'cursive';

            divContainer.appendChild(laMoyenne);
            let separate = document.createElement('hr')
            divContainer.appendChild(separate);

            let div = document.getElementById("eleves")
            div.style.display = "block";
        }
    };
}