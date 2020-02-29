class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    //this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = '';
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90){
      return true;
    } else {
      return false;
    }

  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letters.includes(letter)){
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
  
    // if(!this.letters.includes(letter)){
    //   this.letter.push(letter);
    // }

    this.errorsLeft-=1;
    this.letters.push(letter);

    // if(checkClickedLetters(letter) == false){
    //   this.letters.push(letter);
    // }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here

    if(this.guessedLetters.length == this.secretWord.length){
      return true;
    } else {
      return false;
    }
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
    hangmanCanvas.createBoard();
    //hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  // if(checkIfLetter(event.keyCode) == true){

  // }


  if(hangman.secretWord.includes(event.key)){
    let index = hangman.secretWord.indexOf(event.key);
    hangman.addCorrectLetter(event.key);
    hangmanCanvas.writeCorrectLetter(index);
  } else {
    hangman.addWrongLetter(event.key);
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft);
  }
});
