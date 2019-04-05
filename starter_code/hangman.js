var hangman;

 function Hangman() {
   this.words = ['kelly', 'arthur', 'rodrigo'];
   this.secretWord = '' //this.getWord;
   this.letters = [];
   this.guessedLetter = '';
   this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {
  let word = this.words[(Math.floor(Math.random() * this.words.length))];
  return word;
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
   let result = keyCode;
   if((result >= 65 && result <=90)){
      return true;
   }
  return false; 
 };

 Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.indexOf(key) === -1) {
      return true;
    } 
  return false;
};

 Hangman.prototype.addCorrectLetter = function (i) {
  this.letters.push(i);
  let correct = this.secretWord[i];
  this.guessedLetter += correct.toUpperCase(); 
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft -= 1;
  this.checkGameOver();
};

 Hangman.prototype.checkGameOver = function () {
    if(this.errorsLeft === 0){
      return true;
    }
  return false;  
 };

Hangman.prototype.checkWinner = function () {
    let secret = this.secretWord.split('');
    secret = secret.toUpperCase;
    //if(this.guessedLetter.indexOf(secret[i]) === -1){
    if(this.guessedLetter.indexOf(secret !== -1)){
      return true;
    }
/*  if(this.guessedLetter == this.secretWord){
      return true;
    }*/
  return false;   
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
