var hangman;

function Hangman() {
  this.words=['IRONHACK', 'GAMES', 'PLAY', 'SPORTS', 'MIAMI', 'HEAT'];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
    var number = Math.floor(Math.random() * this.words.length)
    this.secretWord = this.words[number];
    return this.words[number];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    if (keyCode < 91 && keyCode > 64){
        return true;
    }
    else{
        return false;
    }
};

Hangman.prototype.checkClickedLetters = function (key) {
      if(this.letters.includes(key)){
        return false
      }
      else{
        return true;
      }
};

// Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
Hangman.prototype.addCorrectLetter = function (i) {
       
        this.guessedLetter += String.fromCharCode(i);
        this.letters.push(String.fromCharCode(i));
        this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
        
        this.errorsLeft -= 1;
        this.letters.push(letter);
};

Hangman.prototype.checkGameOver = function () {
      if(this.errorsLeft===0){
        return true;
      }
      else{
        return false;
      }
};

Hangman.prototype.checkWinner = function () {
     if(this.secretWord.length === this.guessedLetter.length){
      canvas.winner();
      return true
     }
     else{
       return false
     }
  } 

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);

  // canvas.drawHangman('triangle');
  // canvas.drawHangman('lines');
  canvas.createBoard();
  
  canvas.drawLines();
};


document.onkeydown = function (e) {
      var key = String.fromCharCode(e.keyCode);
       //If Letter is In SecretWord and Passes Checks
      if(hangman.secretWord.includes(key) && hangman.checkIfLetter(e.keyCode)===true && 
      hangman.checkClickedLetters(key)===true &&  hangman.checkGameOver() === false ){
     //Add Letter to guessedLetter and Print Letter to Screen
      hangman.addCorrectLetter(e.keyCode);
      canvas.writeCorrectLetter(hangman.secretWord.indexOf(key))
     
    }
    else{
      if(hangman.checkIfLetter(e.keyCode)===true && 
      hangman.checkClickedLetters(key)===true && hangman.checkGameOver() === false){
      hangman.addWrongLetter(key);
      canvas.writeWrongLetter(key, hangman.errorsLeft);
      canvas.drawHangman(hangman.errorsLeft);
      
      //Print "You Lose!"
      if( hangman.checkGameOver() === true){
        canvas.gameOver();
        canvas.drawHangman('body');
        canvas.drawHangman('circle');
      }
    
    }
      
      
      
    }


};
