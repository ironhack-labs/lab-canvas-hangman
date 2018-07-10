var hangman;
var canvas;

function Hangman() {
  // words. An array where we will store all the words that the player need to guess. We will take one of them randomly.
  this.words = ['web', 'javascript', 'js', 'canvas', 'ironhack', 'bootcamp', 'programming'];
  // secretWord. Here we will store the word chosen for each game.
  this.secretWord = this.words[0];
  // letters. An array to store the letters the user already clicked, so we do not repeat them.
  this.letters = [];
  // guessedLetter. A string to store the letters the user clicked and guessed. We will use this to know when the user wins.
  this.guessedLetter = '';
  // errorsLeft. It should start at 10, and decrease every time a user clicks on a letter that is not in the word.
  this.errorsLeft = 10;  
}

Hangman.prototype.getWord = function () {
  return this.words[ Math.floor( Math.random() * this.words.length ) ];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode >= 65 && keyCode <=90 || keyCode >= 97 && keyCode <=122) return true;
  else return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  //Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
  var pressed = false;
  this.letters.forEach(function(letter){
    if(letter === key) pressed = true;
  });
  return pressed;
};

Hangman.prototype.addCorrectLetter = function (i) {
//Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
  this.guessedLetter += i;
  if(this.checkWinner())
  {
    //user wins!
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  //Should subtract one from the variable errorsLeft and check if the game is over.
  this.errorsLeft --;
  if(this.checkGameOver())
  {
    //user loses!
  }
};

Hangman.prototype.checkGameOver = function () {
  //Returns a bolean value, true if the users lose, and false in any other case.
  if(this.errorsLeft>0) return false;
  else return true;
};

Hangman.prototype.checkWinner = function () {
  //Check if the users win and return a boolean value.
  if(this.errorsLeft>0)
  {
    for(var i=0; i<this.secretWord.length; i++)
    {
      var guessed = false;
      for(var j=0; j<this.guessedLetter.length; j++)
      {
        if(this.secretWord.charAt(i) === this.guessedLetter.charAt(j))
        {
          guessed = true;
        }
      }
      if(guessed === false) return false;
    }
    return true;
  }
  return false;
};  

document.getElementById('start-game-button').onclick = function () {
  if (canvas != undefined) canvas.createBoard();
  hangman = new Hangman();
  hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
};


document.onkeydown = function (e) {
  if(hangman == undefined) return;
  if(!(hangman.checkIfLetter(e.keyCode)) || hangman.checkGameOver() || hangman.checkWinner()) return;
  if(hangman.checkClickedLetters(e.key)) //new letter
  {
    var posLetter = hangman.checkLetter(e.key); //get an array with the positions of the letter (if none, it will be empty)
    if(posLetter.length > 0)
    {
      hangman.addCorrectLetter(e.key);
      hangmanCanvas.writeCorrectLetter(posLetter);
    }
    else
    {
      hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
      hangman.addWrongLetter(e.key);
    }
  }
};
