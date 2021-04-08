class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10; 

  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return ((keyCode >= 65 && keyCode <= 90));
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
  
    for(let i = 0; i <= this.secretWord.length; i++) {
      if(this.secretWord[i] === letter) {
        this.guessedLetters += letter;
        console.log(this.secretWord[i]);
      }
    }    
    this.letters.push(letter);
    this.checkWinner();
    
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return [...this.secretWord].sort().join() === [...this.guessedLetters].sort().join();
  }
}

let hangman;
let hangmanCanvas;
const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    document.getElementById('gameBoard').style.display = 'block';
    hangman = new Hangman(['node','jaavascript','react','miami','paris','amsterdam','lisboa']);
    hangman.secretWord = hangman.pickWord();
    console.log('word ', hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(document.getElementById('hangman'), hangman.secretWord);
    hangmanCanvas.createBoard();
    
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkGameOver() || hangman.checkWinner()) {
    return;
  }
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.keyCode)) {
    if ([...hangman.secretWord].includes(event.key)){
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key));
      hangman.checkWinner() && hangmanCanvas.winner();
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      hangman.checkGameOver() && hangmanCanvas.gameOver();
    }

  } 
});
