class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
  }

  pickWord() {
    const newString = this.words[Math.floor(Math.random()*this.words.length)];
    return newString;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode < 65 ? false : keyCode > 90 ? false : true;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) == -1;
  }

  addClickedLetter(letter){
    this.letters.push(letter);
  }

  addCorrectLetter(letter) {
    this.addClickedLetter(letter);
    this.guessedLetters += letter;
    console.log("acertos " + this.guessedLetters);
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    console.log("quantos faltam: " + this.errorsLeft);
    this.addClickedLetter(letter);
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }


  checkWinner() {  
    let returnV = true;

    [...this.secretWord].forEach(letter => returnV = returnV && (this.guessedLetters.indexOf(letter) != -1));
    
    return returnV;
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)){
    if(hangman.secretWord.indexOf(event.key) != -1){
      hangman.addCorrectLetter(event.key);
      [...hangman.secretWord].forEach((letter, idx) => {
        if(letter === event.keyCode){
          hangmanCanvas.writeCorrectLetter(idx);
        }
    });
  } else {
    hangman.addWrongLetter(event.key);
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
  }
  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  } else if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }
}

  
});