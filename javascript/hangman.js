class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWordIndex = Math.floor(Math.random() * this.words.length);
    // console.log(this.word);
    // console.log(randomWordIndex);
    return this.words[randomWordIndex];
  }

  checkIfLetter(keyCode) {
    if (keyCode >=65 && keyCode <= 90) {
      this.letters += keyCode;
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    //retorna FALSE quando a letra ja foi clicada
    if (this.letters.includes(letter)){
      return false;      
      // retorna true quando a letra ainda nao foi clicada
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
      return this.guessedLetters += letter;
  }
  

  addWrongLetter(letter) {
    return this.errorsLeft -= 1
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let allLetters = true;
    this.secretWord.split('').forEach(letter => {
      if(!this.guessedLetters.includes(letter))
      allLetters = false;
    })
    return allLetters;
    // return this.guessedLetters.length === this.secretWord.length
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

  });
}

document.addEventListener('keydown', event => {
  console.log(event.keyCode);

  if (hangman.checkIfLetter(event.keyCode) && !hangman.checkWinner()){
    if (hangman.checkClickedLetters(event.key)){
      if (hangman.secretWord.includes(event.key)){
        hangman.addCorrectLetter(event.key);
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key));
      }
    }
  }
  // React to user pressing a key
  // ... your code goes here
});
 