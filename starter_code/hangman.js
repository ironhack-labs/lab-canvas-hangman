let hangman;

class Hangman {
  constructor() {
    this.words = ['capucha','foca','laboratorio','termómetro','ambulancia','ambulancia', 'reputación', 'cultura', 'boca', 'cereales','terremoto', 'contrato', 'jamón'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) return true;
    return false;
  }

  checkClickedLetters(key) {
    if(this.letters.includes(key)) return false;
    return true;
  }

  addCorrectLetter(i) {
    if(this.secretWord.includes(i)) this.guessedLetter += i;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
    this.checkGameOver()
  }

  checkGameOver() {
    if(this.errorsLeft == 0) return true;
    return false;
  }

  checkWinner() {
    let counter = 0;
    for(let i = 0; i < this.secretWord.length; i++){
      if(this.guessedLetter.includes(this.secretWord[i])) counter++;
    }
   
    if(counter === this.secretWord.length) return true;

    return false
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};