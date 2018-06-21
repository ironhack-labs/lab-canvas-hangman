var hangman;

function Hangman() {
  this.words = ["hola", "hey", "Ironhack"];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 7;
  this.newCanvas = new HangmanCanvas(this.secretWord);


};

Hangman.prototype.getWord = function () {

  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
  return this.secretWord;
  console.log(this.se)
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode < 65 || keyCode > 122) {
    return false;

  } else {
    return true
  };
};

Hangman.prototype.checkClickedLetters = function (key) {

  if (this.letters.includes(key)) {
    return false
  } else {
    return true
  };

};

Hangman.prototype.addCorrectLetter = function (i) {

  return this.guessedLetter += this.secretWord.charAt(i).toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {

  return this.errorsLeft--;



};

Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft == 0) {

    return true;
  } else {
    return false;
  };

};

Hangman.prototype.checkWinner = function () {

  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } else {
    return false
  }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  document.getElementById('hangman').style.display = 'block';
    
}
document.onkeydown = function (e) {

  if(this.checkIfLetter(e)){
    
  if(this.secretWord.includes(e)){

    var index = this.secretWord.indexOf(e);
    this.addCorrectLetter(index);

  }else{

    this.addWrongLetter(e);
  }} else {
    window.alert("please put a letter");
  }


};