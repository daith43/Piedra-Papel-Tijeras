const container = document.querySelector('.container');

let derecha = document.querySelector('.derecha');
let izquierda = document.querySelector('.izquierda');

let marcIA = document.querySelector('.ia');
let marcPlayer = document.querySelector('.player');

let contIA = 0;
let contPlayer = 0;

const reset = document.querySelector('#reset');
const piedra = document.querySelector('.piedra');
const papel = document.querySelector('.papel');
const tijeras = document.querySelector('.tijeras');


reset.addEventListener('click', ()=>{
    contIA = 0;
    contPlayer = 0;
    marcIA.textContent = '0';
    marcPlayer.textContent = '0';
});

/* REGLAS */
/* Piedra = 1, Papel = 2, Tijeras = 3 

1 > 3, 1 = 1, 1 < 2.
2 > 1, 2 = 2, 2 < 3.
3 > 2, 3 = 3, 3 < 1.
*/

const opciones = ['icons/piedra.png', 'icons/mano.png', 'icons/tijera.png'];


function jugar(opcion) {
    piedra.style.display = 'none';
    papel.style.display = 'none';
    tijeras.style.display = 'none';

    let random = Math.floor(Math.random() * 3);
    let player = opciones[random];

    izquierda.children[0].src = `${player}`;
    console.log()

    derecha.children[0].src = `${opcion}`;
    console.log()    

    if (
        (opcion === opciones[0] && random === 2) || 
        (opcion === opciones[1] && random === 0) || 
        (opcion === opciones[2] && random === 1)
    ) {
        contPlayer++;
    } else if (
        (opcion === opciones[0] && random === 1) || 
        (opcion === opciones[1] && random === 2) || 
        (opcion === opciones[2] && random === 0)
    ) {
        contIA++;
    }

    marcPlayer.textContent = `${contPlayer}`;
    marcIA.textContent = `${contIA}`;
    reset.style.display = 'none';

    setTimeout(() => {
        izquierda.children[0].src = 'icons/tijera.png';
        derecha.children[0].src = 'icons/tijera.png';

        reset.style.display = 'flex';
        piedra.style.display = 'flex';
        papel.style.display = 'flex';
        tijeras.style.display = 'flex';
        
    }, 2000);
}

piedra.addEventListener('click', () => jugar('icons/piedra.png'));
papel.addEventListener('click', () => jugar('icons/mano.png'));
tijeras.addEventListener('click', () => jugar('icons/tijera.png'));