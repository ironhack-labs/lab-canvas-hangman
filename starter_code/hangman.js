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
    this.checkWinner()
  }
  
  addWrongLetter() {
    this.errorsLeft--
    this.checkGameOver()
  }
  
  checkGameOver() {
    const gameOver = this.errorsLeft === 0
    if (gameOver) setTimeout(() => canvas.gameOver(), 1500)
    return gameOver ? true : false
  }

  checkWinner() {
    const winner = this.secretWord.length === this.guessedLetter.length
    if (winner) setTimeout(() => canvas.winner(), 1500)
    return winner ? true : false

  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord())
  canvas.createBoard()
  canvas.drawLines()
};

document.onkeydown = function (e) {
  if (!hangman.checkGameOver() && !hangman.checkWinner()) {
    if (hangman.checkIfLetter(e.which)) {
      if (hangman.checkClickedLetters(e.key)) {
        if (hangman.secretWord.includes(e.key)) {
          // correct letter
          const indexes = [];

          for(let i = 0; i < hangman.secretWord.length; i++) {
            if (hangman.secretWord[i] === e.key) indexes.push(i);
          }

          indexes.map(index => {
            hangman.addCorrectLetter(index);
            canvas.writeCorrectLetter(index);
          })

        } else {
          // wrong letter
          hangman.addWrongLetter();
          canvas.writeWrongLetter(e.key, hangman.errorsLeft);
          canvas.drawHangman(canvas.hangmanShape[9-hangman.errorsLeft])
        }

      } else {
        alert('Repeated letter. Enter a diferent letter.')
      }
    }
  }
};