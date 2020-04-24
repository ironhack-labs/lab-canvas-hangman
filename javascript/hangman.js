class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90){
      console.log("es una letra");
      return true;
    } 
    console.log("no es una letra");
    return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
  if (this.letters.indexOf(letter) < 0){
    return true;
  } 
    return false
  }

  addLetter(letter){
    this.letters.push(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    this.addLetter(letter);
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.addLetter(letter);
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return Array.from(this.secretWord).sort().join("") == Array.from(this.guessedLetters).sort().join("");
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // ... your code goes here
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)){
    if (hangman.secretWord.indexOf(event.key) >= 0){
      hangman.addCorrectLetter(event.key);
      Array.from(hangman.secretWord).forEach((letra, index) => {
        if (letra === event.key){
          hangmanCanvas.writeCorrectLetter(index);
        }
      })
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
    if (hangman.checkWinner()) {
      hangmanCanvas.winner();
    } else if (hangman.checkGameOver()){
      hangmanCanvas.gameOver();
    }
}
});
