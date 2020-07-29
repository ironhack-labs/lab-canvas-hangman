class HangmanCanvas {
  constructor(secretWord /* , errorsLeft */) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    // this.errorsLeft = errorsLeft;
  }

  createBoard(drawLines) {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    //start game
    for (let i = 0; i < this.secretWord.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = "__";
      let ul = document.getElementById("word");
      ul.appendChild(li);
    }
  }

  writeCorrectLetter(index) {
    //console.log(/* index */)
    console.log('correct')
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    
    console.log("wrong");
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    console.log("draw");
    for (let i = hangman.errorsLeft; i >= 0; i--) {
      if (hangman.errorsLeft === 9) {
        this.context.beginPath();
        this.context.moveTo(200, 650);
        this.context.lineTo(300, 650);
        this.context.stroke();
      } else if (errorsLeft === 8) {
        this.context.beginPath();
        this.context.moveTo(300, 650);
        this.context.lineTo(250, 590);
        this.context.stroke();
      }
    }

    /* 
    //draw guy
    //draw the stand
  //step 1 - triangle
  this.context.beginPath();
  this.context.moveTo(200, 650);
  this.context.lineTo(300, 650);
  this.context.stroke()
  //step 1.1 
  this.context.beginPath();
  this.context.moveTo(300, 650);
  this.context.lineTo(250, 590);
  this.context.stroke()
  //step 1.2
  this.context.beginPath();
  this.context.moveTo(250, 590);
  this.context.lineTo(200, 650);
  this.context.stroke()
  //step 2 - pole
  this.context.beginPath();
  this.context.moveTo(250, 590);
  this.context.lineTo(250, 150);
  this.context.stroke()
  //step 3 ___
  this.context.beginPath();
  this.context.moveTo(250, 150);
  this.context.lineTo(350, 150);
  this.context.stroke()
  //step 4 - |
  this.context.beginPath();
  this.context.moveTo(350, 150);
  this.context.lineTo(350, 200);
  this.context.stroke()
  //step 5 - head
  this.context.beginPath();
  this.context.arc(350, 220, 20, (Math.PI / 180), (Math.PI / 180) * 360)
  this.context.stroke()
  //step 6 - body
  this.context.beginPath();
  this.context.moveTo(350, 240);
  this.context.lineTo(350, 400);
  this.context.stroke()
  //step 7 - left leg
  this.context.beginPath();
  this.context.moveTo(350, 400);
  this.context.lineTo(330, 450);
  this.context.stroke()
  //step 8 - last - right leg
  this.context.beginPath();
  this.context.moveTo(350, 400);
  this.context.lineTo(370, 450);
  this.context.stroke() 
 */
  }

  //bonus
  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
/* 
function pushTheButton() {
  document.addEventListener('keydown', event => {
    // React to user pressing a key
    // ... your code goes here WRONG BELOW  
    
      let letter = event.key;
      console.log(letter); 
      hangmanCanvas.writeCorrectLetter()
      return letter;
   
  });
}
 */
