const titre = document.querySelector(".AnimationImg"); // pour stocker l'animation
let i = 0;

function hautBas(){
    console.log(i);
    i++;
}

// J'appelle une animation. On appelle en Call Back la fonction hautBas.
requestAnimationFrame(hautBas);
// Dans la console, on obtient un 0. L'animation a été lancée une fois. 
//Si je rappelle i, on obtiendra le 1 parce que c'est i++.
