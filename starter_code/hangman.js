let hangman;

class Hangman {

constructor() {
  // this.ctx = document.getElementById('hangman').getContext('2d');
  this.words=['board','desk', 'chair']; //An array where we will store all the words that the player need to guess. We will take one of them randomly.
  this.secretWord = ""; //Here we will store the word chosen for each game.
  this.letters= [] ; // An array to store the letters the user already clicked, so we do not repeat them.
  this.guessedLetter = ""; //A string to store the letters the user clicked and guessed. We will use this to know when the user wins.
  this.errorsLeft = 10; //It should start at 10, and decrease every time a user clicks on a letter that is not in the word.
  
}
// Returns a random word from our array words
getWord() {
   this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
 return this.secretWord;

}
// this function should check if the key the user has typed is a letter.
 checkIfLetter (keyCode){
  return (keyCode >= 65 && keyCode <= 90);

}
// Checks if the pressed letter has already been pressed and 
  // returns true if it was not or false in the opposite case.
 checkClickedLetters (lt){
  return !this.letters.includes(lt);
}

 
// Returns a boolean value, true if the users lose, and false in any other case.
checkGameOver() { 
  return (this.errorsLeft === 0)
}


checkWinner() {
  return (this.secretWord.length === this.guessedLetter.length);
}

 
  // Adds to the guessedLetter variable the letter 
  // that was pressed. Also, it should check if the user 
  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()
    this.checkWinner()
   
   }

addWrongLetter(letter) {
  this.errorsLeft -= 1
  this.letters.push(letter);
  this.checkGameOver()
}

}

document.getElementById('start-game-button').onclick =  function () {
  hangman = new Hangman();
  hangmanObj = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangmanObj.getWord());
  hangmanCanvas.clearBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = function (e) {
  if (!hangmanObj.checkIfLetter(e.keyCode)) {
    return alert("Coloque um caractere válido!");
  } else {
      let char = String.fromCharCode(e.keyCode)
      if (!hangmanObj.checkClickedLetters(char)) {
        return alert("Caractere já digitado");
      } else { 

      }
}

};



hangman = new Hangman();
hangman.getWord();


