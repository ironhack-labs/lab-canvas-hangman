var hangman;

function Hangman() {
  this.words = ['tacos', 'tlayudas', 'pozole'];
  this.secretWord = '';
  this.letters = [];        //letters guessed incorrectly
  this.guessedLetter = '';  //letters guessed correctly
  this.errorsLeft = 10;
}

//returns current secret word
Hangman.prototype.getWord = function(){
  var random = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[random];
  return this.secretWord;
}; 

//checks if user has typed letter; returns boolean
Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >= 65 && keyCode <= 90);
};

//check if letter is new; returns boolean
Hangman.prototype.checkClickedLetters = function (key) {
    if (this.guessedLetter.includes(key)) {
      return false;
    } else return true;
};

//adds correct letter to guessed string and checks if won; returns boolean
Hangman.prototype.addCorrectLetter = function (ltr) {
  this.guessedLetter += ltr;
  var index = this.secretWord.indexOf(ltr);
  canvitas.writeCorrectLetter(index);
};

//subtracts from errorsleft and checks if game over; returns boolean
Hangman.prototype.addWrongLetter = function (letter) {
        this.errorsLeft --;
        if (!this.checkGameOver()) this.letters.push(letter);
        canvitas.writeWrongLetter(letter,errorsLeft);
        var shapes = [head,body,leftLeg,rightLeg,leftArm,rightArm];
        var numWrong = letters.length;
        var shape = shapes[numWrong];
        canvitas.drawHangman(shape);
        return this.checkGameOver;
  }

  //checks if game over; returns boolean
Hangman.prototype.checkGameOver = function () {
    if (this.errorsLeft < 1) return true;
    else return false;
};

Hangman.prototype.checkWinner = function () {
  var secretArray = this.secretWord.split('');
  var guessedArray = this.guessedLetter.split('');
  if (secretArray.length === guessedArray.length) return true;
  else return false;
};



document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
  var keyPressed = e.key;
  var isLetter = hangman.checkIfLetter(e.keyCode);
  var canGuess = hangman.checkClickedLetters(keyPressed);
  if (isLetter && canGuess) {
    if (hangman.secretWord.contains(keyPressed)) {
      hangman.addCorrectLetter(keyPressed);
      return true;
  } else {
    return false;
  }
}
};

//need to add correctly guessed letter to board or wrong guess to board
