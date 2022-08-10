
// >>>>>> Sección #1 : Creando cards!!!
/**
Crear la misma estructura varias veces en HTML es un desperdicio de código.
El siguiente bloque se encarga de crear 10 cards...con solo 6 lineas de código 😲!
*/

let cards_container = document.querySelector('.cards-container'); // Se apunta al contenedor de las cards
let cantidad_cards = 10;    // Innecesario, pero buena práctica. Se crea una variable con la cant de cards.

for (let i = 0; i < cantidad_cards; i++) {      // Se crea un bucle para repetir 10 veces la creacion de la card
    let card = document.createElement('div');   // 1) se crea
    card.setAttribute('class','card');          // 2) se le agrega una clase 'card'
    cards_container.appendChild(card);}         // 3) se la "mete" dentro del contenedor


// >>>>>> Sección #2 : Aleatoriedad
//                                             >> Número aleatorio entre 0 y la cantidad de frases -1
let numero = frases.length
Math.floor(Math.random()*numero)
// .............................................................

// >>>>>> Sección #3 : Seleccionando aleatoriamente las 10 frases de la lista
for(let i=0;i<10;i++)
{
    let cant_frases = frases.length
    let num = Math.floor(Math.random()*cant_frases);
    let quote  = `<h2>"${frases[num].Frase}"</h2>`;
    let author = `<h3>by <b>${frases[num].Autor}</b><a href="${frases[num].Wiki}" target="_blank">(about)</a></h3>`;

    let tags = ``;

    for (let j = 0; j < frases[num].Tags.length; j++) 
    {
        tags += `<a href="" class="tag">${frases[num].Tags[j]}</a>`
    }

    let full_tags = `<p>Tags: ${tags}</p>`

    let rate = `<p>Rate: ${frases[num].Rate}</p>`;
    document.querySelectorAll('.card')[i].innerHTML = quote+author+full_tags+rate;
 
    
// >>>>>> Sección #4: Debugging. Mostrando en consola las frases
    console.log(`num: ${num}`)
    console.log(`frase: ${frases[num].Frase}`)
    console.log(`cantidad: ${cant_frases}`)
    console.log("---------------------------------------------------------------------------")


// >>>>>> Sección #5 : Quitando frase de la lista original, para que la aleatoriedad
//                     no termine eligiendo la misma frase.
    if (num < cant_frases-1)
    {
        frases.splice(num,1);
    }
    else
    {
        frases.pop();
    }
     
}