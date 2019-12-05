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

getWord() {
  // Returns a random word from our array words 
 this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
//  console.log(this.words);
//  console.log(Math.floor(Math.random() * this.words.length));
//  console.log(this.secretWord);
 return this.secretWord;

}

 checkIfLetter (keyCode){
  // this function should check if the key the user has typed is a letter.
  console.log()
  return (keyCode >= 65 && keyCode <= 90);

}

 checkClickedLetters (lt){
  // Checks if the pressed letter has already been pressed and 
  // returns true if it was not or false in the opposite case.
  return !this.letters.includes(lt);
}

 checkGameOver (){
  // Returns a boolean value, true if the users lose, and false in any other case.
 return (this.errorsLeft === 0 ) ? true : false;
}


//  checkWinner () {
//     //Check if the users win and return a boolean value.
//     const isPalindrome = (this.guessedLetter) => {
//     const cleanStr = clean();
//     const reverseStr = cleanStr.split('').reverse().join('');
//     return reverseStr === cleanStr;
//     }
//   }



//  addCorrectLetter(i){
//   // Adds to the guessedLetter variable the letter 
//   // that was pressed. Also, it should check if the user
  
//   let keyCaptured = String.fromCharCode(window.event.keyCode
//   (checkClickedLetters(keyCaptured) ? this.guessedLetter += keyCaptured : this.letters
//   this.secretWord // palavra secreta
  // se ok
   // se notok

//   this.guessedLetter += String.fromCharCode(window.event.keyCode);
//   checkWinner();

// }

//  addWrongLetter(letter){
//   // Should subtract one from the variable errorsLeft and check if the game is over.

// }

}

// document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };


hangman = new Hangman();
hangman.getWord();