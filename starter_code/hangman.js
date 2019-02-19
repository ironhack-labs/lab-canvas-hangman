var hangman;

 function Hangman() {
this.words = ["JavaScript", "kata", "Ironhack", "iteration", "Madrid", "Miami", "Barcelona", "Berlin", "Sao Paolo", "Mexico DF", "Paris"];
this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
//this.secretWord = secretWord;

/*$("input").keyup(function(e){
  var letters = $("input").val()
  //console.log(inputValue)
  //var sayHi = "Hello " + inputValue;
  //$("h1").html(sayHi)
}) */

this.letters = [];
//this.guessedLetter = letters.toString();
this.guessedLetter = '';
//this.error = error;
//this.total = 10;
this.errorsLeft = 10;
 }

/*for (this.errorsLeft = 10; errorsLeft > 0; errorsLeft--) {
  console.log(errorsLeft);
}*/

 Hangman.prototype.getWord = function () {
 //this.words[Math.floor(Math.random() * this.words.length)];

 //this.secretWord = this.secretWord;
 //return this.secretWord;

 secretWord = this.secretWord;

 return secretWord;

};







Hangman.prototype.checkIfLetter = function (keyCode) {

 var keyCode = prompt("Please Type a letter");

 /* $("prompt").keyup(function(e){
    keyCode = $("prompt").val()
    console.log(keyCode) */

    if (keyCode >= 65 && keyCode <= 90){
 //    if (keyCode = /[a-z]\D/) {
      true;
    } else {
     // alert("Please type a letter");
     false;
    }

 };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
