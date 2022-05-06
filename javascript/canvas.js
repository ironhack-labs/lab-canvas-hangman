class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.fillStyle = "salmon";
    this.context.fillRect(20, 100, 100, 100);
    this.context.clearRect(45,125,50,50)
    drawLines();

    /* createBoard() - the method that should
     clear the canvas, so every time we start
      the game we have a clean one. 
      This method also should call the next 
      one we will define, the drawLines().
     */
  }

  drawLines() {

   let n = this.secretWord.length

    this.context.beginPath();
    this.context.moveTo(25, 300);
    this.context.lineTo(50, 300);
    context.stroke();
    context.closePath();
    
    context.lineTo(170, 170);
    context.lineTo(125, 125);
    context.stroke();
    context.fill();
    context.closePath();

/*
drawLines() - the method that should draw 
one line for each letter of the secret word.
 At this point we know the secret word the
 user has to guess.
*/ 

  }

  writeCorrectLetter(index) {

/* 

writeCorrectLetter(index) and 
writeWrongLetter(letter, errorsLeft) - 
the methods that should write the letter 
on which the user has just clicked, on the 
appropriate part of the canvas. After checking if the
 letter was not already clicked, we
  should write it on our board. 
  If the secret word includes the letter, 
  we should write it in the position where
   it belongs, and if the letter is not included 
   in the secret word, we should write it on the top 
   right corner, so that the user knows which letters 
   were already clicked.

  */ }

  writeWrongLetter(letter, errorsLeft) {
 



 }

  drawHangman(errorsLeft) {
    // ... your code goes here



/* 
drawHangman(errorsLeft) - the method that should 
draw the hangman. You will see that the drawing is 
composed of multiple lines and one circle. Go ahead and 
experiment, you will see it is pretty straightforward. */

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
