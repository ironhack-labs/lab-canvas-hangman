var hangman;

function Hangman() {
  this.words= ["MICHILALA","TLACOYO","CHUCHA","CERVEZA","ANAHI"]
  this.secretWord=""
  this.letters=[]
  this.guessedLetter=""
  this.errorsLeft=10
 }

Hangman.prototype.getWord = function () {
  var r = Math.floor(Math.random()*this.words.length)
  return this.words[r]
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {

 
    if ((keyCode >= 65 && keyCode <=90) || (keyCode >=97 && keyCode <=122)) {
         return true
     }else{
         return false
     }
   
 
      
};

Hangman.prototype.checkClickedLetters = function (key) {

  for(var i of this.letters){
    if(key === i)
      return false
   else
    return true
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase()
 };

 Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter)
  this.errorsLeft--

 };

 Hangman.prototype.checkGameOver = function () {
   
    if (this.errorsLeft === 0 )
      return true
    else
      return false


 };

 Hangman.prototype.checkWinner = function () {
    if(this.guessedLetter.length === this.secretWord.length)
      return true
    else  
      return false


 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord= hangman.getWord()
  var board =new HangmanCanvas(hangman.secretWord)
  board.createBoard()
  board.drawLines()
};


document.onkeydown = function (e) {
 

  
//  board.writeCorrectLetter(
   
  
//   e.keyCode
 
 
//   e.key

};
