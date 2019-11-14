let hangman;

class Hangman {
   constructor() {
    this.words = ['casa','perro','silla'];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  
   }

  getWord() {
    `Returns a random word from our array words.`
    let secretWord = this.words[Math.floor(Math.random()*this.words.length)].toUpperCase();
    this.secretWord = secretWord;
    return secretWord;
  }

  checkIfLetter(keyCode) {
    `Checks if the key the user has typed is a letter.`
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)){
      return true
    }
    return false
  }
  
  checkClickedLetters(key) {
    `Checks if the pressed letter has already been pressed 
    and returns true if it was not or false in the opposite case.`

    if (this.letters.indexOf(key) != -1){
      return false;
    }
    return true;
  }

   addCorrectLetter(i) {
    let letterGuessedFromSecret = this.secretWord.split('');
    this.guessedLetter += letterGuessedFromSecret[i].toUpperCase();
   }

   addWrongLetter(letter) {
    this.errorsLeft -= 1
   }

  checkGameOver() {
    `Returns a boolean value, true if the users lose, and false in any other case.`
    if (this.errorsLeft == 0){
      return true;
    }
    return false;
  }

  checkWinner() {
    `Checks if the user wins and return a boolean value.`
    let ans = false;
    for (let i = 0; i < this.secretWord.length; i++){
      if (this.guessedLetter.indexOf(this.secretWord[i]) == -1){
        ans = false;
        break;
      } else {
        ans = true;
      }
    }
    return ans;
  }

 }

document.getElementById('start-game-button').onclick = () => {
  
  hangman = new Hangman();
  let wordToPlay = hangman.getWord();
  // console.log(wordToPlay)
  hangmanCanvas = new HangmanCanvas(wordToPlay);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
  
};

document.onkeydown = (e) => {
  if (!hangman.checkGameOver() && !hangman.checkWinner()){
    if (hangman.checkIfLetter(e.keyCode)){
      let letter = String.fromCharCode(e.keyCode);
      if (hangman.checkClickedLetters(letter)){
        if (hangman.secretWord.includes(letter)){
          let index = hangman.secretWord.indexOf(letter);
          while (index != -1 && index < hangman.secretWord.length) {
            hangman.addCorrectLetter(index);
            hangmanCanvas.writeCorrectLetter(index);
            index = hangman.secretWord.indexOf(letter, index + 1);
          }
          if (hangman.checkWinner()) {
            // hangmanCanvas.winner();
          }
        } else {
          hangman.addWrongLetter(letter);
          hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
          if (hangman.checkGameOver()) {
            // hangmanCanvas.gameOver();
          } else {
            // hangmanCanvas.drawHangman(hangman.errorsLeft);
          }
        }
        hangman.letters.push(letter);
      } else {
        alert("Choose another letter")
      }
    }
  }
  
};
