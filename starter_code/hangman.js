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






/*
Hangman.prototype.checkIfLetter = function (keyCode) {

 var keyCode = prompt("Please Type a letter");


    if (keyCode >= 65 && keyCode <= 90){
      true;
    } else {
     // alert("Please type a letter");
     false;
    }
*/
    //-----------------

    Hangman.prototype.checkIfLetter = function (keyCode) {

      //This function should check if the key the user has typed is a letter.

      /*var key = prompt("Please type a letter");

      key = codigo; */

     // keyCode = keyCode.which || keyCode.keyCode;
  
     // console.log("Presionada: " + codigo);
  
      if(keyCode >= 65 && keyCode <= 90){
    //   return String.fromCharCode(keyCode);
      return true;
      } else {
        return false;
      }
    
  };

 Hangman.prototype.checkClickedLetters = function (key) {

  //Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
 
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }

 };
 
Hangman.prototype.addCorrectLetter = function (i) {

// Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.

this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
this.checkWinner();

};

 Hangman.prototype.addWrongLetter = function (letter) {
 // Should subtract one from the variable errorsLeft and check if the game is over.
 this.errorsLeft--;
// this.errorsLeft == this.errorsLeft.toUpperCase;
 this.checkGameOver();
 };

Hangman.prototype.checkGameOver = function () {
  //Returns a boolean value, true if the users lose, and false in any other case.
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }

};

Hangman.prototype.checkWinner = function () {
  //Check if the users win and return a boolean value.
  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } else {
    return false;
  }

 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
