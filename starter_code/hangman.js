class Hangman {
  constructor() {
    this.words = ["dog","ironhack","batman"];
    this.secretWord = "";
    this.letters = []; //the letters the user already clicked,
    this.guessedLetters = "";
    this.errorsLeft = 7;
  }
  setWord() {
    var ranWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[ranWord];
  }
  getWord(){
    return this.secretWord();
  }
  //checks if a letter was clicked
  checkIfLetter(e) {
    if (
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 97 && e.keyCode <= 122)
    ) {
      return true;
    } else {
      alert("Invalid character");
      return false;
    }
  }
  //Checks if the pressed letter has already been pressed and
  //returns false if it was not or true in the opposite case.
  checkClickedLetter(pickedLetter) {
    for (let a = 0; a < this.letters.length; a++) {
      if (this.letters[a] == pickedLetter.key) {
        return false;
      }
    }
    return true;
  }
  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true;
    } else return false;
  }
  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) {
      return true;
    } else return false;
  }
  addCorrectLetter(letter) {
    for(let a=0;a<this.secretWord.length;a++){
       if(this.secretWord[a]==letter){
        this.guessedLetters += letter;
       }
    }
  }
  addWrongLetter() {
    this.errorsLeft--;
  }
}

