// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).


var sceltaUtente = prompt('Pari o Dispari?');

while (sceltaUtente.length == 0 || sceltaUtente != 'Dispari' && sceltaUtente != 'Pari') {
    var sceltaUtente = prompt('Devi scrivere Pari o Dispari.');
}

var numeroUtente = parseInt(prompt('Tira un numero da 1 a 5.'));
while (isNaN(numeroUtente)) {
    var numeroUtente = parseInt(prompt('Devi inserire un numero da 1 a 5.'));
}

var numeroRandom = Math.floor(Math.random() * 5 + 1);
var somma = numeroUtente + numeroRandom;

if (somma % 2 == 0) {
  var pari = true;
} else {
  var pari = false;
}

if (sceltaUtente == 'Pari' && pari == true) {
  var messaggio = 'Complimenti, hai vinto!'
} else if (sceltaUtente == 'Dispari' && pari == false) {
  var messaggio = 'Complimenti, hai vinto!'
} else {
  var messaggio = 'Sorry, hai perso.'
}

alert('Hai tirato ' + numeroUtente + ' - Il computer ha tirato ' + numeroRandom + ' - ' + messaggio);
