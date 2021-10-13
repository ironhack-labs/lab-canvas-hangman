class Hangman {
  constructor(words) {
    this.words = words; // array
    this.secretWord = this.pickWord(); // random secret word to guess by the user
    this.letters = []; // array to store the letters that the user has already picked
    this.guessedLetters = ''; // store letters user chose and guess
    this.errorsLeft = 10;
  }

  pickWord() {
    // random word from words
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) { //event.keyCode
    return keyCode >=65 && keyCode <= 90;
    //return keyCode >=65 && keyCode <= 90
    // ? true //true if the keyCode corresponds to a character from a-z
    // : false;
  }

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
      return true;
    }  return false; // it's not included
  }

  addCorrectLetter(letter) {
    // array to iterate
    const secretArray = this.secretWord.split(''); // to iterate
    // filter if includes the key / letter in lowercase
    const checkLetter = secretArray.filter( item => item.includes(letter)).join('');
    if (checkLetter.length > 1) {
      for (let i = 0; i < checkLetter.length; i ++) {
        this.guessedLetters += letter;
      }
    } else {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft <= 0;
    //return this.errorsLeft === 0
    // ? false //If the number of errors is greater than 0, the game continues
    // : true; // tha game is over, no errors left --> 0 left
  }

  checkWinner() {
    // 'node'.split('').sort() -->['d', 'e', 'n', 'o']
    //'node'.split('').sort().join('') --> 'deno'
    const secretSorted = this.secretWord.split('').sort().join('');
    const guessedSorted = this.guessedLetters.split('').sort().join('');
    //return secretSorted === guessedSorted ? true : false;
    return secretSorted.toLowerCase() === guessedSorted.toLocaleLowerCase();
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    // HINT (uncomment when start working on the canvas portion of the lab)
    //hangman.secretWord = hangman.pickWord();
    // create an instance of hangmanCanvas --> canvas.js
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if (!hangman) return; // if there is no hangman, return
  // Key pressed --> produces a character key
  const key = event.key.toLocaleLowerCase();
  const code = event.keyCode;
  // check if the character is includes in secretWord
  if (!hangman.checkIfLetter(code)) { // false if the letter has been pressed before
    alert(`Ups! It's not a letter, try again!`);
    return;
  } // keyCode not corresponds to a character from a-z
  if (!hangman.checkClickedLetters(key)) { // true if the letter hasn't been pressed before
      alert('Choose another letter! This has already passed!');
      return;
  } 
  if (hangman.secretWord.includes(key)) { //hangman.secretWord.indexOf(key) >= 0 // true
    // check if letter has already been pressed
    hangman.addCorrectLetter(key); // add letter to the guessedLetters
    // draw the letters
    for(let i = 0; i < hangman.secretWord.length; i++) {
      if (hangman.secretWord[i] === key) hangmanCanvas.writeCorrectLetter(i);
    }
  } else { // if the key pressed is not included in secretWord
    hangman.addWrongLetter(key);
    // letter not included in secretWord, write the letter on the top right corner
    hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft); 
    hangmanCanvas.drawHangman(hangman.errorsLeft);
  }
  if (hangman.secretWord.length === hangman.guessedLetters.length) {
    // add the gameOver image inside canvas
    if (hangman.checkWinner()) hangmanCanvas.winner();
  }
  // add the gameOver image inside canvas
  if (hangman.checkGameOver()) hangmanCanvas.gameOver();
});
