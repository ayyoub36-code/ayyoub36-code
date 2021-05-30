// function pour le start button 
let start = document.getElementById("start");
let microWave;

start.addEventListener('click', function () {

    let nourriture = document.getElementById("nourriture").value;
    let timer = document.getElementById("timer").value;
    let puissance = document.getElementById("puissance").value;

    microWave = new MicroWave(nourriture, timer, puissance);
    if (microWave.verif() == true) {
      //  microWave.start();
        microWave.startTimer();
    }

});


// fonction pour le stop button 
let stopp = document.getElementById("stop");
stopp.addEventListener('click', function () {

    microWave.stopped();
});
// creer la class microwave

class MicroWave {

    nourriture = "";
    timer = 0;
    puissance = 0;
    affichage;
    intervalTimer;

    constructor(nourriture, timer, puissance) {
        this.nourriture = nourriture;
        this.timer = parseInt(timer);
        this.puissance = parseInt(puissance);
        this.affichage = document.getElementById("affichage");
    }

    // methode verification

    verif() {

        if (this.nourriture == "") {
            this.display(`il faudra penser a mettre de la nourriture dans le micro_ondes !`, 'red');

        } else if (this.timer == 0) {
            this.affichage.innerHTML = `il faudra initialiser la durée de rechauffe ! `
            this.affichage.style.color = 'red';
        } else if (this.puissance == 0) {
            this.affichage.innerHTML = `il faudra aussi choisir la puissance de rechauffe Merci !`
            this.affichage.style.color = 'red';
        } else {
            return true;
        }
        return false;
    }

    // methode display
    display(text, color) {
        this.affichage.innerHTML = text
        this.affichage.style.color = color;

    }

    // methode chauffe le countdown
    startTimer() {
        this.intervalTimer = setInterval(() => {
            let step = 1;
            let timeBet = 0;
            console.log('interval');
            if (this.timer > 0) {
                timeBet = this.timer;
                this.timer -= step;
                document.getElementById("timer").value = this.timer;
                console.log(timeBet);
            } else {
                clearInterval(this.intervalTimer);
                this.display(` votre plat est chaud bonne app' !`, 'green');
            }
        }, 1000);
    }

    // methode stop
    stopped() {
        if ((this.timer) !== 0) {
            console.log('dans la function');
            document.getElementById("timer").value = this.timer;
            clearInterval(this.intervalTimer);
        }
    }
}