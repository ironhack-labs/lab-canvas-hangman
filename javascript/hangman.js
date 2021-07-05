class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.wrongedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
      const len = this.words.length
      const random = Math.floor(Math.random() * len)

      return this.words[random]
  }

  checkIfLetter(keyCode) {
    return String.fromCharCode(keyCode).match(/[A-Z]/) ? true : false
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
      for(let i = 0 ; i < this.secretWord.length ; i++){
        if(this.secretWord.toUpperCase()[i] === letter){
          this.guessedLetters += letter
        }
      }
  }

  addWrongLetter(letter) {
    this.wrongedLetters += letter
    return this.errorsLeft--
  }

  checkGameOver() {
    return !(this.errorsLeft > 0)
  }

  checkWinner() {
    return this.guessedLetters.split('').sort().join('') === this.secretWord.toUpperCase().split('').sort().join('') 
  }
}

let hangman;
const startGameButton = document.getElementById('start-game-button');


if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    
    document.addEventListener('keydown', keydownFun)

  });
}
  
const keydownFun = function(event){
  if(!hangman.checkIfLetter(event.keyCode)) return 

  const letter = String.fromCharCode(event.keyCode)
  const secretW = hangman.secretWord.toUpperCase().split('')

  if(!hangman.checkClickedLetters(letter)) return

  hangman.letters.push(letter)
  
  if(secretW.includes(letter)){

    hangman.addCorrectLetter(letter)

    for(let i = 0 ; i < secretW.length ; i++){
      if(secretW[i] === letter){
        hangmanCanvas.writeCorrectLetter(i)
      }
    }
   
    if(hangman.checkWinner()){
      hangmanCanvas.winner()
      document.removeEventListener('keydown', keydownFun)
      return 
    } 
  }
  else{

    hangman.addWrongLetter(letter)
    hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)
    hangmanCanvas.drawHangman(hangman.errorsLeft)

    if(hangman.checkGameOver()){
      hangmanCanvas.gameOver()
      document.removeEventListener('keydown', keydownFun)
      return
    } 
  }
}


