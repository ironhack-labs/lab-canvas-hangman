class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord()
    // this.randomWord = Math.floor((Math.random()*10)+1);
    // this.secretWord = `${words[this.randomWord]}`;
    
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    const randomNumber = Math.random()* this.words.length;
    const positionArr = Math.floor(randomNumber);
    return this.words[positionArr];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >=65 && keyCode<=90){
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)){
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    return this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)){
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft>0){
      return false;
    }else{
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    let sortedSecretWord = this.secretWord.split("").sort().join("");
    const orderedGuessedWord = this.guessedLetters.split("").sort().join("");
    if (sortedSecretWord === orderedGuessedWord){
      hangmanCanvas.winner()
      return true;
    }
    return false;
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
    hangmanCanvas.drawLines();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (event.keyCode >= 65 && event.keyCode <= 90){
    hangmanCanvas.writeCorrectLetter(event.key);
    hangmanCanvas.writeWrongLetter(event.key);
    hangmanCanvas.gameOver();
    hangmanCanvas.drawHangman(hangman.errorsLeft)
    hangman.checkWinner();
  }
});
