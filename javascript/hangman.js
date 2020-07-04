class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.secretWord = "";
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord(){
  return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
  if (keyCode > 64 && keyCode < 91){
    this.letter = String.fromCharCode(keyCode);
    this.checkClickedLetters(this.letter);
    return true;
  } else {
    return false;
  };
  }
  checkClickedLetters(letter){
    if (this.letters.indexOf(letter) > -1 ){
      return false;
    } else {
      this.checkCorrectLetter(letter);
      return true;
    };
    }

  checkCorrectLetter(letter){
    let index = this.secretWord.indexOf(letter);
  if( index > -1){
    this.addCorrectLetter(letter, index);
    return true;
    } else {
    this.addWrongLetter(letter, this.errorsLeft);
    return false;
    };
  }

  addCorrectLetter(letter, index){
  this.guessedLetters += letter;
  hangmanCanvas.writeCorrectLetter(index);
  this.checkWinner();
  }

  addWrongLetter(letter) {
  this.errorsLeft--;
  this.letters.push('letter');
  hangmanCanvas.drawHangman(this.errorsLeft);
  hangmanCanvas.writeWrongLetter(letter);
  this.checkGameOver();
  }

  checkGameOver() {
  if (this.errorsLeft > 0){
    return false;
  } else {
    hangmanCanvas.gameOver();
    return true;
    
  }
  }

  checkWinner() {
  let guessed = this.guessedLetters.split('').sort();
  let secret = this.secretWord.split('').sort();
  let win = 0;
  let i;
  for (i = 0; i < this.secretWord.length; i++) {
    if (secret[i]==guessed[i]){
      win++;
    } else {
      return false;
    };
  };
    if (win == this.secretWord.length){
      hangmanCanvas.winner();
      return true;
    } else {
      return false;
    };
  }
}
const startGameButton = document.getElementById('start-game-button');
let hangman;
let hangmanCanvas;
  startGameButton.addEventListener('click', event => {

    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    this.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(this.secretWord);
    hangmanCanvas.createBoard();
  });

document.addEventListener('keydown', event => {
  hangman.checkIfLetter(event.keyCode);
  })