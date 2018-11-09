var hangman;

function Hangman() {
  this.words = ['GABRIEL','MIGUEL']
  this.secretWord = ""
  this.letters = []
  this.guessedLetter = ""
  this.wrongLetter = ""
  this.errorsLeft = 7

}

Hangman.prototype.getWord = function () {

return this.words[Math.floor(Math.random()*this.words.length)]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  var char = String.fromCharCode(keyCode)
  var res = false
  console.log("keyCode: "+keyCode)
  console.log(char)
if (65 <= keyCode && keyCode <= 90){
  res = true
} else {
  res = false
}
return res
};

Hangman.prototype.checkClickedLetters = function (key) {
  var res = false
  console.log(key)
  if(typeof key === 'string'){
    if(this.letters.indexOf(key) === -1){
      res = false  
    }else{
      res = true
    }
  }
  return res
};

Hangman.prototype.addCorrectLetter = function (num) {
  this.guessedLetter+= this.secretWord[num]
  console.log(this.guessedLetter)
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
  this.wrongLetter+=letter
 };

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0){
    return true
  }
    return false
};

Hangman.prototype.checkWinner = function () {
  if(this.secretWord.length === this.guessedLetter.length){
    return true
  } else {
    return false
  }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
