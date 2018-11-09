
var hangman;

function Hangman() {
  this.words = ["code", "perro", "gato", "laptop", "Ironhack"]
  this.secretWord = this.getWord()
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 10

}





var button = document.getElementById("start-game-button")

button.onclick = function(){
  console.log("HELLO")
  hangman = new Hangman
  document.getElementById("title").style.display = "none"
  document.getElementById("game").style.display = "block"
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*MimeTypeArray.length)]
};


Hangman.prototype.checkIfLetter = function (keyCode) {
    if(keyCode > 64 &&  keyCode < 91){
      this.letters.push(keyCode)
      return true
    }else{
      return false
    }
};

Hangman.prototype.checkClickedLetters = function (key) {
    var result = this.letters.includes(key)
    if (result){
      return false
    }else{
      return true
    }

};

Hangman.prototype.addCorrectLetter = function (i) {

  this.guessedLetter += this.secretWord[i].toUpperCase()
  if(this.guessedLetter === this.secretWord){
    return true
  }else{
    return false
  }

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0){
    return true
  }else{
    return false
  }

};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length){
    return true
  }else{
    return false
  }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
