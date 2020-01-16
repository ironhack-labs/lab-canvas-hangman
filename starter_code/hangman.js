let hangman;
let hangmanCanvas

class Hangman {
  constructor() {
    this.words = [
      'javascript', 'diego', 'ironhack'
    ]
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord() {
    let randomNumber = Math.floor(Math.random() * this.words.length)
    this.secretWord = this.words[randomNumber]
    return this.words[randomNumber]
  }

  checkIfLetter(keyCode) { //Checar si lo clicekado fue una letra
    if( keyCode >= 65 && keyCode <= 90 ) {
      return true
    }
    else {
      return false
    }
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }

  addCorrectLetter(i) {
    let letter = this.secretWord.split('')
    this.guessedLetter += letter[i].toUpperCase()
  }

  addWrongLetter(letter) {
    this.errorsLeft --
    if(!this.letters.includes(letter)) this.letters.push(letter)
  }

  checkGameOver() {
    if(this.errorsLeft <= 0) return true
    return false
  }

  checkWinner() { 
    if(this.secretWord.length === this.guessedLetter.length) return true
    return false
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
  console.log(hangman.secretWord);
  
  document.onkeydown = (e) => {
    if(hangman.checkIfLetter(e.keyCode)){               //Checar si lo clicekado fue una letra
      if(hangman.secretWord.includes(e.key)){           //Checar si la letra esta en la palabra
        let index = hangman.secretWord.indexOf(e.key)   // sacar la posicion donde esta esa letra
        hangmanCanvas.writeCorrectLetter(index, e.key)
        hangman.addCorrectLetter(index)                 //Agregarla al string guessedLetter
        console.log(hangman.checkWinner());
        if(hangman.checkWinner()){
          console.log('Ganador');
          hangmanCanvas.winner()
        }
      } else {
        hangman.addWrongLetter(e.key)                   //Agregarla al arreglo global de letras
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
        if(hangman.checkGameOver()){ // Checar si ya perdiste
          console.log('Perdiste') //llamar a gameover
          hangmanCanvas.gameOver()
        } 
      }
    }
  };
};

