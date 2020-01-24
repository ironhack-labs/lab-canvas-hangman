let hangman;

class Hangman {
  constructor(words, secretWord, letters, guessedLetter, errorsleft) {
    this.words = ['bonjour', 'bonsoir', 'baguette', 'croissant'];
    this.secretWord = 'BONSOIR';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    let min = 0;
    let max = this.words.length;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(random);
    return this.words[random];
  }

  checkIfLetter(keyCode) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (alphabet.includes(keyCode) === true) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key) === false ) {
      return true;
    } else {
      return false;
    }
    letters.push(key);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord.toUpperCase().charAt(i);
  }

  addWrongLetter(letter) {
    if (this.secretWord.includes(letter) === false) {
      this.errorsLeft -= 1; 
    }
  }

  checkGameOver() {
    return this.errorsLeft == 0 ? true : false ; 

  }

  checkWinner() {
    let total = this.secretWord.length;
    let count = 0;
    for (let i = 0 ; i < total ; i++ ) {
      if(this.guessedLetter.includes(this.secretWord.charAt(i)) == true){ 
        count ++;
        console.log(count)
      }
    }
    return count == total ? true : false;
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
