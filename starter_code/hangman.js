let hangman, canvas;

class Hangman {
  constructor() {
    this.words = ['teste', 'teto', 'cachorro', 'dinheiro', 'treta'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  
  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }
  
  checkIfLetter(letter) {
    return letter > 64 && letter < 91 ? true : false;
  }
  
  checkClickedLetters(letter) {
    const notInclude = !this.letters.includes(letter)
    if (notInclude) this.letters.push(letter)
    return notInclude ? true : false;
  }
  
  addCorrectLetter(index) {
    this.guessedLetter += this.secretWord[index].toUpperCase()
    this.checkGameOver()
  }
  
  addWrongLetter() {
    this.errorsLeft--
    this.checkGameOver()
  }
  
  checkGameOver() {
    const gameOver = this.errorsLeft === 0
    return gameOver ? true : false
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetter.length ? true : false
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord())
  canvas.createBoard()
  canvas.drawLines()
};

document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e.which)) {
    if (hangman.checkClickedLetters(e.key)) {
      if (hangman.secretWord.includes(e.key)) {
        // correct letter
        const indexes = [];

        for(let i = 0; i < hangman.secretWord.length; i++) {
          if (hangman.secretWord[i] === e.key) {
            indexes.push(i);
          }
        }

        indexes.map(index => {
          hangman.addCorrectLetter(index);
          canvas.writeCorrectLetter(index);
        })

        if (hangman.checkWinner()) {
          setTimeout(() => canvas.winner(), 2000)
          console.log('ganhou!')
        }

      } else {
        // wrong letter
        hangman.addWrongLetter();
        canvas.writeWrongLetter(e.key, hangman.errorsLeft);
        canvas.drawHangman(canvas.hangmanShape[9-hangman.errorsLeft])

        if (hangman.checkGameOver()) {
          setTimeout(() => canvas.gameOver(), 2000)
          console.log('perdeu!')
        }
      }

    } else {
      alert('Repeated letter. Enter a diferent letter.')
    }
  }
};