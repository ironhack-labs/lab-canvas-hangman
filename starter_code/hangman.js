let hangman;

class Hangman {
  constructor() {
    this.words = ['mochon','lolaxo','fridonguis','bonguis'],
    this.secretWord = '',
    this.letters = [],
    this.guessedLetter = '',
    this.errorsLeft = 10
}
getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    return this.secretWord
}

  checkIfLetter(keyCode) {
    this.letters.push(keyCode)
    if (keyCode >= 65 || keyCode <= 91){ //de a a Z, sin ñ
      return true
    } else return false
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key) //puse ! porque me marcaba jasmine
  }

  addCorrectLetter(i) {
    this.guessedLetter+=i //espero que se concatenen por ser strings
  }

//   addWrongLetter(letter) {

//   }

//   checkGameOver() {

//   }

//   checkWinner() {

//   }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
