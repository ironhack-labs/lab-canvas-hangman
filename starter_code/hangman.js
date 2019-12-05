let hangman;

class Hangman {
  constructor() {
    this.words = ['avocado', 'banana', 'cranberry', 'dragon', 'epic', 'food', 'grow', 'hippopotamus'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    let selectedWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = selectedWord;
    return this.words[selectedWord];
  }

  checkIfLetter(keyCode) {
    // 65 to 90 -> a to z
    return (keyCode >= 65 && keyCode <= 90);
  }

  checkClickedLetters(key) {

    // converting letters to numbers
    let alphabet = "abcdefghijklmnopqrstuvxwyz";
    let letterToNumber = alphabet.indexOf(key) + 65;

    // check if it is a letter



    let returnedLetter = this.checkIfLetter(key)
    return (!this.letters.includes(key));
  }

  addCorrectLetter(i) {
    // let word = 'ironhack';
    this.guessedLetter += this.secretWord[i].toUpperCase();
    // this.guessedLetter += word[i];


    // let alphabet = "abcdefghijklmnopqrstuvxwyz";
    // let convertedLetter = alphabet[i - 65];
    // console.log(convertedLetter);
    // if (this.secretWord.includes(convertedLetter)) {
    //   this.guessedLetter += convertedLetter;
    // }
    // // checar se existe na palavra
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    return this.checkGameOver();
  }

  checkGameOver() {
    return (this.errorsLeft === 0);
  }

  checkWinner() {
    let count = 0;
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.guessedLetter.includes(this.secretWord[i])) {
        count += 1;
      }
    }
    return (count === this.secretWord.length);
  }

}

// hangman = new Hangman();
// console.log(hangman.addCorrectLetter(1));

// document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };