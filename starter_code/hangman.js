var hangman;
var hangmanCanvas;

function Hangman(){
  this.words=["ironhack","mouse","auto","ciudad","bitcoin","ethereum"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;

}
hangman=new Hangman();
//console.log(hangman.words.length);
Hangman.prototype.getWord = function () {
 
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ((keyCode>=65&&keyCode<=90)||(keyCode>=97&&keyCode<=122)) ? true:false;
};

Hangman.prototype.checkClickedLetters = function (key) {
 return this.letters.indexOf(key)>-1 ? false : true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  
  this.guessedLetter+=this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
 // return checkGameOver ? true:false;
};

Hangman.prototype.checkGameOver = function () {

  return this.errorsLeft===0 ? true:false;
};  

Hangman.prototype.checkWinner = function () {
  for(let i=0; i<this.secretWord.length; i++){
    if(this.guessedLetter.indexOf(this.secretWord[i])==-1){
      return false;
    }
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord=hangman.getWord();
  hangmanCanvas=new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
  

};


document.onkeydown = function (e) {
  console.log(e);
  if(hangman.checkIfLetter(e.keyCode)){
    
    if(hangman.checkClickedLetters(e.key)){
      hangman.letters.push(e.key);
      console.log(hangman.letters);
      if(hangman.secretWord.indexOf(e.key)>=0){
        let startIndex=0;
        let idx=0;
        while((idx=hangman.secretWord.indexOf(e.key,startIndex))>-1){
          hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
          hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(e.key));
          startIndex=idx+1;  
        }
        console.log("si existe: "+hangman.guessedLetter);
      } else{
        hangman.addWrongLetter(e.key);
        hangmanCanvas.writeWrongLetter(e.key,hangman.errorsLeft);
      }
    }else{
      //hangman.letters.push(e.key);
      //console.log(letter);
    }
    

  }else{
    console.log("no"+e.key);
  }
};
