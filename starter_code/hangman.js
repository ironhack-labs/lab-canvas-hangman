var hangman;
words = ["car", "tree", "dog", "house", "revolution", "abracadabra"];
secretWord = "";
letters = [];
guessedLetter = "";
errorsLeft = 10;

function Hangman() {
  this.words = words;
  this.secretWord = secretWord;
  this.letters = letters;
  this.guessedLetter = guessedLetter;
  this.errorsLeft = errorsLeft;
}

Hangman.prototype.getWord = function () {
  i = Math.floor(Math.random()*(words.length));
  this.secretWord = words[i];
  return words[i];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode <= 90) && (keyCode>= 65)) {
    return true;
  } else {
    return false;
}
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) !== -1) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.letters.push(this.secretWord[i]);
  // console.log("this.secretWord[i]: " + this.secretWord[i]);
  this.guessedLetter += this.secretWord[i].toUpperCase();
  // console.log("this.guessedLetter: " + this.guessedLetter);
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft -=1;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft === 0);
};

Hangman.prototype.checkWinner = function () {

  var guessed = 0
  for (var i = 0 ; i < this.secretWord.length ; i++) {
    if (this.guessedLetter.toLowerCase().indexOf(this.secretWord[i]) !== -1) {
      guessed += 1;
    }
}
console.log("guessed: " + guessed);
console.log("guessedLetter: " + this.guessedLetter);
console.log("secretWord: " + this.secretWord);
console.log("this.secretWord.length === guessed: " + this.secretWord.length === guessed)
return (this.secretWord.length === guessed)
};


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  // Select random word
  hangman.getWord()
  hangman.letters = [];
  hangman.errorsLeft = 10;
  hangman.guessedLetter = "";
  document.getElementById("errors-left").innerHTML = hangman.errorsLeft;
  console.log(hangman.secretWord);
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};


document.onkeydown = function (e) {


  var typed = String.fromCharCode(e.keyCode).toLowerCase();
  console.log("letter typed: " + typed);
  console.log("letter typed: " + e.keyCode);
  // console.log("letter typed: " + String.fromCharCode(e.keyCode));
  console.log(hangman.checkIfLetter(e.keyCode));
  console.log(hangman.checkClickedLetters(typed));
  console.log("letters: " + hangman.letters);
  if((hangman.checkIfLetter(e.keyCode)) && (hangman.checkClickedLetters(typed))) {
    if (hangman.secretWord.indexOf(typed) !== -1) {
      hangman.addCorrectLetter(hangman.secretWord.indexOf(typed));
      console.log("checkWinner");
      console.log(hangman.checkWinner);
      console.log(hangman.checkWinner());
      if (hangman.checkWinner() === true ) {
        hangmanCanvas.winner();
              //for loop to write the letter as many times as it is present
      var pos = hangman.secretWord.indexOf(typed);
      while (pos > -1 ) {
        // console.log("Beginning of While loop");
        hangmanCanvas.writeCorrectLetter(typed, hangman.secretWord.indexOf(typed, pos));
        pos = hangman.secretWord.indexOf(typed, pos+1);
        // console.log("End of While loop");
      }
      
      

      console.log("correct letter: " + typed);
        
      } else {
      //for loop to write the letter as many times as it is present
      var pos = hangman.secretWord.indexOf(typed);
      while (pos > -1 ) {
        // console.log("Beginning of While loop");
        hangmanCanvas.writeCorrectLetter(typed, hangman.secretWord.indexOf(typed, pos));
        pos = hangman.secretWord.indexOf(typed, pos+1);
        // console.log("End of While loop");
      }
      
      

      console.log("correct letter: " + typed);
    }
    } else {
      hangman.addWrongLetter(typed);

      if(hangman.checkGameOver() === true) {
        hangmanCanvas.gameOver();
        document.getElementById("errors-left").innerHTML = hangman.errorsLeft;
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        console.log("wrong letter: " + typed);

      } else {
      hangmanCanvas.writeWrongLetter(typed, hangman.errorsLeft);
      document.getElementById("errors-left").innerHTML = hangman.errorsLeft;
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      console.log("wrong letter: " + typed);
    }
    }
  } else {
    console.log("This is not a letter, or this letter has already been tried")
  }

};
