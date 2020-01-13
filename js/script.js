// Scrivi una funzione per capire se la parola è palindroma


var parola = prompt('Scrivi una parola per scoprire se è palindromo.');

console.log(reverseString(parola));
alert(reverseString(parola));



  function reverseString(parolaDaInvertire) {
      var parolaInvertitaUnita = parolaDaInvertire.split("").reverse().join("");

      if (parola == parolaInvertitaUnita) {
        return 'La tua parola è un palindromo';
      } else {
      return 'La tua parola NON è un palindromo';
      }
  }









// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).
