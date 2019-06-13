var hangman;

function Hangman() {
 this.words = ["cero", "uno", "dos"];
 this.secretWord = "";
 this.letters = [];
 this.guessedLetter = ""
 this.errorsLeft = 10

}

Hangman.prototype.getWord = function  ()  {
rnd = Math.floor(Math.random() * this.words.length)
//console.log(rnd)
return this.words[rnd]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
if (keyCode > 64 && keyCode < 91) {
  return true
}else {
  return false
}
};

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key) === -1
 };

Hangman.prototype.addCorrectLetter = function (i) {
return this.guessedLetter += this.secretWord[i].toUpperCase()
 };

Hangman.prototype.addWrongLetter = function (letter) {
if (!this.secretWord.includes(letter)){
return this.errorsLeft --
}
};

 Hangman.prototype.checkGameOver = function () {
 if (this.errorsLeft <= 0){
   return true
 } else {
   return false
 }
 };

Hangman.prototype.checkWinner = function () {
//let final = ''
  for (let i = 0; i < this.secretWord.length; i++) {
  if (!this.guessedLetter.includes(this.secretWord[i])) {
    return false
  }
    }
    return true
 };

document.getElementById('start-game-button').onclick = function () {
 hangman = new Hangman();
};


document.onkeydown = function (e) {

};