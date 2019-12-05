let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ['carro', 'fruta', 'casa', 'bruxa', 'ironhack', 'Heitor', 'JOC'];
    this.secretWord = Math.floor(Math.random() * this.words.length);
    this.letters =[]
    this.guessedLetter = ""
    this.errorsLeft = 10
}

  getWord() {
    return "";
  }

  checkIfLetter(keyCode) {
    if(typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90){
      return true;
    } else{
      return false;
    }
  
  }

  checkClickedLetters(key) {
    if(typeof key === 'string' &&  !this.letters.includes(key)){
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase(); 
  }

  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft -= 1;
    }
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    let test = "";
    for(let i = 0; i < this.secretWord.length; i += 1){
      for(let j = 0; j < this.guessedLetter.length; j += 1){
        if(this.secretWord[i] === this.guessedLetter[j]){
          test += this.secretWord[i];
        }
      }
    }
    if(test === this.secretWord){
      return true;
    } else{
      return false;
    }
    }

  }


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines()
};



document.onkeydown = (e) => {

};


