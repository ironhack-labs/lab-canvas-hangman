var hangman;

 function Hangman() {
    this.words = ['perro', 'gato', 'supercalifragilistico'];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {
    idx = Math.floor(Math.random() * this.words.length)
    return (this.words[idx])
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
    if(keyCode >= 48 || keyCode <= 57 ){
      return false
    }else {
      return true
    }
 };

 Hangman.prototype.checkClickedLetters = function (key) {
    this.letters.push(key)
    for (var i = 0; i <this.letters.length; i++){
      if(this.letters[i] != key){
        return true
      }else {
        return false
      }
    }
    
 };

 Hangman.prototype.addCorrectLetter = function (i) {
    for (var j = 0; j<this.secretWord.length; j++){
      if(i = this.secretWord.length[j]){
        this.guessedLetter.push(i)
      }
    }
 };

 Hangman.prototype.addWrongLetter = function (letter) {
    for(var i = 0; i < this.secretWord.length; i++){
      if(letter != this.secretWord[i]){
        this.errorsLeft--;
      }
    }
 };

 Hangman.prototype.checkGameOver = function () {
      if(this.errorsLeft == 0) {
        return true
      }else {
        return  false
      }
 };

 Hangman.prototype.checkWinner = function () {
    if(this.secretWord.length == this.guessedLetter.length){
      return true
    }else {
      return false
    }
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
