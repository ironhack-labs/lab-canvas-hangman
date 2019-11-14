let hangman;
class Hangman {
 constructor() {
 this.words = ["lentes" ,"carro " ,"jazz", "limon" ];
 this.secretWord = "";
 this.letters = [];
 this.guessedLetter = "";
 this.errorsLeft = 10;
 this.letters
 }
  getWord() {
    let chosenWord = this.words[Math.floor(Math.random()*this.words.length)];
    return chosenWord;
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90);
  }

  checkClickedLetters(key) {
    if(this.letters.indexOf(key) != -1) {
      return false;
    }
    return true;
  }

  checkWinner() {
    if(this.guessedLetter.length == this.secretWord.length){
      return true;
    }

    return false;
  }

  addCorrectLetter(letter) {
    this.guessedLetter += "letter";
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
  }

  checkGameOver() {
    return (this.errorsLeft === 0);
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()
};

document.onkeydown = (e) => {

};

