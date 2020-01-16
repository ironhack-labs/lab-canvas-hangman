let hangman;
let hangmanCanvas;

const minimumLetterRange = 65
const maximumLetterRange = 90

class Hangman {
  constructor() {
    this.words = ['Artanis', 'Batman', 'Luis']
    this.secretWord = ''
    this.guessedLetter = ''
    this.letters = []
    this.errorsLeft = 10
  }
  getWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length)
    let secretWord = this.words[randomIndex]
    return secretWord
  }
  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }
  checkClickedLetters(key) {
    if (this.letters.includes(key) == false) {
      return true
    } else {
      return false
    }
  }
  addCorrectLetter(i) {
    //addCorrectLetter. Adds to the guessedLetter variable the letter 
    //that was pressed. Also, it should check if the user wins.
    //pressedKey.push(element)
    /*De acuerdo al ejercicio, me pide que agregue la letra que fue
    presionada a guessedLetter y considero que eso es lo que 
    estoy haciendo aquí pues sumo guessedLetter mas la letra que
    fue presionada, es decir i; sin embargo, Jazmine no me lo marca.
    Ahora, en Jazmin dice que debo de recibir un número y que como
    ejemplo, espera que 1 sea igual a R, eso la verdad no me queda
    claro. Debía de convertir el valor númerico correspondiente a la
    letra en el keyboard a su letra?*/
    this.guessedLetter += i
    this.checkWinner()
  }
  addWrongLetter(letter) { //Aquí creo que el parametro letter viene
    // de más. No lo tuve que utilizar.
    this.errorsLeft -= 1
    this.checkGameOver()
  }
  checkWinner() {
    /*En esta iteración me pide que revise si guessedLetter es 
    igual a secretWord, de ser cierto, regresa true, de ser falso
    pues regresa falso. Sin embargo, me marca la segunda como 
    correcta y la primera no me la marca. No entiendo porque pues en
    caso de que fuesen iguales, debería de arrojarme true.*/
    return this.guessedLetter === this.secretWord ? true : false
  }
  checkGameOver() {
    return this.errorsLeft == 0 ? true : false
  }
}



// }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
