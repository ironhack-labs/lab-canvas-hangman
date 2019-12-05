let hangman;

class Hangman {
  constructor() {
    this.words = ['introduction','body','conclusion'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.wrongLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90)
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    // checkWinner();
  }

  addWrongLetter(letter) {
    this.wrongLetter += letter;
    this.errorsLeft -= 1;
    this.checkGameOver();
  }

  checkGameOver() { 
    return (this.errorsLeft === 0)
  }

  checkWinner() {
    let arraySecretWord = [...this.secretWord];
    let arrayGuessedLetter = [...this.guessedLetter];
    const uniquifyArray = (inputArray) => {
      let uniqueArray = [];
      for (let i = 0; i < inputArray.length; i += 1){
        if (uniqueArray.indexOf(inputArray[i]) === -1){
          uniqueArray.push(inputArray[i]);
        }
      }
      return uniqueArray;
    }
    
    let orderedArraySecretWord = uniquifyArray(arraySecretWord).sort()
    let orderedArrayGuessedLetter = uniquifyArray(arrayGuessedLetter).sort()
    return orderedArraySecretWord.toString() == orderedArrayGuessedLetter.toString()
  }
} 

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
};

document.onkeydown = (e) => {
//e is the EVENT while e.key is the precise key that was called, e.keycode is the keycode
  if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key.toUpperCase())) {
    hangman.letters.push(e.key.toUpperCase());
    let firstPosition = hangman.secretWord.toUpperCase().indexOf(e.key.toUpperCase());
    if (firstPosition >= 0){
      hangman.addCorrectLetter(firstPosition);
      hangmanCanvas.writeCorrectLetter(e.key.toUpperCase());
      }
    else {
      hangman.addWrongLetter(e.key.toUpperCase());
      hangmanCanvas.writeWrongLetter();
      hangmanCanvas.drawHangman();
    }
  }
};


// TEST DEBUG 

// const hangman2 = new Hangman ();

// hangman2.secretWord = 'IRONHACK';
// hangman2.guessedLetter = 'KHARCNIO';
// console.log(hangman2);

// hangman2.checkWinner();