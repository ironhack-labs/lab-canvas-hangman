let hangman;

class Hangman {
  
  constructor() {
    this.words = ["casa", "perro", "constancia", "marino", "animal", "adivinanza", "javascript"];
    this.secretWord = "";
    this.letters = ['C','A','O'];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ?  true : false;
  }

  checkClickedLetters(key) {
    // this.letters.forEach( letter =>{
    //   console.log(letter);
    //   return letter === key ? false : true;
    // })
    return this.letters.includes(key) ? false : true;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    return this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length;
  }

}

hangman = new Hangman();

console.log(hangman.checkClickedLetters('C'));
console.log(hangman.checkWinner());
//console.log();

// document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };
