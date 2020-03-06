class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
    // console.log(chosedWord);
    // this.secretWord = chosedWord;
    // return chosedWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    // let x = keyCode;
    if (keyCode >= 65 && keyCode <= 90 ) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if ( this.letters.includes(letter) ) {
      return false;
    } else {
      this.letters.push(letter);
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here  
    // let tester = this.secretWord.split('');
    // if ( tester.includes(letter) ) {
      // let idx = this.secretWord.indexOf(letter);
      // tester[idx] = letter;
      // this.guessedLetters = tester.join('');
      this.guessedLetters += letter;
      this.letters.pop();
      this.checkWinner();
    }
  

  addWrongLetter(letter) {
    // ... your code goes here
    // if ( !this.secretWord.includes(letter) ) {
      this.errorsLeft -= 1;
      this.checkGameOver();
    // }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft == 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
  let sum = 0;
  let tester = this.secretWord.split('');
  // let tester2 = this.guessedLetters.split('');
  tester.forEach(item => {
    if (this.guessedLetters.includes(item)) {
      sum += 1;
    }
  })
  console.log(sum, this.secretWord.length)
  if (sum == this.secretWord.length){
    return true;
  } else {
    return false;
  }
  // let newArr = removeDuplicates(tester.sort(( a , b) => a - b));
  // function removeDuplicates(arr) {
  //   return arr.filter((a, b) => arr.indexOf(a) === b);
  // };

  
  // let newArr2 = tester2.sort(( a , b) => a - b);
  // console.log(newArr2, newArr);
  
  // if (newArr.length == newArr2.length) {
  //   return true;
  // } else {
  //   return false;
  // }

}
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key)
        hangman.secretWord.split('').forEach((item, idx) => {
          if(item === event.key) {
            hangmanCanvas.writeCorrectLetter(idx);
          }
        })
      } else {
        hangman.addWrongLetter(event.key)
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    }
  }
 });