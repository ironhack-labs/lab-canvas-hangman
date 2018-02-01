var hangman;

function Hangman() {
  this.words=[];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
    var number = Math.floor(Math.random() * this.words.length)
    this.secretWord = this.words[number];
    return this.words[number];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    if (keyCode < 91 && keyCode > 64){
        return true;
    }
    else{
        return false;
    }
};

Hangman.prototype.checkClickedLetters = function (key) {
      if(this.letters.includes(key)){
        return false
      }
      else{
        return true;
      }

};

// Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
Hangman.prototype.addCorrectLetter = function (i) {
        this.guessedLetter += String.fromCharCode(i);
        this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
        this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
      if(this.errorsLeft===0){
        return true;
      }
      else{
        return false;
      }
};

Hangman.prototype.checkWinner = function () {
     if(this.secretWord.length === this.guessedLetter.length){
       return true
     }
     else{
       return false
     }

 } 
  
//   if(this.secretWord.includes(this.guessedLetter)){
//           return true;
//         }
//         else{
//           return false;
//         }
// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
