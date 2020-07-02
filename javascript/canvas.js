class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;                                         // assign secretWord to property
    this.winnerImage = document.getElementById('winner')                  // get dom element 'winnner' from HTML
    this.loserImage = document.getElementById('loser')                    // get dom element 'loser' from HTML
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);  // clear the canvas
    this.drawLines()                                                      // call drawLines
  }

  drawLines() {
    let x = 400;                                            // assign starting position to variables
    let y = 500;  
    this.context.beginPath();
    this.context.lineWidth = 3;                             // begin path and set line width
     for (let i = 0; i < this.secretWord.length; i++) {     // use a for loop to create as many lines as there are letters in the secretWord
       this.context.moveTo(x, y);
       this.context.lineTo(x + 30, y);              
       x += 45;                                             // increment starting postion of each line by 45 on x-axis
     }
     this.context.stroke();                                 // when all lines are pathed, stroke.
  }

  writeCorrectLetter(index) {
    let x = 400;                                                                                // where the letter will be written is dependent on index of letter 
    let y = 500;                                                                                // in secretWord, so times the index by 45 (distance between lines)
    this.context.font = ('24px Helvetica');                                                     
    this.context.fillText(this.secretWord[index].toUpperCase(), x + (index * 45 + 5), y - 10);  // +5 on X and -10 on Y to center letter over line
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 900;
    let y = 350;
    this.context.font = ('24px Helvetica');                                 // write letters in a vertical line starting from the top, using remaining errors as number to
    this.context.fillText(letter.toUpperCase(), x, y - errorsLeft * 30);    // calculate starting position of each letter (i.e. 350(y) - (10 errorsLeft * 30 = 300) = 50)
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    this.context.lineWidth = 3;
    if(errorsLeft === 10){
                                    // draw standbase
      this.context.moveTo(100, 400);
      this.context.lineTo(200, 400);
      this.context.lineTo(150, 380);
      this.context.closePath();
    } else if(errorsLeft === 9) {
                                    // draw vertical beam
      this.context.moveTo(150, 380);
      this.context.lineTo(150, 50);
    } else if(errorsLeft === 8) {
                                    //draw beam
      this.context.moveTo(150, 50);
      this.context.lineTo(350, 50);
    } else if(errorsLeft === 7) {
                                    // draw noose
      this.context.moveTo(350, 50);
      this.context.lineTo(350, 100);
    } else if(errorsLeft === 6) {
                                    // draw head outline (found this the hardest part, figuring out where the line starts and such)
      this.context.moveTo(380, 130);
      this.context.arc(350, 130, 30 ,0, Math.PI * 2);
    } else if(errorsLeft === 5) {
                                    // draw body
      this.context.moveTo(350, 160);
      this.context.lineTo(350, 260);
    } else if(errorsLeft === 4) {
                                    // draw left leg
      this.context.moveTo(350, 260);
      this.context.lineTo(340, 340)
    } else if(errorsLeft === 3) {
                                    //draw right leg
      this.context.moveTo(350, 260);
      this.context.lineTo(360, 340)
    } else if(errorsLeft === 2) {
                                    //draw left arm
      this.context.moveTo(350, 160);
      this.context.lineTo(340, 240);
    } else if(errorsLeft === 1) {
                                    // draw right arm
      this.context.moveTo(350, 160);
      this.context.lineTo(360, 240);

                                    // draw dead face because I was starting to have fun with it
      this.context.moveTo(335, 120);
      this.context.lineTo(345, 128);
      this.context.moveTo(345, 120);
      this.context.lineTo(335, 128);

      this.context.moveTo(355, 120);
      this.context.lineTo(365, 128);
      this.context.moveTo(365, 120);
      this.context.lineTo(355, 128);

      this.context.moveTo(340, 140);
      this.context.lineTo(360, 146);
    }
    this.context.stroke();
  }

  gameOver() {
    this.context.drawImage(this.loserImage, 200, 140);  // drawImage using previously retrieved DOM element
  }

  winner() {
    this.context.drawImage(this.winnerImage, 180, 0);   // drawImage using previously retrieved DOM element
  }
}