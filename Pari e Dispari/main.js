/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

- scegli pari o dispari
- inserisci un numero
- function (random number)
- function (somma dei numeri)
- vince chi ha azzeccato se il risultato è pari o dispari*/

/* Richiesta di pari e dispari per il risultato finale e richiesta di un numero da 1 a 5 */
const evenOrOdd = prompt('Scegli pari o dispari!').toLowerCase();
const numberChoice = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));
const stamp = document.getElementById('stamp')
let loser = false

function randomNumberCPU() {
  return randomNumber = Math.ceil((Math.random() * 5));
}

const sumNumber = numberChoice + randomNumberCPU()
console.log(numberChoice);
console.log(randomNumber);
console.log(sumNumber);

function finalNumberIsOddOrEven(numero) {
  if (numero % 2 == 0) {
    return "pari"
  } else {
    return "dispari"
  }
}

console.log(finalNumberIsOddOrEven(sumNumber));

if (evenOrOdd == finalNumberIsOddOrEven(sumNumber)) {
  stamp.innerHTML = `<h1>IL GIOCATORE HA VINTO</h1>`
} else {
  stamp.innerHTML = `<h1>IL GIOCATORE HA PERSO</h1>`
}