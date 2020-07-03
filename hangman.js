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
    const newString = this.words[Math.floor(Math.random()*this.words.length)];
     return newString;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode <= 90 && keyCode >= 65;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    //return this.letters.indexOf(letter) == -1;
    return !this.letters.includes(letter);
   }

   addClickedLetter(letter) {
    if (!(this.letters.includes(letter))) {
      this.letters.push(letter);
    }
   }


  addCorrectLetter(letter) {
    // ... your code goes here
    //this.addClickedLetter(letter);
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      this.errorsLeft--;
      this.addClickedLetter(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    // ... your code goes here
    let secretWord = [...new Set(this.secretWord.split(""))].sort(); // "[...new Set()] returns a new array of unique elements"
     let guessedWord = this.guessedLetters.split("").sort();
     return secretWord.join("") === guessedWord.join("");
  }
}

let hangman;
let hangmanCanvas;

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
    if(hangman.secretWord.indexOf(event.key) !== -1){
      hangman.addCorrectLetter(event.key);
      [...hangman.secretWord].forEach((letter, idx) => {
        if(letter === event.key){
          hangmanCanvas.writeCorrectLetter(idx);
        }
    });
  } else {
    hangman.addWrongLetter(event.key);
    hangmanCanvas.drawHangman(hangman.errorsLeft);
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
  }
  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  } else if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }
}
 }); 
