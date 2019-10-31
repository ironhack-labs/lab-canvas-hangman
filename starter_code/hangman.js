let hangman;

class Hangman {
  constructor() {
      this.words = ['Hola', 'Como', 'Gato', 'Perro'];
      this.secretWord = '';
      this.letters =  [];
      this.guessedLetter = '';
      this.errorsLeft = 10;
  }

  getWord() {
    let randomNum = Math.floor(Math.random() * 6);
    let word = this.words[randomNum]
    return word;
  }

  checkIfLetter(keyCode) {
    if((keyCode > 64 && keyCode < 91) || (keyCode > 97 && keyCode < 123))  {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
      this.guessedLetter = this.guessedLetter + i;
  }

  addWrongLetter(letter) {
      this.errorsLeft--;
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    //if()
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
