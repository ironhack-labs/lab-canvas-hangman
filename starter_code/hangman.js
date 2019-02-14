// var hangman;

 function Hangman() {
this.words = ["CUBETAS","PERRO","ANIMAL"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
 };

 Hangman.prototype.getWord = function () {
 var nro = Math.floor(Math.random() * this.words.length);
 var palabra = this.words[nro];
 return palabra;
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
if (keyCode >= 65 && keyCode <= 90) {return true}
 return false
 };

 Hangman.prototype.checkClickedLetters = function (key) {
var n = this.letters.includes(key.toUpperCase())
return !n
 };

Hangman.prototype.addCorrectLetter = function (i) {
let letra = this.secretWord.charAt(i)
this.guessedLetter += letra.toUpperCase()
this.letters.push(letra.toUpperCase());
 };

 Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft = this.errorsLeft -1
// agregar esta linea al codigo
this.letters.push(letter.toUpperCase());
};

 Hangman.prototype.checkGameOver = function () {
if (this.errorsLeft == 0) return true
else return false
 };

 // Funciòn para distinguir las letras de una palabra*******************

 function separaLetras (str){
    var arreglo = str.toUpperCase().split('')
    var cadena = []
      arreglo = arreglo.sort()
  function distinctLetters(i) {
    if (i == 0 ) 
          {cadena.push(arreglo [i])}
    else if (i != 0 && arreglo [i] != arreglo [i-1]) 
          {cadena.push(arreglo [i])}}

  for (let i = 0; i< arreglo.length ; i++)
  {distinctLetters(i)}
 return cadena.join()
}
 // termina funcion****************************************************


 Hangman.prototype.checkWinner = function () {

if (separaLetras(this.guessedLetter) === separaLetras(this.secretWord))
return true 
else return false
 };

 function NumToLetter (n){
      if (n == 65) {return "A"}
      if (n == 66) {return "B"}
      if (n == 67) {return "C"}
      if (n == 68) {return "D"}
      if (n == 69) {return "E"}
      if (n == 70) {return "F"}
      if (n == 71) {return "G"}
      if (n == 72) {return "H"}
      if (n == 73) {return "I"}
      if (n == 74) {return "J"}
      if (n == 75) {return "K"}
      if (n == 76) {return "L"}
      if (n == 77) {return "M"}
      if (n == 78) {return "N"}
      if (n == 79) {return "O"}
      if (n == 80) {return "P"}
      if (n == 81) {return "Q"}
      if (n == 82) {return "R"}
      if (n == 83) {return "S"}
      if (n == 84) {return "T"}
      if (n == 85) {return "U"}
      if (n == 86) {return "V"}
      if (n == 87) {return "W"}
      if (n == 88) {return "X"}
      if (n == 89) {return "Y"}
      if (n == 90) {return "Z"}
}