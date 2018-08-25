function Hangman() {
  this.words=["IronHack","JavaScript", "Developer"];
  this.secretWord='';
  this.letters=[];
  this.guessedLetter='';
  this.errorsLeft = 8;
}

Hangman.prototype.getWord = function () {
  var numero = Math.floor(Math.random()*this.words.length);
  this.secretWord = this.words[numero].toString().toUpperCase();
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
    }
    return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  var letra = String.fromCharCode(key);
  if (this.letters.includes(letra)){
    return false;
  }else{
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.guessedLetter + String.fromCharCode(i);
  if(!this.checkClickedLetters(i)){    
    this.letters.push(String.fromCharCode(i));
  } 
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  if (!this.letters.includes(letter)){
    this.letters.push(letter);
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft==0){
    return true;
    }
    return false;
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length == this.secretWord.length){
    return true;
  }
    return false;
};

var hangman = new Hangman();
var secrete = hangman.getWord();
var canvas = new HangmanCanvas(secrete);    


document.getElementById('start-game-button').onclick = function () {  
  document.getElementById("img").style.display = 'none';
  document.getElementById("start-game-button").style.display = 'none';
  canvas.createBoard();
  canvas.drawLines();
};


document.onkeydown = function (e) {
  if(hangman.checkIfLetter(e.keyCode)){      
      let letter = String.fromCharCode(e.keyCode);
      if (hangman.secretWord.split('').includes(letter) ){
        hangman.addCorrectLetter(e.keyCode);
        canvas.writeCorrectLetter(hangman.guessedLetter.length-1,letter);  
      }else{
        hangman.addWrongLetter(letter);
        canvas.writeWrongLetter(letter,hangman.letters.lastIndexOf(letter)); 
        var shape = '';
        switch(hangman.errorsLeft){
          case 7:
            shape = "head";
            break;
          case 6:
            shape = "body";
            break;
          case 5:
            shape = "leftLeg";
            break;
          case 4:
            shape = "rightLeg";
            break;
          case 3:
            shape = "leftArm";
            break;
          case 2:
            shape = "rightArm";
            break;
          case 1:
            shape = "tie";
            break;
          case 0:
            shape = "die";
            break;
          default:
            break;
        }
        canvas.drawHangman(shape);
      }
       
      
  }
};