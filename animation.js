const titre = document.querySelector(".AnimationImg"); // pour stocker l'animation


function hautBas(){

    requestAnimationFrame(hautBas);
}

// J'appelle une animation. On appelle en Call Back la fonction hautBas.
requestAnimationFrame(hautBas);
// Dans la console, on obtient un 0. L'animation a été lancée une fois. 
//Si je rappelle i, on obtiendra le 1 parce que c'est i++.

// En rajoutant un deuxième  requestAnimationFrame(hautBas); dans la fonction.
// Je lance requestAnimationFrame extérieur à la fonction. J'appelle le hautBas qui effectue ce qu'on trouve dans la fonction. 
// Et quand il arrive à la fin, il se rappelle lui-même avec requestAnimationFrame.
