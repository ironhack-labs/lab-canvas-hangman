let hangman;

class Hangman {
   constructor() {
      this.words = [
        'PERRO',
        'GORRA',
        'ACEITE',
        'IRONHACK',
        'COMPUTADORA'
      ];
      this.secretWord = '';
      this.lettersClick = [];
      this.guesedLetter = '';
      this.errorsLeft = 10;
   }
   getWord() {
    let wordsIndex = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[wordsIndex]
    return this.secretWord
  }
    checkIfLetter(keyCode) {
    const isLetter = ( (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) )
    return isLetter
   }
   checkClickedLetters(key) {
    
  }
  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i]
  }
  addWrongLetter(letter) {

  }

  checkGameOver() {
    return (this.errorsLeft === 0)
  }

  checkWinner() {
    if(this.secretWord.length === this.guesedLetter.length){
      return true;
    } else {
      return false;
    }

  }
}


  


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
