class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random()*this.words.length);
    return this.words[randomIndex];
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <=90){
      return true;
    }else{
      return false;
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false;
    }else{
      return true;
    }
  }

  addCorrectLetter(letter) { // <-----deu erro, precisa corrigir algo
    if(this.secretWord.includes(letter)){
      this.letters.push(letter);
      this.guessedLetters += letter;
    }
    return true;
  }

  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft -= 1;
    }else if(!this.letters.includes(letter)){
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0){
      return false;
    }else{
      return true;
    }
  }

  checkWinner() {
    let guessedLetters = this.guessedLetters.split('').sort().join('');
    let secretWord = this.secretWord.split('').sort().join('');
    if(guessedLetters === secretWord){
      return true;
    }else{
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    hangmanCanvas.createBoard();
    //hangmanCanvas.writeCorrectLetter();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
