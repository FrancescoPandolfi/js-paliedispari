// Scrivi una funzione per capire se la parola è palindroma


var parola = prompt('Scrivi una parola per scoprire se è palindromo.');
while (parola.length <= 1) {
    var parola = prompt('Devi Scrivere una parola per scoprire se è palindromo.');
}

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
