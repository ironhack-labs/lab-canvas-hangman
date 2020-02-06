class GameControl {

    constructor(){

    this.hangman = new Hangman()
    this.hangmanCanvas = new HangmanCanvas(this.hangman.secretWord)
    this.createBoard();
    this.keyBoardListener();
    
    }

    createBoard(){

    this.hangmanCanvas.createBoard()
    this.hangmanCanvas.drawLines()

    }
    
    keyBoardListener(){
    document.onkeydown = (e) => {
    
      if (this.hangman.checkIfLetter(e)) {
    
        if (this.hangman.checkClickedLetters(e.key)) {
            this.hangman.checkClickedLetters(e.key)
            this.hangman.addCorrectLetter(e.key)
            this.hangmanCanvas.writeCorrectLetter(this.hangman.guessedLetter)
            this.hangman.addWrongLetter(e.key);
            this.hangmanCanvas.writeWrongLetter(this.hangman.letters);
            this.hangmanCanvas.drawHangman(this.hangman.errorsLeft);
          if (this.hangman.checkGameOver()) {
            this.hangmanCanvas.gameOver()
          }
    
          if (this.hangman.checkWinner()) {
            this.hangmanCanvas.winner()
          }
        }
      }
    
    }
}
    }

    
  
  document.getElementById('start-game-button').onclick = () => {

   
       document.getElementById('start-container').style.display = 'none';

       
       new GameControl();      

      };
      
      
  