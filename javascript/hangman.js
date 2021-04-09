class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    this.letters = [];
    this.guessedLetters= "";
    this.errorsLeft= 10;
  }

  pickWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) === -1;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (!this.letters.includes("letter")) this.letters.push(letter);
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    return this.guessedLetters === this.secretWord
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
    console.log(hangman.secretWord)
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.key) || hangman.checkClickedLetters(event.key)){
    if (hangman.secretWord.includes(event.key)){
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key));
      if(hangman.checkWinner()){
        setTimeout(()=>{
          alert("you survived!"), 500})
      }
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      if(hangman.checkGameOver()){
        setTimeout(()=>{
          alert("you are dead!"), 500})
      }
    }
  }
  // ... your code goes here
});
