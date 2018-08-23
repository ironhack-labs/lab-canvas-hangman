var hangman;


function Hangman() {
  this.words = ["PIEDRA","AZUL","FLOR","CABO","MURCIELAGO","TIEMPO","VINO","EXTRA"]
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter= "";
  this.errorsLeft = 10;
  this.guessed = undefined;
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode>=65 && keyCode<=90){
    this.checkClickedLetters(keyCode);
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (!this.letters.includes(key)){
    this.checkIfIncluded(key)
    this.letters.push(key);
    return true;
  } else {
    return false;
  }
}; 

Hangman.prototype.checkIfIncluded = function (i){
  var letra = String.fromCharCode(i);
  if (this.secretWord.indexOf(letra)>=0){
    this.addCorrectLetter(letra);
    this.guessed = true;
    return true;
  } else {
    this.addWrongLetter(letra);
    this.guessed = false;
    return false;
  }

  //}
};


  
Hangman.prototype.addCorrectLetter = function (letra) {
  //var letra = String.fromCharCode(i)  
  //if (this.secretWord.indexOf(letra)>=0){
    this.guessedLetter += letra;
    this.checkWinner();
    //console.log(this.guessedLetter);
  //}
};

Hangman.prototype.addWrongLetter = function (letter) {
  //if (this.secretWord.indexOf(letter)<0){
    //console.log("NO incluye ",letter)
    this.errorsLeft--;
    this.checkGameOver();
  //}
};

Hangman.prototype.checkGameOver = function () {
 if (this.errorsLeft == 0){
  return true;
 } else {
   return false;
 }

};

Hangman.prototype.checkWinner = function () {
 
  if (this.secretWord.length == this.guessedLetter.length){
    return true;
  } else {
    return false;
  }
  
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  nuevo = new HangmanCanvas(hangman.secretWord);
  nuevo.createBoard();
  nuevo.drawLines();

};


document.onkeydown = function (e) {
  var keyCode = e.keyCode;
  hangman.checkIfLetter(keyCode);
  if (hangman.guessed == true){
    var letra = String.fromCharCode(keyCode);
    var indice = hangman.secretWord.indexOf(letra);
    nuevo.writeCorrectLetter(letra, indice);
  } else if (hangman.guessed == false) {
    nuevo.writeWrongLetter(keyCode)
  }
  hangman.guessed = undefined;
  if (hangman.checkGameOver()==true){
    nuevo.gameOver();
  } 
  if (hangman.checkWinner()==true){
    nuevo.winner();
  }
};





