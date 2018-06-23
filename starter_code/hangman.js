var theGame, theGameCanvas;
function Hangman() {
this.words = ['pizza', 'soda', 'cookie', 'chips', 'burger', 'chocolate', 'monkey', 'zebra', 'shark'];
this.secretWord = "";
this.badGuesses = [];
this.goodGuesses = [];
this.errorsLeft = 10;
this.wordSoFar = [];
}
Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
};
Hangman.prototype.checkLetter = function (letter) {
  var result;
  if(!letter.match(/[a-z]/)){
    alert('sorry, that is not a letter. please try a letter instead.')
    return;
  }
  if(this.badGuesses.includes(letter) || this.goodGuesses.includes(letter)){
    alert ("you've already guessed that letter please try another");
    return;
  }
  var that = this;
  if (this.secretWord.includes(letter)){
    this.goodGuesses.push(letter);
    result = true;
  } else{
    this.badGuesses.push(letter);
    result = false;
    this.errorsLeft -=1;
  }
  this.secretWord.split('').forEach(function(eachLetter, index){
    if(eachLetter ===  letter ){
      that.wordSoFar[index] = letter;
    }
  });
  console.log(this);
  return result;
};
Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft <= 0){
    alert('you lost');
  }
};
Hangman.prototype.checkWinner = function () {
  if(this.wordSoFar.join('') === this.secretWord){
    alert('you won');
  }
};






//-------------- DOM functions ------------------
document.getElementById('start-game-button').onclick = function () {
  theGame = new Hangman();
  theGame.getWord();

  theGameCanvas = new HangmanCanvas(theGame.secretWord);
  theGameCanvas.createBoard();
  theGameCanvas.drawLines();

  var shapes = ['triangle', 'firstLine', 'secondLine', 'thirdLine', 'head', 'torso', 'leftLeg', 'rightLeg', 'leftArm', 'rightArm' ]

  
  document.onkeydown = function (e) {
    if(theGame.checkLetter(e.key)){
      theGameCanvas.writeCorrectLetter(theGame.wordSoFar);
    } else{
      theGameCanvas.writeWrongLetter(e.key, theGame.errorsLeft);

      theGameCanvas.drawHangMan(shapes[9 - theGame.errorsLeft]);
    }

setTimeout(function(){
  theGame.checkGameOver();
  theGame.checkWinner();
},1000);

  };
};