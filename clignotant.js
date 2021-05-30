document.addEventListener('DOMContentLoaded', function () {
    let clignotant = document.getElementById("clignotant");
    setInterval(function () {
        if(clignotant.style.visibility == 'visible') {
            clignotant.style.visibility ='hidden';
        }else {
            clignotant.style.visibility ='visible';
        }
    
    }, 500);

});