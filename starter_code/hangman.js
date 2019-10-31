 class Hangman {
   constructor(words, secretWord, letters, guessedLetter, errorsLeft) {
    this.words = words;
    this.secretWord = '' ;
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
    this.words  = ['casa', 'arbol', 'agua', 'caja'];
   }

   getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    //let separacion = rand.split('');
    return this.secretWord;
   }

   checkIfLetter(keyCode) {
    /*lo busqué en stack =( no sabia que como validar el keycode*/
    if(keyCode >= 65 && keyCode <= 90 || keyCode>=97 && keyCode<=122){
      return true;
    }else{
      return false;
    }
   }

   checkClickedLetters(key) {
    if(this.letters.includes(key)){
      return false;
    }else {
      return true;
    }
   }

   addCorrectLetter(i) {
    //addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
    let separacion = this.secretWord.split('');
    this.guessedLetter += separacion[i].toLocaleUpperCase() ;
    
   }

   addWrongLetter(letter) {
    //Should subtract one from the variable errorsLeft and check if the game is over.
    this.errorsLeft -= 1;
    
   }

   checkGameOver() {
    ///¡¡?????
    if(this.errorsLeft === 0){
      return true;
    }else {
      return "perdiste";
    }
   }

//   checkWinner() {
      ////?????¡¡¡¡¡
//   }

 }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
