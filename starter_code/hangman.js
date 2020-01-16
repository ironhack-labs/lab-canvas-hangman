let hangman;

 class Hangman {
   constructor() {
     this.words=['LUKA','ALEJANDRA','ISRAEL','IRONHACK','JAVASCRIPT'],//arreglo con las posibles palabras
     this.secretWord="",//palabra a adivinar
     this.letters=[],//letras clickeadas
     this.guessedLetter="",//string de letras adivinadas
      this.errorsLeft=10;
    }
  
    getWord() {
      let word=this.words[Math.floor(Math.random()*this.words.length)]
      this.secretWord=word
      return word
      }
     
    checkIfLetter(keyCode) {
      if(typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90){
        return true;
      } else{
        return false;
      }

    
      }

   checkClickedLetters(key) {
      if (this.letters.length<1 || this.letters.indexOf(key)>=0) 
      {
        return false
      }
      else{
      return true
      }
      }

     addCorrectLetter(i) {
      this.guessedLetter+=this.secretWord[i].toUpperCase()
      this.checkWinner()
      }
    
     addWrongLetter(letter) {
      if(this.secretWord.indexOf(letter)<0){
        this.errorsLeft-=1
      }
      }
    
    checkGameOver() {
      if (this.errorsLeft>0) return false
      return true 
      }

    checkWinner() {
      if(this.errorsLeft<=0) return false
      for (let i=0;i<this.secretWord.length;i++){
        if(!this.guessedLetter.includes(this.secretWord[i])){
          return false
        }
      }
      return true

      }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.getWord();
  let hangmanCanvas=new HangmanCanvas();
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();

};

document.onkeydown = (e) => {
  if(hangman.checkIfLetter(e.keyCode) && !hangman.checkClickedLetters(e.key)){

  }
hangmanCanvas.drawLines();
};
