var hangman;

function Hangman() {
  this.words=["riri","fifi","mimi"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)]
};

Hangman.prototype.checkIfLetter = function (key) {
  if (key>64 && key<91){
    return true;
  } else {return false;}
};

Hangman.prototype.checkClickedLetters = function (letter) {
  return !this.letters.includes(letter);
}

Hangman.prototype.addCorrectLetter = function (i) {
this.guessedLetter += this.secretWord[i].toUpperCase();
 };

Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft--;

};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft==0){
    return true
  }
  else {
    return false
  }
};

Hangman.prototype.checkWinner = function () {
  var test=true;
  var i=0;
  while(test && i< this.secretWord.length)
  {
    if (!this.guessedLetter.includes(this.secretWord[i])){
      test=false;
    }
    else i++
  }
  return test 
  
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};

var key="";
var letter = "";
document.onkeydown = function (e) {
  console.log(e.key);
  key = e.keyCode;
  letter = e.key;
};
