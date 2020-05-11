class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
 
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    }

    return false;

  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false;
    }

    this.letters.push(letter);
    return true;
  }

  addCorrectLetter(letter) {
    this.guessedLetters = this.guessedLetters.concat(letter);
  }

  addWrongLetter(letter) {
    --this.errorsLeft;
    this.letters.push(letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false;
    }

    return true;
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length){
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

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    
    hangmanCanvas.drawLines();

   
  
  });
}

document.addEventListener('keydown', event => {
  let letterValue = event.key;
  if(hangman.checkIfLetter(event.keyCode)){

    hangman.checkClickedLetters();

    let arraySecret = hangman.secretWord.split("");
    
    if(hangman.letters.indexOf(letterValue) < 0){
      if(hangman.secretWord.includes(letterValue)){
        arraySecret.forEach((letter, index) => {
          if(letter === letterValue){
            hangman.addCorrectLetter(letterValue);
            hangmanCanvas.writeCorrectLetter(index);
          }
        });
      } else {
        hangman.addWrongLetter(letterValue);
        hangmanCanvas.writeWrongLetter(letterValue, hangman.errorsLeft);
        hangmanCanvas.gameOver();
      }
    }
  
    if(hangman.checkWinner()){
      hangmanCanvas.winner();
    }
    hangmanCanvas.drawHangman(hangman.errorsLeft);
    
  }
});

