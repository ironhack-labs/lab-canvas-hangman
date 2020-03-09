let hangman;
let field;

class Hangman {
  constructor() {
    this.words = ['ironhack', 'paralelepipedo', 'olimpiadas'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(this.words.length * Math.random())];
  }
  

  checkIfLetter(keyCode) {
    if ((keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123)) {
      return true;
    }
    return false;
  }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) >= 0) {
      return false;
    }
    return true;
  }

  addCorrectLetter(i) {

    this.guessedLetter += this.secretWord[i].toUpperCase();

    this.checkWinner();

  }

  addWrongLetter(letter) {
    if (this.secretWord.indexOf(letter) < 0) {
      this.letters.push(letter);
      this.errorsLeft -= 1;
      this.checkGameOver();
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {
      return false;
    }
    return true;
  }

  checkWinner() {
    const secretArray = this.secretWord.toUpperCase().split('');
    const guessedArray = this.guessedLetter.toUpperCase().split('');

    for(let i = 0; i < secretArray.length; i++) {
      if (guessedArray.indexOf(secretArray[i]) >=0) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

}

document.getElementById('start-game-button').onclick = () => {

  hangman = new Hangman();
  field = new HangmanCanvas(hangman.secretWord, 800, 1200);
  
  field.createBoard()
  console.log(field);
  field.drawLines();
};

document.onkeydown = (e) => {

  if(hangman.errorsLeft <= 0){
    return;
  }

  if(hangman.checkIfLetter(e.keyCode)) {

    if (hangman.checkClickedLetters(e.key)) {
     
      if (hangman.secretWord.indexOf(e.key) >= 0) {
        
        hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
        field.writeCorrectLetter(hangman.secretWord.indexOf(e.key));
      } else {
        hangman.addWrongLetter(e.key);
        field.writeWrongLetter(e.key, hangman.errorsLeft);
        field.drawHangman(hangman.errorsLeft);
      }
    }
  }

  if(hangman.checkGameOver()) {
    field.gameOver();
    console.log('Game Over');
  } else if (hangman.checkWinner()){
    field.winner();
    console.log('You Win');
  }
};