var Hangman = function () {
this.words = [
  'funny',
  'smooth',
  'dinner',
  'argument',
  'holistic',];
  this.secretWord = 'notaWord';
  this.guessedLetter = [];
  this.incorrectLetters = [];
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
return this.secretWord
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  // console.log("heyyy")
   if (keyCode >= 65 && keyCode <= 90) {
    //  console.log("letter")
        return true;
     } else {
      //  console.log("not letter")
       return false;
     }
 };
// Hangman.prototype.checkIfLetter = function (keyCode) {
// if (this.secretWord.indexOf(keyCode) > -1){
//   return true;
// }
// else{
//   return false;
// }
// };

Hangman.prototype.checkClickedLetters = function (key) {
  // console.log("what is the key: ", key)
  if ((this.guessedLetter.indexOf(key) >= 0) ||  
    (this.incorrectLetters.indexOf(key)>=0)){
      var neverClicked = false;
    } else {
    var neverClicked = true;
  }
return neverClicked;
};

Hangman.prototype.addCorrectLetter = function (i) {
   this.guessedLetter.push(i);
};

Hangman.prototype.addWrongLetter = function (letter) {
    var bodyparts = ['triangle', 'long vertical line', 'horizontal line','short vertical line', 'head', 'body','left arm', 'right arm', 'left leg', 'right leg'];
    this.incorrectLetters.push(letter);
    hangmanCanvas.drawHangman(bodyparts[10-this.errorsLeft]); 
    this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
if (this.errorsLeft<=0){
  return true;
  }
else {
  return false;
}
};

Hangman.prototype.checkWinner = function () {
if (this.guessedLetter.length==this.secretWord.length){
  return true
}
else {
  return false};
};

document.getElementById('start-game-button').onclick = function () {
  theGame = new Hangman();
  theGame.getWord();
  hangmanCanvas = new HangmanCanvas(theGame.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();

};


document.onkeydown = function (e) {
  // if (hangman.checkClickedLetters(e.keyCode)) && (hangman.checkClickedLetters(e.keyCode))
//  var keyCode = e;
};


