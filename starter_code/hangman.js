  let keyString = keyCode =>{
    return String.fromCharCode(keyCode);
  }

  function Hangman(){
    this.words = ['uno', 'trece', 'tres','dos'];
    this.secretWord = this.getWord();
    this.guessedLetter = '';
    this.letters = [];
    this.errorsLeft = 10;
  }

  Hangman.prototype.getWord = function () {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  Hangman.prototype.checkIfLetter = function (keyCode){
    let checkKeyString = keyString(keyCode).length === 1 && keyString(keyCode).match(/[a-z]/i);
    if(checkKeyString != null){
      return true;
    }
    return false;
  }
  Hangman.prototype.checkClickedLetters = function (key){

      if(this.letters.includes(key)){
        return false;
      }
        this.letters.push(key);
        return true;
    }
  
  
  Hangman.prototype.checkGameOver = function (){
    if(this.errorsLeft > 0){
      return false;
    }
    else if(this.errorsLeft === 0){
      return true;
    }
  }
  Hangman.prototype.checkWinner = function (){
    if(this.guessedLetter.length === this.secretWord.length && this.errorsLeft > 0){
      return true;
    }
    else{
      return false;
    }
  }
  Hangman.prototype.addCorrectLetter = function (i){
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();

    return this.guessedLetter;
  }
  Hangman.prototype.addWrongLetter = function (letter){
    this.errorsLeft--;
    return letter;
  }


let hangman = new Hangman()
let hangmanCanvas = new HangmanCanvas(hangman.getWord());

document.getElementById('start-game-button').onclick = function () {
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = function (e) {
  let secretWord = hangmanCanvas.secretWord;
  console.log(secretWord)

 if(hangman.checkIfLetter(e.keyCode)){
   if(!hangman.checkClickedLetters(e.key)){
     //Tecla repetida
     alert('¡La tecla ya ha sido seleccionada anteriormente, elige una nueva')
   }
   else{
     //Tecla nueva
     if(secretWord.includes(e.key)){
       //should write it in the position it corresponds
       //should retrieve the index number
      index = secretWord.indexOf(e.key);
      console.log(index)
      hangmanCanvas.writeCorrectLetter(index);
     }
     else{
       //write the letter in the top right corner
     }
   }
 }
 
 
};