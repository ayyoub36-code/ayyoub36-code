window.onload = function fadeOutEffect() {
    setInterval;
}



document.getElementById("btnFade").addEventListener('click', function () {

    let fade = document.getElementById("fade");

    let fadeEffect = setInterval(function () {
        if (fade.style.opacity == 0) {
            fade.style.opacity = 0.1;
        } else if (fade.style.opacity == 0.1) {
            fade.style.opacity = 0.2;
        } else if (fade.style.opacity == 0.2) {
            fade.style.opacity = 0.4;
        } else if (fade.style.opacity == 0.4) {
            fade.style.opacity = 0.6;
        } else if (fade.style.opacity == 0.6) {
            fade.style.opacity = 0.8;
        } else if (fade.style.opacity == 0.8) {
            fade.style.opacity = 1;
        } else {
            clearInterval(fadeEffect);
        }

    }, 200);
});

 document.getElementById("btnFade").addEventListener('click', function () {
     let fade = document.getElementById("fade");

     let fadeOut = setInterval(function () {
         if (fade.style.opacity == 1) {
             fade.style.opacity = 0.8;
         } else if (fade.style.opacity == 0.8) {
             fade.style.opacity = 0.6;
         } else if (fade.style.opacity == 0.6) {
             fade.style.opacity = 0.4;
         } else if (fade.style.opacity == 0.4) {
             fade.style.opacity = 0.2;
         } else if (fade.style.opacity == 0.2) {
             fade.style.opacity = 0;
         }else {
             clearInterval(fadeOut)
         }
     }, 200);
 });




