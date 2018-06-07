var hangman;

function Hangman() {
this.words=["amnamn", "jsfgj","jfjir"],
this.secretWord= "",
this.letters=[],
this.guessedLetter="",
this.errorsLeft=10

 }

 Hangman.prototype.getWord = function () {
     var i = Math.floor(Math.random()*(this.words.length + 2));
     return  this.secretWord += this.words[i];
    ; 
};

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91){
    return true;
  } 

   return false; 
 
};


 Hangman.prototype.checkClickedLetters = function (key) {
   if (this.letters.indexOf(key)>0){
    return false;
   };
 
return true;
};

Hangman.prototype.addCorrectLetter = function (i) {
   
    this.guessedLetter = this.secretWord[i].toUpperCase()
    return this.guessedLetter
};

 Hangman.prototype.addWrongLetter = function (letter) {
if (this.secretWord.indexOf(letter)<0){
  return this.errorsLeft -=1;
}

 };

 Hangman.prototype.checkGameOver = function () {
   if (this.errorsLeft>0){
     return false;
   }
else {
  return true;
}
 };

 Hangman.prototype.checkWinner = function () {
   if (this.guessedLetter.length === this.secretWord.length){
     return true;
   }
else{
  return false;
}
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
