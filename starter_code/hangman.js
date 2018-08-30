var hangman;

class Hangman {
 constructor (){
   this.words=["bla", "blabla", "bla bla bla"];
   this.secretWord = "ironhack";
   this.letters = [];
   this.guessedLetter = "";
   this.guessedLetterArray = [];

 }

 getWord () {
   let random = Math.floor(Math.random() * this.words.length);
   return this.words[random];
 }

 checkIfLetter(number) {
   if (number >= 97 && number <=122 || number >= 65 && number <=90) {
     return true
   }
   return false
 }

 checkClickedLetters(letter){
   if (this.letters.includes(letter) === true) {
     return false
   } else if (this.letters.includes(letter) === false) {
     return true
   }
 }

 addCorrectLetter(number){
   for (let i = 0; i < this.secretWord.length; i++) {
   this.guessedLetterArray.push(this.secretWord[i].charCodeAt(0));
   }
   if (arrayOfNumbers.includes(number.charCodeAt(0))) {

   }
 }

 addWrongLetter(string){

 }

 checkGameOver(){

 }

 checkWinner(){

 }
}

document.getElementById('start-game-button').onclick = function () {
 hangman = new Hangman();
};


document.onkeydown = function (e) {

};