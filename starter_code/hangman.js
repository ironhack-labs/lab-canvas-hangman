var hangman;

class Hangman {
constructor(){


    this.words=["Mango","Sandia","Aasdad"],
    this.letters=[],
    this.secretWord="Limon",
    this.guessedLetter="",
    this. errorsLeft=10
  }
  }
 
Hangman.prototype.getWord = function () {
 return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase() 
};

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if((keyCode>=65&&keyCode<=90)||(keyCode>=97&&keyCode<=122))return true
    return false
 };

Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)) return false
  this.letters.push(key)
  return true
 };
////////////////////// 
Hangman.prototype.addCorrectLetter = function (i) {
 // this.guessedLetter += this.secretWord[i].toUpperCase()
 let ltUp = i.toUpperCase()
  this.guessedLetter=this.guessedLetter + this.secretWord.push(i).toUpperCase()
 // this.guessedLetter.push(i)
  // if(this.guessedLetter.includes(i)) return true

  return false
  
 };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

 Hangman.prototype.checkGameOver = function () {

 };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
