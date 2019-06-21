
// function Hangman() {
class Hangman {
  constructor() {
    this.words = [
      "ironhack",
      "webdev",
      "html",
      "javascript",
      "cascading",
      "traversing",
      "debuging",
      "buging",
      "nick",
      "programming",
      "lunch",
      "brito"];
    // this.secretWord = this.words[0];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }
  checkIfLetter(value) {
    return value.length === 1 && value.match(/[a-z]/i);
    // will return true or false
  }
  checkClickedLetters(value) {
    if (this.checkIfLetter(value)) {
      return this.letters.includes(value);
      // will check if letter was already picked
    } else {
      return false;
      // value was not a letter
    }
  }
  checkGameOver() {
    this.errorsLeft--;
    if (this.errorsLeft === 0) {
      let body = document.getElementsByTagName('body')[0];
      let image = document.createElement('img');
      image.setAttribute('style', 'position:absolute; top:150px; left:150px; width: 75%; ');
      image.src = "images/gameover.png";
      body.appendChild(image);
      let restartButton = document.createElement('button');
      restartButton.setAttribute('style', 'position:absolute; bottom: 50px; left: 400px;')
      restartButton.setAttribute('id', 'restart-button');
      restartButton.innerHTML = "Restart Game"
      restartButton.onclick = function () {
        location.reload();
      }

      body.appendChild(restartButton);
    }
  }
  checkWinner() {
    let secret = [...this.secretWord];
    let secretArray = secret.filter(function (item, pos) {
      return secret.indexOf(item) == pos;
    })

    return this.guessedLetter.length === secretArray.length;
  }
  addCorrectLetter(value) {
    if (this.checkWinner()) {
      console.log(`hi`)
    }
    if (this.secretWord.includes(value)) {
      return true;

    }

  }
}



