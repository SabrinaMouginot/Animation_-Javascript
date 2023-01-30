const Image = document.querySelector(".AnimationImg"); // pour stocker l'animation
Image.style.position = "absolute";      // Pour pouvoir la positionner exactement où on veut
let topPosition = 100;
let direction = -1;
// pour animer , j'ai créé une variable let direction avec une condition.

function hautBas(){
    if(topPosition == 170){     
        direction = 1              // l'image descend (direction positive + variable définit bégative = négatif donc direction vers le bas)
    }
    else if(topPosition == 110){
        direction = -1              // l'image monte (direction négative + variable définit négative = positif donc direction vers le haut)
    }
    topPosition += -2 * direction;
    Image.style.top = `${topPosition}px`; // ajouter par exemple 2 à sa position de top pour pouvoir descendre.

    requestAnimationFrame(hautBas);
}

// J'appelle une animation. On appelle en Call Back la fonction hautBas.
requestAnimationFrame(hautBas);
// Dans la console, on obtient un 0. L'animation a été lancée une fois. 
//Si je rappelle i, on obtiendra le 1 parce que c'est i++.

// En rajoutant un deuxième  requestAnimationFrame(hautBas); dans la fonction.
// Je lance requestAnimationFrame extérieur à la fonction. J'appelle le hautBas qui effectue ce qu'on trouve dans la fonction. 
// Et quand il arrive à la fin, il se rappelle lui-même avec requestAnimationFrame.
