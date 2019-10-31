let hangman;

class Hangman {
  constructor() {
    this.words = ['a', 'aaa', 'aaaaa', 'aaaaaaa', 'baaaaaa'];
    this.secretWord = 'Patataflaca';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  getWord() {
      return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {
    // 65 90 // 97 122
    if (keyCode<65){
      return false
    } else if (keyCode>90){
      return false
    }
    return true
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)){
      return false
    } else {
      return true
    }
  }
  addCorrectLetter(i) {
    let arrStrings = this.secretWord.split('');
    this.guessedLetter += arrStrings[i].toUpperCase();
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft -=1;
  }

  checkGameOver() {
    if (this.errorsLeft == 0){
      return true
    } else{
      return false
    }
  }

  checkWinner() {
    if (this.secretWord === this.guessedLetter) {
      return true
      } else{
        return false
      }  
  } 
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  let canvas = new HangmanCanvas();
  canvas.createBoard();
  canvas.drawHangman();
  canvas.drawLines();
};

document.onkeydown = (e) => {

};
