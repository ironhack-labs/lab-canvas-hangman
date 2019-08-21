class Hangman {
  constructor(words = ['asd', 'asd', 'asd', 'asd']) {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.wrongLetter = '';
    this.errorsLeft = 10;
    this.getWord();
  }

  getWord() {
    let dice = Math.floor(Math.random() * this.words.length);
    return this.secretWord = this.words[dice].toUpperCase();
    
  }

  checkIfLetter(letterKeyCode, triedLetter) {

    if (letterKeyCode >= 65 && letterKeyCode <= 90) {
      this.checkClickedLetters(triedLetter)
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(triedLetter) {
    let acertouAlguma = false;
    if (this.letters.join('').includes(triedLetter)) {
      return false;
    } else {
      this.letters.push(triedLetter);
      this.secretWord.split('').forEach((eachLetter, eachLetterIndex ) => {
        if (triedLetter === eachLetter) {
          this.addCorrectLetter(eachLetterIndex);
          acertouAlguma = true;
        } else {
          if (this.secretWord.indexOf(eachLetter) === (Number(this.secretWord.length - 1))) {
            if (!acertouAlguma) {
              console.log('triedLetter na chegagem: ' + triedLetter)
              this.addWrongLetter(triedLetter);
            }
          }
        }
      })

      return true;
    }
  }

  addCorrectLetter(indexGuessed) {
    this.guessedLetter += this.secretWord[indexGuessed].toUpperCase();
    hangmanCanvas.writeCorrectLetter(indexGuessed);
    this.checkWinner();

  }

  addWrongLetter(triedLetter) {
    console.log('triedLetter no WrongLetter function: ' + triedLetter)
    this.errorsLeft -= 1;
    this.wrongLetter = triedLetter;

  hangmanCanvas.writeWrongLetter(this.wrongLetter, this.errorsLeft);

    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      console.log('você perdeu');
      hangmanCanvas.gameOver()
      return true;
    } else {
      return false;
    };
  };

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
     console.log('você ganhou')
     hangmanCanvas.winner()
      return true
    } else {
      return false
    }
  }
}

// Iniciate the Game

let hangman, hangmanCanvas;

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
};

document.onkeydown = function (e) {
  if (hangman) {
    hangman.checkIfLetter(e.keyCode, e.key.toUpperCase());
    
     console.log('palavra secreta: ' + hangmanCanvas.secretWord)
     console.log('Letras tentadas: ' + hangman.letters)
     console.log('Letras adivinhadas: ' + hangman.guessedLetter)
     console.log('Erros restantes: ' + hangman.errorsLeft)

  } else {
   alert('Start the Game First')
  }
};
