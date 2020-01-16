let hangman;
let hangmanCanvas;

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
      if (this.letters.length<1 || this.letters.indexOf(key)<0) 
      {
        this.letters.push(key)
        return false
      }
      else{
        this.letters.push(key)
      return true
      }
      }

     addCorrectLetter(i) {
      this.guessedLetter+=this.secretWord[i].toUpperCase()
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
  hangmanCanvas=new HangmanCanvas();
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();

};

document.onkeydown = (e) => {
  let letra=e.key.toUpperCase()
  if(hangman.checkIfLetter(e.keyCode) && !hangman.checkClickedLetters(e.key)){
    if(hangman.secretWord.includes(letra)){
      hangman.addCorrectLetter(hangman.secretWord.indexOf(letra))
      for (let i=0;i<hangman.secretWord.length;i++){
        if(hangman.secretWord[i]===letra){
          hangmanCanvas.writeCorrectLetter(i)
        }
      }
      if (hangman.checkWinner()){
        hangmanCanvas.winner()
      }

    }
    else{
      if (!hangman.checkClickedLetters(e.key)) return
      hangman.addWrongLetter(letra)
      hangmanCanvas.writeWrongLetter(letra,hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
      if (hangman.checkGameOver()){
        hangmanCanvas.gameOver()
      }
    }
  }
hangmanCanvas.drawLines();
};
