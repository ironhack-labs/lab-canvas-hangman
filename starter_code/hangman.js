let hangman;
// console.log('oioioi');

class Hangman {
  constructor() {
    this.words = ['avocado', 'banana', 'cranberry', 'dragon', 'epic', 'food', 'grow', 'hippopotamus'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
    this.wrongLetters = '';
  }

  getWord() {
    let selectedWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[selectedWord];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    // converting letters to numbers
    let alphabet = "abcdefghijklmnopqrstuvxwyz";
    let indexLetter = keyCode - 65;
    let convertedLetter = alphabet[indexLetter];
    console.log(convertedLetter);

    // .toUpperCase()

    // only call the next check if this one is true
    let isLetter = (keyCode >= 65 && keyCode <= 90); 

    if (isLetter) {
      this.checkClickedLetters(convertedLetter);
    }
    // 65 to 90 -> a to z
    return (isLetter);
  }

  checkClickedLetters(key) {
    // check if the letter is already in the array LETTERS
    let isNotIncluded = !this.letters.includes(key);
    if (isNotIncluded) {
      this.letters.push(key);
      this.addCorrectLetter(key);
    }
    return (isNotIncluded);
  }

  addCorrectLetter(key) {
    let isAValidLetter = this.secretWord.includes(key);

    if (isAValidLetter) {
      this.guessedLetter += key;
      this.checkWinner();
    } else {
      this.addWrongLetter(key);
    }
    return (isAValidLetter);
  }

  addWrongLetter(letter) {
    this.wrongLetters += letter;
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

let startGame = document.getElementById('start-game-button');

startGame.onclick = () => {
  hangman = new Hangman();
  hangman.getWord();
  let randomWord = hangman.secretWord;
  hangmanCanvas = new HangmanCanvas(randomWord);
  // hangmanCanvas = new HangmanCanvas('IRONHACK');
  hangmanCanvas.createBoard();
  // hangmanCanvas.drawHangman(1);
  // hangmanCanvas.drawHangman(2);
  // hangmanCanvas.drawHangman(3);
  // hangmanCanvas.drawHangman(4);
  // hangmanCanvas.drawHangman(5);
  // hangmanCanvas.drawHangman(6);
  // hangmanCanvas.drawHangman(7);
  // hangmanCanvas.drawHangman(8);
  // hangmanCanvas.drawHangman(9);
  // hangmanCanvas.drawHangman(10);
  // hangmanCanvas.writeCorrectLetter();
  // hangmanCanvas.writeWrongLetter('GIULIA', 2);
  // hangmanCanvas.writeCorrectLetter(0);
  // hangmanCanvas.writeCorrectLetter(1);
  // hangmanCanvas.writeCorrectLetter(2);
  // hangmanCanvas.writeCorrectLetter(4);
};

document.onkeydown = (e) => {
  console.log(hangman.secretWord);
  if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.keyCode) /*&& hangman.addCorrectLetter(e)*/) {
    console.log('ok');
  } else {
    console.log('nok');
  }
//   if (hangman.checkIfLetter(e) && hangman.checkClickedLetters(e) && hangman.addCorrectLetter(e)) {
//     hangmanCanvas.writeCorrectLetter();
//   } else if (hangman.checkIfLetter(e) && hangman.checkClickedLetters(e)) {
//     hangmanCanvas.writeWrongLetter();
  };


    // call winner
    // this.winner();