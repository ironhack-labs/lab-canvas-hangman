let hangman;

class Hangman {
  constructor() {
    this.words = ["apple", "cat", "house"]; //array of words player needs to guess.Select1 randomly
    this.secretWord = this.getWord(); // word chosen for each game
    this.letters = ["R"]; //store letters the user already clicked, so we do not repeat them.
    this.guessedLetter = ""; // a string to store the letters the user clicked and guessed
    this.errorsLeft = 10; //Number of lifes. Will decrease every time the user clicks on a
    //letter that is not the word.
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      return true;
    }
    return false;
  }
  //Check if the letter was already clicked checkClickedLetters should return true
  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return true;
    }
    return false;
  }
  //this.guessedLetter: string to store the letters user clicked and guessed
  //Add correct letters addCorrectLetter should add letters to guessedLetter string
  addCorrectLetter(i) {
    this.guessedLetter += i;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (this.errorsLeft === 0) {
      return true;
    }
    return false;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    }
    return false;
  }

  checkWinner() {
    //Check if we win checkWinner should return true if we guess all letters
    let lettersSplit = this.guessedLetter.split("");

    lettersSplit.every(value => {
      return this.secretWord.includes(value);
    });
    return false;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
};

document.onkeydown = e => {};
