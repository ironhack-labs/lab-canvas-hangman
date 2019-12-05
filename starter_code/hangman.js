let hangman;
let hCanvas;

class Hangman {
  constructor() {
    this.words = ["PERRO", "GATO", "AHORCADO", "PIRATA", "CASTILLO", "PONZOÑA", "PONZOÑOSO", "TUBERCULOSIS"];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

   getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];;
  }

  checkIfLetter(keyCode) {
    return ((keyCode > 64 && keyCode < 91) || keyCode == 186);
  }

  checkClickedLetters(key) {
    return this.letters.indexOf(key) == -1;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    return this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft == 0;
  }

  checkWinner() {
    return this.secretWord.length == this.guessedLetter.length;
  }

  checkCorrectLetter(letter) {
    return this.secretWord.includes(letter);
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hCanvas = new HangmanCanvas(hangman.secretWord);
  hCanvas.createBoard();
};

document.onkeydown = (e) => {
  if(!hangman.checkGameOver() && !hangman.checkWinner()) { 
    gameLoop(e);
  }
};

function gameLoop(e) {
  let key = e.key.toUpperCase();
  let code = e.keyCode;
  if(hangman != undefined) {
    console.log("Code", code)
    if(hangman.checkIfLetter(code)) { // The char is a letter
      console.log("Is a letter");
      if(hangman.checkClickedLetters(key)) { // Letter has not been already clicked
        console.log("It is a new letter"); 
        hangman.letters.push(key); // Add to the letters array

        if(hangman.checkCorrectLetter(key)) { // The letter clicked belongs to the secret word

          for(var i = 0; i < hangman.secretWord.length; i++){
            if(hangman.secretWord[i] === key) {
              hCanvas.writeCorrectLetter(i);
              if(hangman.addCorrectLetter(i)) hCanvas.winner();
            }
          }

        } else { // The letter is not correct
          hCanvas.drawHangman(hangman.errorsLeft);
          hCanvas.writeWrongLetter(key, hangman.errorsLeft);
          if(hangman.addWrongLetter(key)) hCanvas.gameOver();
        }
      }
    }
  }
}
