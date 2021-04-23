class Hangman {
  constructor(words) {
      // lqoeuic
      this.words = words; // ["mexico", "javascript", "agua"]
      // ... your code goes here
      this.secretWord = this.pickWord()
      this.letters = [] // Cuando yo presiono una nueva tecla, ya fue presionado o no
      this.guessedLetters = ""
      this.errorsLeft = 10
  }
  pickWord() {
      // ... your code goes here
      // 1. TENGO UN ARREGLO
      // 2. DE ESE ARREGLO TENGO QUE ELEGIR UNA PALABRA ALEATORIA
      // 0            1           2
      // ["mexico", "javascript", "agua"] - Random
      return this.words[Math.floor(Math.random() * this.words.length)]
  }
  checkIfLetter(keyCode) {
      // ... your code goes here
      // 1. keyCode tendría que estar entre 65 y 90
      return 65 <= keyCode && keyCode <= 90
  }
  checkClickedLetters(letter) {
      // ... your code goes here
      // Verificando si las letras están incluidas.
      return !this.letters.includes(letter)
  }
  addCorrectLetter(letter) {
      // ... your code goes here
      this.guessedLetters += letter
      console.log(this.guessedLetters)
  }
  addWrongLetter(letter) {
      // ... your code goes here
      this.errorsLeft = this.errorsLeft - 1
      return this.letters.push(letter)
  }
  checkGameOver() {
      // ... your code goes here
      return this.errorsLeft <= 0
  }
  checkWinner() {
      // ... your code goes here
      // 1. Tener un arreglo secreto
      // for(let letter of this.secretWord ){
      //   console.log(letter)
      //   return this.guessedLetters.indexOf(letter) != -1 ? true : false
      // }
      const secretArray = Array.from(this.secretWord) // ["m", "i", "k", "e"]
      const guessedArray = Array.from(this.guessedLetters) // ["i", "k", "l"]
      let matches = 0;
      secretArray.forEach((letter) => {
          if (guessedArray.includes(letter)) {
              matches++
          }
      })
      return matches === secretArray.length
  }
}
let hangman;
let hangmanCanvas
const startGameButton = document.getElementById('start-game-button');
if (startGameButton) {
  startGameButton.addEventListener('click', event => {
      hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
      hangman.secretWord = hangman.pickWord();
      hangmanCanvas = new HangmanCanvas(hangman.secretWord);
      console.log(hangman.secretWord);
      hangmanCanvas.createBoard()
          /*    hangmanCanvas.writeCorrectLetter(2);
             hangmanCanvas.drawHangman(9) */

  });
}
document.addEventListener('keydown', event => {
  const keyCode = event.keyCode
  const key = event.key
      // 1. Condicional que verifique que la tecla está entre la 65 y la 90
      // 2. Condicional si la letra ya fue ingresada
      // 3. Condicional que verifique si la letra generada está en guessedLetters

  if (
      hangman.checkIfLetter(keyCode) &&
      hangman.checkClickedLetters(key) &&
      !hangman.guessedLetters.includes(key)) {


      //verifica que la letra se correcta
      if (hangman.secretWord.indexOf(key) >= 0) {
          let sitio = hangman.secretWord.indexOf(key);
          let matrizUnica = [];
          const secretArray = Array.from(hangman.secretWord);
          //verifica si hay mas de una letra en la palabra
          for (let index = 0; index < secretArray.length; index++) {

              if (key == secretArray[index]) {
                  //guarda el index de cada letra encontrada
                  matrizUnica.push(index);
              }

          }
          hangman.addCorrectLetter(key);
          console.log(hangman.checkWinner());

          if (hangman.checkWinner()) {


              hangmanCanvas.winner();


              return;
          }




          //si la letra es unica en la palabrea se le pasa el index
          if (matrizUnica.length === 1) {
              hangmanCanvas.writeCorrectLetter(sitio);
              hangman.checkWinner()
                  //si hay mas de una concidencia manda un array
          } else if (matrizUnica.length > 1) {
              hangmanCanvas.writeCorrectLetter(matrizUnica);
              hangman.checkWinner()

          }
          //si la letra no se encuentra en la palabra seleccionada
      } else {
          //se agrega en el arreglo de letras seleccionadas (this.letters)
          hangman.addWrongLetter(key);
          //se pinta las lentras y cuantos intentos lleva
          hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
          //se dibuja el mu;eco del ahorcado
          hangmanCanvas.drawHangman(hangman.errorsLeft);
          if (hangman.checkGameOver()) {


              hangmanCanvas.gameOver();


              return;
          }


      }
  }


});