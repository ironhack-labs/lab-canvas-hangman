class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]; // word to guess
    this.letters = []; //wrong guesses
    this.guessedLetters = ""; //correct guesses
    this.errorsLeft = 10; //chances to guess wrong
  }
  //pick the word to guess
  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
  //check if key event is a letter
  checkIfLetter(keyCode) {
    return keyCode <= 90 && keyCode >= 65;
  }
  //check if key event is a past wrong guess
  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }
  //add the key event to a string of correct guesses
  addCorrectLetter(letter) {
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }
  //add key event to the array of wrong guesses and lower the attempts by one
  addWrongLetter(letter) {
    if (this.checkClickedLetters(letter)){
      this.letters.push(letter);
      this.errorsLeft--;
    }    
  }
  //check if there are any more attempts left
  checkGameOver() {
    return this.errorsLeft <= 0;
  }
  //check is the word was guessed correctly
  checkWinner() {
    let secretWord = [...new Set(this.secretWord.split(""))].sort(); // "[...new Set()] returns a new array of unique elements"
    let guessedWord = this.guessedLetters.split("").sort();
    return secretWord.join("") === guessedWord.join("");
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    console.log(hangmanCanvas.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener("keydown", (event) => {
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(event.key);
      if (hangman.checkWinner()) hangmanCanvas.winner();
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      if (hangman.checkGameOver()) hangmanCanvas.gameOver();
    }
  }
});