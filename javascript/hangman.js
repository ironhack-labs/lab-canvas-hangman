class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let palabra = this.words[Math.round(Math.random() * this.words.length - 1)];
    return palabra;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
     this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    if (!this.letters.includes(letter)) {
      this.errorsLeft -= 1;
       this.letters.push(letter);
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      console.log("The game continues")
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    let palabra = this.secretWord.split("").sort().join();
    let letras = this.guessedLetters.split("").sort().join();

    if (palabra === letras) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();

  });
}

document.addEventListener('keydown', event => {
  let keyCode = event.keyCode;
  let key = event.key;
  let arraySecretWord=hangman.secretWord.split("");
  
  if(!hangman.checkClickedLetters(key)){
    return
  }
  if(hangman.checkIfLetter(keyCode)){
    if(arraySecretWord.indexOf(key)>=0){
      let index=arraySecretWord.indexOf(key); 
      while (index >= 0){
        hangman.addCorrectLetter(key);
        hangmanCanvas.writeCorrectLetter(index); 
        index=arraySecretWord.indexOf(key, index+1);

      }   
    }else{
      hangman.addWrongLetter(key);
      hangmanCanvas.writeWrongLetter(key,hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }
  if (hangman.checkWinner()){
    hangmanCanvas.winner();
  } else if(hangman.checkGameOver()){
    HangmanCanvas.gameOver();
  }
  
});
