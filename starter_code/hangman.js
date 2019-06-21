class Hangman {
  constructor() {
    this.words = ['javascript', 'baleia', 'elefante'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(key) {
    console.log(key)
    if(key >= 65 && key <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(str) {
    if(this.letters.includes(str)) {
      return false;
    } else {
      return true;
    }
  }

  checkGameOver() {
    if(this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
    
  }

  checkWinner() {
     let rightWord = this.secretWord.split('').sort().join('');
     let checkWord = this.guessedLetter.split('').sort().join('');
     if (rightWord === checkWord) {
       return true;
     } else return false;
  }

  
  addCorrectLetter(i) {
    return this.guessedLetter += this.secretWord[i].toUpperCase();
    
  }

  addWrongLetter(key) {
      let checkError = this.secretWord.split('');
      if(!checkError.includes(key)) {
        return this.errorsLeft -= 1;
      } else {
          return this.errorsLeft;
      }
  } 
  
}

document.getElementById('start-game-button').onclick = function () {
  const hangman = new Hangman();
  hangman.getWord();
  const canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
};


document.onkeydown = function (e) {
};
