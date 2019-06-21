
class Hangman {
  constructor() {
    this.words = ['BATATA', 'REPOLHO', 'ENERGETICO'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  
  getWord() {
    return this.secretWord = this.words[Math.round(Math.random() * 2)];
  };
  
  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  };
  
  checkClickedLetters (key) {
    if (this.letters.includes(key)) {
      return false;
    } else if (this.secretWord.toUpperCase().includes(key)) {
      let ind = this.secretWord.indexOf(key);
      this.addCorrectLetter(ind);
    } else {
      // this.letters.push(key);
      // addWrongLetter(key);
      return true;
    }
  };
  
  addCorrectLetter (i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    };
    
    addWrongLetter (letter) {
      this.letters.push(letter);
      this.errorsLeft--;
    };
    
    checkGameOver () {
      if (this.errorsLeft === 0) {
        return true;
      } else {
        return false;
      }
    };
    
    checkWinner () {
      let sorted = this.guessedLetter.split('').sort().join('');
      let sortedOriginal = this.secretWord.split('').sort().join('');
      if(sorted === sortedOriginal) {
        return true;
      } else {
        return false;
      }
      
    };
  }
  
  
  
  let hangman;
  let hangmanCanvas;
  
  document.getElementById('start-game-button').onclick = function () {
    hangman = new Hangman();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
    console.log(hangman)
  };
  
  
  document.onkeydown = function (e) {
    if(hangman.checkClickedLetters(e.key)) {
      hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
    }
    console.log(e.key)
  };
  
  