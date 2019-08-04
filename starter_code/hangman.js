let hangman;
let hangmancanvas;

class Hangman {
  constructor() {
    this.words = ['teste', 'sorte', 'azar'];
    this.secretWord = '';
    this.letters = []; //letters users already clicked
    this.guessedLetter = ''; //letters user clicked and guessed
    this.errorsLeft = 10;
    this.wrongLetter='';
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

/*  checkIfLetter(str) {
    if (str.match(/[a-z]/i)) {
      return true;
    }
    else return false
  }*/

  checkIfLetter(keyCode){
    if(keyCode>= 65 && keyCode <=90){
      return true 
    } else return false
  }

  checkClickedLetters(key){
    if(!this.letters.includes(key)){
      this.letters.push(key)
      return true

    } else {
      return false
    }
  }

  addCorrectLetter(key){

    this.guessedLetter+=this.secretWord[key].toUpperCase()

  }

  addWrongLetter(key){
    this.errorsLeft-=1;
    this.wrongLetter+=key.toUpperCase();

  }

  checkGameOver(){
    if(this.errorsLeft===0){
      return true
    } else return false
  }

  checkWinner(){
    console.log(`checkwinner`, this.secretWord.length, this.guessedLetter.length)
    if(this.secretWord.length===this.guessedLetter.length){
      
      return true
    } else return false
  }


} // fim do Hangman


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmancanvas = new HangmanCanvas(hangman.secretWord)
  console.log('inicio', hangman.secretWord)
  hangmancanvas.createBoard()
  hangmancanvas.drawLines()
  console.log('canvas')
};


document.onkeydown = function (e) {
  console.log(e, e.key, typeof(e.key))
  if(hangman.checkIfLetter(e.keyCode)){
    console.log('entro1')
    if(hangman.checkClickedLetters(e.key)) {
      console.log('entro2')
      if(hangman.secretWord.includes(e.key)){
        hangmancanvas.writeCorrectLetter(e.key)
        for(let k = 0; k < hangmancanvas.count; k++){
          hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key))
        }
        if(hangman.checkWinner()){
          hangmancanvas.winner();
        }
      } else{
        hangman.addWrongLetter(e.key)
        hangmancanvas.writeWrongLetter(e.key, hangman.errorsLeft)
        hangmancanvas.drawHangman(hangman.errorsLeft)
        console.log('errorsleft', hangman.errorsLeft)
        if(hangman.checkGameOver()){
          hangmancanvas.looser();
        }
      }

    }



  } else {
    //else for not letter
  }

};


// function Hangman() {

// }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

