var hangman;

 function Hangman() {
this.words = ["uno","dos","tres"];
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
var n = this.letters.includes(key)
return !n
 };

Hangman.prototype.addCorrectLetter = function (i) {
let letra = this.secretWord.charAt(i)
this.guessedLetter += letra.toUpperCase()
 };

 Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft = this.errorsLeft -1
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

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};




