var hangman;
var canvas;

function Hangman() {

  this.words = ["Ironhack", "Javascript", "Mexico"]
  this.secretWord = ""
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 10

}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase()
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode > 64 && keyCode <91 ) return true;
  return false;

};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) == -1)
    return true;
  return false;
};

Hangman.prototype.addCorrectLetter = function (index) {
  var l =  this.secretWord[index]
  this.guessedLetter += l.toUpperCase()
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
 this.errorsLeft--;
 this.checkGameOver();

};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft<=0) {
    return true;
  }
  else
    return false;
};

Hangman.prototype.checkWinner = function () {

  var secretCopy = this.secretWord;
  var count = 0;

  for(i =0; i<this.guessedLetter.length; i++){
    for (j = 0; j<secretCopy.length; j++){
      //console.log(secretCopy[j],this.guessedLetter[i] )
      if(secretCopy[j]==this.guessedLetter[i])
        count++;
    }}

  if(count=== secretCopy.length){
    //canvas.winner()
    return true;
  } else {
    return false}

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);
  console.log(hangman.secretWord);

};


document.onkeydown = function (e) {
  // console.log("which: "+ e.which)
  // console.log("key" + e.key)
  // console.log("keyCode" + e.keyCode)
   if( !hangman.checkIfLetter(e.keyCode)) {
    console.log("Not Letter")
    return;
   }
   if(!hangman.checkClickedLetters(e.key)){
    console.log("Already clicked this letter")
    return;
   }
  
   var index = hangman.secretWord.indexOf(e.key.toUpperCase())
   if(index ==-1) {
    hangman.addWrongLetter(e.key);
    canvas.writeWrongLetter(e.key,hangman.errorsLeft)
    canvas.drawHangman(hangman.errorsLeft)
    if(hangman.checkGameOver())
      canvas.gameOver()
    return;}
   
    hangman.addCorrectLetter(index);
    canvas.writeCorrectLetter(index);
    if(hangman.checkWinner()){
      canvas.winner();
    }

    var i = index; 
    while (true){
      i= hangman.secretWord.indexOf(e.key.toUpperCase(),i+1)
      if(i==-1)
        break;
      canvas.writeCorrectLetter(i); 
    }

};
