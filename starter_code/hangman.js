let hangman;

class Hangman {
  constructor() {
    this.words = ["Tomasz", "Karin", "Marco"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;

  }

  getWord() {
    let secret = this.words[Math.floor(Math.random()*this.words.length)];
    this.secretWord = secret;
    return secret;

  }

  checkIfLetter(keyCode) {
    if((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
    return true;
    else return false;
  }

  checkClickedLetters(key) {
    if(this.letters.indexOf(key) === -1) return true;
    else return false
  }

  addCorrectLetter(i) {
    
    this.guessedLetter += this.secretWord[i].toUpperCase();
      if (this.checkWinner())
        console.log('You won!')
    
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (this.checkGameOver())
      console.log('Game Over!')
  }

  checkGameOver() {
    if(this.errorsLeft === 0) return true;
    else return false;
  }

  checkWinner() {
    let secretLength = this.secretWord.length;
    let guessedLength = this.guessedLetter.length;

    for(let i = 0; i<secretLength; i++){
      //for (let k = 0; k < guessedLength; k++)
        //if(this.secretWord[i] !== this.guessedLetter[k]) return false;
        if(this.guessedLetter.indexOf(this.secretWord[i]) === -1) return false
    } 
    return true;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
