let hangman;

class Hangman {
   constructor() {
    this.words = ['casa','perro','silla']
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
   }

  getWord() {
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true
    }
    return false
  }
    //Busca la letra tecleada dentro de la palabra secreta
    // for (i=0; i<this.secretWord.length; i++){
    //   if (keyCode = this.secretWord[i].keyCode){
    //     return true
    //   }
    // }
    // return false
  

//   checkClickedLetters(key) {

//   }

//   addCorrectLetter(i) {

//   }

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
