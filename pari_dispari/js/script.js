// Gioco Pari e dispari


// L’utente sceglie pari o dispari
var sceltaUtente = prompt('Pari o Dispari?');
while (sceltaUtente.length == 0 || sceltaUtente != 'Dispari' && sceltaUtente != 'Pari') {
    var sceltaUtente = prompt('Devi scrivere Pari o Dispari.');
}

// L’utente sceglie e un numero da 1 a 5.
var numeroUtente = parseInt(prompt('Tira un numero da 1 a 5.'));
while (isNaN(numeroUtente)) {
    var numeroUtente = parseInt(prompt('Devi inserire un numero da 1 a 5.'));
}
// Generiamo un numero random per il computer.
var numeroRandom = Math.floor(Math.random() * 5 + 1);

// Sommiamo i due numeri
var somma = numeroUtente + numeroRandom;

// controlliamo se la somma da pari o dispari
if (somma % 2 == 0) {
  var pari = true;
} else {
  var pari = false;
}

// e dichiariamo chi ha vinto
if (sceltaUtente == 'Pari' && pari == true) {
  var messaggio = 'Complimenti, hai vinto!'
} else if (sceltaUtente == 'Dispari' && pari == false) {
  var messaggio = 'Complimenti, hai vinto!'
} else {
  var messaggio = 'Sorry, hai perso.'
}

alert('Hai tirato ' + numeroUtente + ' - Il computer ha tirato ' + numeroRandom + ' - ' + messaggio);
