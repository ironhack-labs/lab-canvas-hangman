class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorLeft = '0;'

  }

  pickWord() {
    let gameWord = this.words[Math.floor(Math.random() * this.words.length)];
    return gameWord;
  }

  checkIfLetter(keyCode) {
    if(keyCode >=  65 && keyCode <= 90){
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    if(this.letters.indexOf(letter) === -1){
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    if(this.secretWord.indexOf(letter) === -1){
      this.addWrongLetter(letter);
      return false;
    }else{
      this.letters.push(letter);
      this.guessedLetters += letter;
      return true;
    }
  }

  addWrongLetter(letter) {
    this.errorLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorLeft > 0){
      return false;
    }
    return true;
  }

  checkWinner() {
    let winner;
    for(let i = 0; i < this.guessedLetters.length; i++){
      if(this.secretWord.indexOf(this.guessedLetters[i]) != -1){
        winner += this.secretWord.match(this.guessedLetters[i].length);
      }
    }
    if(this.secretWord.length === winner){
      return true;
    }
    return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    startGameButton.addEventListener("click", (event) => {
      hangman = new Hangman([
        "node",
        "javascript",
        "react",
        "miami",
        "paris",
        "amsterdan",
        "lisboa",
      ])
    })
  });
}

document.addEventListener('keydown', event => {
  let letterKey = event.keyCode;
  let letter = event.key;
  console.log(hangman.secretWord);

  if(hangman.checkIfLetter(letterKey)){
    if(!hangman.checkClickedLetters(letter)){

        if(hangman.addCorrectLetter(letter)){
          hangmanCanvas.writeCorrectLetter(letter);
        }else{
          hangmanCanvas.writeWrongLetter(letter, hangman.errorLeft);
        }
      }else{
        hangmanCanvas.writeWrongLetter(letter, hangman.errorLeft);
      }
    }else{
    console.log("Letter already clicked. Please choose another letter.");
  }
  }else{
  console.log("Please choose a letter.");
});
