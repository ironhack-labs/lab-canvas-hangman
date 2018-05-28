var hangman;

hangman = new Hangman();

function Hangman() {
  this.words = ["flowers", "unicorns", "cupcakes","gummybears"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
 this.secretWord= this.words[Math.floor(Math.random()*this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
if((keyCode >= 97 && keyCode <= 122) || keyCode >= 65 && keyCode <= 90){
  return true;
} else {return false;}

};

Hangman.prototype.checkClickedLetters = function (key) {
//return this.letters.indexOf(key) >-1 ? false: true;
 if (this.letters.indexOf(key) !== -1){

   return false;
 } else {
   
   return true;
  }

};

Hangman.prototype.addCorrectLetter = function (i) {
  return this.guessedLetter += this.secretWord[i].toUpperCase(); 

  
};

Hangman.prototype.addWrongLetter = function (letter) {
  
return this.errorsLeft --;

};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0){
    return true;
  } else {return false;}
};

Hangman.prototype.checkWinner = function () {
if(this.guessedLetter.length === this.secretWord.length){
  return true;
}else{return false; }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
