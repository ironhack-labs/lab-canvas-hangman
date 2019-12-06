let hangman;

class Hangman {
  constructor() {
    this.words = ["luis","carlos","pedrito"],
    this.secretWord = this.getWord(),
    this.letters = [],
    this.guessedLetter = "",
    this.errorsLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    return (keyCode <= 90 && keyCode >= 65)
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.letters.push(this.secretWord[i]);
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft --;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    let letters = this.guessedLetter.toLowerCase().split("");
    let result = false;
    let count = 0;
    letters.forEach( e => {
      if (this.secretWord.includes(e)) {
        result = true;
        count ++;
      };
    })
    if (count != this.secretWord.length) {
      result = false;
    }
    return result;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
};

document.onkeydown = (e) => {
  if (hangman.checkIfLetter(e.keyCode)) {
    if (hangman.checkClickedLetters(e.key)){
      if (hangman.secretWord.includes(e.key)) {
        hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
        console.log(e.key)
        if (hangman.checkWinner()) {
          console.log("You win") //temporary
        }
      } else {
        hangman.addWrongLetter(e.key);
      }
    }
  }
}
