class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    if(keyCode>=65 && keyCode<=90){
      return true
    }else{
      return false
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false 
    } else {
      this.letters.push(letter);
      return true 
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    this.letters.push(letter)
  }

  checkGameOver() {
    if(this.errorsLeft > 0){
      return false
    }else{
      return true 
    }
  }

 
  checkWinner() {
    const laPalabra = this.secretWord.split("").sort("").join("")
    const loQueAdivino = this.guessedLetters.split("").sort().join("")
    if(laPalabra===loQueAdivino){
      return true
    }else {
      return false
    }
  }
}
//duda , es comparar un string con otro string ? o es hacer un ciclo para hacer un arreglo y comparar ?

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
    // console.log(hangmanCanvas.drawLines)
  });
}

document.addEventListener('keydown', event => {
  const esLetra = hangman.checkIfLetter(event.keyCode)
  console.log(esLetra)
});
