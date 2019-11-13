let hangman;

class Hangman {
   constructor() {
    this.words = ['casa','perro','silla'];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  
   }

  getWord() {
    `Returns a random word from our array words.`
    let secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    this.secretWord = secretWord;
    return secretWord;
  }

  checkIfLetter(keyCode) {
    `Checks if the key the user has typed is a letter.`
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)){
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
  

  checkClickedLetters(key) {
    `Checks if the pressed letter has already been pressed 
    and returns true if it was not or false in the opposite case.`

    if (this.letters.indexOf(key) != -1){
      this.letters.push(String.fromCharCode(key))
      return false;
    }
    return true;
  }

   addCorrectLetter(i) {
    this.guessedLetter += this.letters[i]
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
