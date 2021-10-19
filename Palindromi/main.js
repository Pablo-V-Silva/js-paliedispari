/* Inserisci una parola e invertila, se sono uguali è palindroma */

/* richiesta della parola da analizzare e dichiarazione del container dove verrà stampata la risposta */
let word = prompt('Inserisci una parola e scopri subito se è palindroma!').toLowerCase();
const stamp = document.getElementById('stamp')

/* funzione per scomporre, invertire ed unire i valori della parola scritta nel prompt */
function invert() {
  return invertWord = word.split('').reverse().join('');
}

/* invocazione della variabile per dichiarare la parola al contrario */
invert(word);

/* condizione di uguaglianza per scoprire se effettivamente la parola è palindroma */
if (word == invert(word)) {
  stamp.innerHTML = '<h1>HAI TROVATO LA PAROLA PALINDROMA</h1>'
} else {
  stamp.innerHTML = '<h1>NON E\' UNA PAROLA PALINDROMA</h1>'
}