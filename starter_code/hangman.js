let hangman
let hangmanCanvas

class Hangman {
  constructor() {
    this.words = [
      'response',
      'excavate',
      'minority',
      'describe',
      'buttocks',
      'campaign',
      'proclaim',
      'question',
      'displace',
      'slippery',
      'necklace',
      'complete',
      'sandwich',
      'generate',
      'economic',
      'detector',
      'feminist',
      'particle',
      'baseball',
      'property'
    ];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 3;
  }

  getWord() {
    let randomNum = Math.floor(Math.random() * this.words.length);
    return this.secretWord = this.words[randomNum].toUpperCase();
  }
  getLetters(){
    this.letters = this.secretWord.split("");
    console.log(this.letters)
  } 
  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      true
    } else {
      false
    } 
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      false
    } else {
      true
    }
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()
    this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      true
    } else {
      false
    }
  }

  checkWinner() {
    for (var j = 0; j < this.secretWord.length; j++) {
      if (this.guessedLetter.indexOf(this.secretWord[j]) === -1) {
        false
      } else {
        true
      }
    }
  }
}



document.getElementById('start-game-button').onclick = function() {
  hangman = new Hangman()
  hangman.secretWord = hangman.getWord()
  hangman.getLetters();
  
  hangmanCanvas = new HangmanCanvas(hangman.secretWord, hangman.errorsLeft)
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
  hangmanCanvas.drawHangman()
  
}

document.onkeydown = function(e) {
  if (hangman !== undefined && hangmanCanvas.start === 0) {
    if (hangman.checkIfLetter(e.keyCode)) {
      let up = e.key.toUpperCase()
      if (hangman.checkClickedLetters(up)) {
        hangman.letters.push(up)
        if (hangman.secretWord.indexOf(up) >= 0) {
          hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(up))
          hangman.addCorrectLetter(hangman.secretWord.indexOf(up))
          if (hangman.checkWinner()) {
            hangmanCanvas.winner()
          }
        } else {
          hangman.addWrongLetter()
          hangmanCanvas.writeWrongLetter(up, hangman.errorsLeft)
        }
      }
    }
  }
}