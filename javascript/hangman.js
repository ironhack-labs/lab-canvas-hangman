class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

    // ... your code goes here
  }

  pickWord() {
    let randomWord = Math.floor(Math.random() * this.words.length); 
    return this.words[randomWord];
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90){
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if (this.checkClickedLetters(letter)){
      this.letters.push(letter);
      this.errorsLeft -=1;
 }  
  }

  checkGameOver() {
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    return this.secretWord.split('').every(letter => this.guessedLetters.includes(letter));
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
  if (hangman.checkIfLetter(event.keyCode)) {
    console.log('é uma letra');
    if (hangman.secretWord.includes(event.key)) {
      const index = hangman.secretWord.indexOf(event.key);
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(index);
      if (hangman.checkWinner()) {
        hangmanCanvas.winner();
      }
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      if (hangman.checkGameOver()) {
        console.log('game over');
        hangmanCanvas.gameOver();
      }
    }
  }
});
