var hangman;

function Hangman() {
  this.words=["PERRO","GATO","ZAPATO","ZARIGUELLA"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random())*this.words.length];
};

Hangman.prototype.checkIfLetter = function (keyCode) {

if (keyCode>64 && keyCode<91){
  return true;
} else{
  return false;
}
 };

Hangman.prototype.checkClickedLetters = function (key) {
   if(this.letters.includes(key)){
      return false;
    }else{
      return true;
    }
};


//Adds to the guessedLetter variable the letter that was pressed. 
//Also, it should check if the user wins.

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
};

//Should subtract one from the variable errorsLeft and check if the game is over.
Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver();
};
//Returns a boolean value, true if the users lose, and false in any other case.
Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft==0){
    return true;
  }else{
    return false;
  }
};
//Check if the users win and return a boolean value
Hangman.prototype.checkWinner = function () {
  if(this.secretWord.length==this.guessedLetter.length){
    return true;
  }else{
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
