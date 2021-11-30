class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(this.words.length * Math.random())];
  }

  checkIfLetter(keyCode) {
    return isNaN(String.fromCharCode(keyCode));
  }

  checkClickedLetters(letter) {
    console.log(letter);
    console.log(this.secretWord.includes(letter));
    return this.secretWord.includes(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    return this.secretWord.indexOf(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    if(!this.letters.includes(letter)) this.letters.push(letter);
  }

  checkGameOver() {
    return errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    console.log( hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    console.log(hangmanCanvas);
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if(hangman.checkIfLetter(event.keyCode)){
    let letter = String.fromCharCode(event.keyCode).toLowerCase();
    if(hangman.checkClickedLetters(letter)){
      hangmanCanvas.writeCorrectLetter(hangman.addCorrectLetter(letter))
    }else{
      hangman.addWrongLetter(letter);
      hangmanCanvas.writeWrongLetter(letter,hangman.errorsLeft);
    }
  }
  console.log(hangman);
  hangmanCanvas.drawHangman(hangman.errorsLeft);
});
