let hangman;

class Hangman {
  constructor() {
    this.words =['tiesto','armin','DJfernando'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;

  }

  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {

    return (keyCode >= 65 && keyCode <=90);

  }

  checkClickedLetters(key) {

    console.log(key)

    if(this.letters.indexOf(key)!=-1){
      return false;


    }
    else {
      return true;
    }
  }

  addCorrectLetter(i) {

    this.guessedLetter += this.secretWord[i].toUpperCase()
    if(this.checkWinner()){
      return true;

    }else {
      return false;
    }



  }

  addWrongLetter(letter) {
   this.errorsLeft -= 1

  }

  checkGameOver() {

      if(this.errorsLeft<=0){

      return true;

    }else{

      return false;
    }

  }

  checkWinner() {
    if(this.guessedLetter.length == this.secretWord.length){
      return true;

    }else {
      return false;
    }

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {
  // if(hangman.checkIfletter(e.keyCode)){
  //   if(hangman.letters.indexOf(keyCode)){}
  // }
};
