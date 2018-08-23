var words = ["Italy", "France", "Spain", "Brazil", "Argentina"];

class HangmanGame{
  constructor(arrayOfWords){
    this.secretWord = "";
    this.clickedLetters = [];
    this.guessedLetters=[];
    this.letterArray=[]
    this.errorCount = 0;
    this.getWord(arrayOfWords);
    this.thecanvas = {};
  }
  getWord(wordArray){
    this.secretWord =wordArray[Math.floor(Math.random()*(wordArray.length))];
    this.secretWord = this.secretWord.toLowerCase();
    this.letterArray =this.secretWord.split('');
    console.log(this.secretWord);
  } // end of constructor
  
  checkIfLetter(keyCode){
    if (keyCode >= 65 && keyCode <= 90) {
    return true;
    }
    //add check if letter function
    // return true or false
  }
  checkClickedLetters(key){
    if (!this.clickedLetters.includes(key)) {
      this.clickedLetters.push(key);
      if (this.secretWord.includes(key)) {
      this.addCorrectLetter(key)
      // return true
      } else {
        this.addWrongLetter(key)
        console.log('the letter ' +key + ' is incorrect')
        // return false
      }
    }
    //check if clicked letter is correct
  }
  addCorrectLetter(keyToAdd) {
    this.letterArray.forEach((thisLetter, index)=>{
      if (thisLetter==keyToAdd) {
        this.guessedLetters.push(keyToAdd);
        this.thecanvas.drawText(thisLetter,index);
        this.checkWinner()
      }
    })
  }

  addWrongLetter(theLetter) {
    this.errorCount++;
    this.checkGameOver();
    this.thecanvas.drawIt(this.errorCount-1)
    this.thecanvas.drawWrongLetters(theLetter,(this.errorCount))
  }

  checkGameOver() {
    if (this.errorCount == 6){
      var gameOver = $('.game-over');
      gameOver.show()
      setTimeout(function(){
        alert('Game Over')
        }, 2000);
    }
  }
  checkWinner() {
    console.log(this.guessedLetters.length)
    console.log(this.letterArray.length)
    if (this.guessedLetters.length == this.letterArray.length){
      var wonGame = $('.you-won');
      wonGame.show()
      setTimeout(function(){
        alert('Congratulations! YOU WON!!!!!')
        }, 2000);
    }
  }
  
} // end of HangmanGame

// var hangman;
// function Hangman() {}
// Hangman.prototype.getWord = function () {};
// Hangman.prototype.checkIfLetter = function (keyCode) {};
// Hangman.prototype.checkClickedLetters = function (key) {};
// Hangman.prototype.addCorrectLetter = function (i) {};
// Hangman.prototype.addWrongLetter = function (letter) {};
// Hangman.prototype.checkGameOver = function () {};
// Hangman.prototype.checkWinner = function () {};

document.getElementById('start-game-button').onclick = function () {
  hangman = new HangmanGame(words);
  hangCanv = new HangmanCanvas(hangman.secretWord)
  hangman.thecanvas = hangCanv;
};

 
document.onkeydown = function (event) {
  var keyPressed= event.key;
  var codeOfKey=event.keyCode;
  if (hangman.checkIfLetter(codeOfKey)) {
    hangman.checkClickedLetters(keyPressed)
  }
  
};
