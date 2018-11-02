
class Hangman{
  constructor(secretWord){
    this.words = ['Ironhack', 'Ross', 'Obvious', 'class', 'word', 'television', 'Miami', 'florida', 'check', 'money', 'computer', 'web', 'development'];
    this.secretWord = [];
    this.letters = [];
    this.guessedLetter = [];
    this.errorsLeft = 10;
  }


getWord() {
  let randomIndex = Math.floor(Math.random()*this.words.length);
  this.secretWord = this.words[randomIndex];
  console.log(this.secretWord);
  // return this.secretWord;
}

// checkIfLetter(e) {
  
//   if (e.which >= 65 && e.which <= 90) {
    // this.letters.push(e.which);
    // console.log(e.which)
//     return;

//   }else{
//     console.log("not a valid input")
//   }
// }

checkClickedLetters() {
  let arrayOfEmptyIndexes = [];
  let key = String.fromCharCode(event.which);
  if (key.match(/[a-zA-Z\.]/)){

   let keyCheck = key;
   for (let i = 0; i < this.secretWord.length; i++){
     
   
    if(this.secretWord.split('', i).includes(keyCheck)){

     arrayOfEmptyIndexes.push(keyCheck);
     this.checkGameOver();
    //  console.log('this letter has alrady been used');
    
   } else {
     this.errorsLeft -= 1;
     this.checkGameOver();
   }
   }
 }
}

  


// addCorrectLetter() {
//   let keyCheckAgain = String.fromCharCode(event.which);
  // let right = 0;
  
//   for(let i = 1; i <= this.secretWord.length + 1; i++){
   
//   this.secretWord.split('', i);
  
// }
// let str = this.secretWord;
// var secretLetterHolder = str.split("");
// if(secretLetterHolder == keyCheckAgain.match((/[a-zA-Z\.]/))){
    
//   this.guessedLetter.push(this.keyCheckAgain);
//   console.log("correct");

// }else{
//   return;

// }
// }
// addWrongLetter(){
// if(this.errorsLeft)
// }

checkGameOver(){
  if(this.errorsLeft === 0){
    
    console.log('loser')
    return true;
  }
  else{
    return false;
  }
  }
};
// adds to guessed letter variable and letter that was pressed then run checkGameOver function
// this for loop might be able to check if the keydown matches the letter 


// };
// addWrongLetter(letter) {
  // errorsLeft-=1;
// subtract 1 from errorsleft every then run function checkGameOver
// };



// checkWinner() {
// checks if users win and returns boolean value
// }
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  // hangman.addCorrectLetter();
};


document.onkeydown = function (e) {
  // hangman.checkIfLetter(e);
  hangman.checkClickedLetters();
  // hangman.addCorrectLetter();
  hangman.checkGameOver();
};
