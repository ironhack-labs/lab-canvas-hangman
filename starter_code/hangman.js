let hangman;

class Hangman {
constructor() {
  this.words =["IRON", "AUTO", "KATZE"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;
  }
  getWord() {
    let randomWordIndex=Math.floor(Math.random()* this.words.length);
    let randomWord=this.words[randomWordIndex];
    this.secretWord=randomWord;
   return randomWord;
  }
 checkIfLetter(keyCode) {
   //man könnte es auch mit RegEX machen
   
   let pressedKey=keyCode;
    let keyCodeArray=[87,69,82,84,90,85,73,79,80,186,65,83,68,70,71,72,74,75,76,192,222,89,88,67,86,66,78,77];
    let wahr=keyCodeArray.includes(pressedKey);
    return wahr;
    
 }
  checkClickedLetters(key) {
    let vorhanden =this.letters.includes(key);
    if(!vorhanden){
      this.letters.push(key);
    }
    return !vorhanden;    
    
   }
  addCorrectLetter(i) {
    this.guessedLetter+=this.secretWord[i].toUpperCase();

  }
  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft-=1;
    }
  }
  checkGameOver() {
    if(this.errorsLeft==0){
      return true
      }
      else{
        return false;
      }

  }
  checkWinner() {
    return(this.guessedLetter.length==this.secretWord.length)
      
    

  }
}

document.getElementById('start-game-button').onclick = () => {
  
  hangman = new Hangman();
  hangman.getWord();
  let canvasOne=new HangmanCanvas(hangman.secretWord);
  canvasOne.createBoard();
  canvasOne.drawLines();
  console.log(canvasOne.secretWord);
    
};

document.onkeydown = (e) => {
hangman.checkIfLetter(e.keyCode);
hangman.checkClickedLetters(e.key);
 console.log(hangman.letters)
  
};
