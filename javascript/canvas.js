class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let x = 300; // x coordinate
    for(let i=0; i<this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(x, 700);
      this.context.lineTo(x+20, 700);
      this.context.stroke();
      x+=30;
    }
    this.context.closePath();   
  }

  writeCorrectLetter(index) {
    if(hangman.checkIfLetter(keyCode)===true && checkClickedLetters(letter)===true) {
      //for(let i=0; i<this.secretWord.length; i++)
      if(this.secretWord[index]===letter) {
        this.context.fillText(letter, 20*index+10*(index-1), 195, 20); // x coordinate = 20*i+10*(i-1) -> 20 width of the lines & 10 width of the spaces between lines
      }
      
    }
    
  }

    writeWrongLetter(letter, errorsLeft) {
      if(hangman.checkIfLetter(keyCode)===true && checkClickedLetters(letter)===true) {
        //for(let i=0; i<this.secretWord.length; i++)
        if(this.secretWord[index]!==letter) {
          this.context.fillText(letter, 700, 100, 20);
          hangman.letters.push(letter);
          hangman.errorsLeft--;
        }
      }
  }

    drawHangman(errorsLeft) {
        //post

        this.context.beginPath();
        this.context.moveTo(100,400);
        this.context.lineTo(100,200);
        this.context.stroke();
    
        //post2
    
        this.context.beginPath();
        this.context.moveTo(100,200);
        this.context.lineTo(200,200);
        this.context.stroke();
    
        //rope
    
        this.context.beginPath();
        this.context.moveTo(200,200);
        this.context.lineTo(200,226);
        this.context.stroke();
    
        //head
    
        this.context.beginPath();
        this.context.arc(200,235,10,0,Math.PI*2);
        this.context.stroke();
    
        //body
    
        this.context.beginPath();
        this.context.moveTo(200,246);
        this.context.lineTo(200,290);
        this.context.stroke();
    
        //legR
    
        this.context.beginPath();
        this.context.moveTo(200,290);
        this.context.lineTo(210,310);
        this.context.stroke();
    
        //legL
    
        this.context.beginPath();
        this.context.moveTo(200,290);
        this.context.lineTo(190,310);
        this.context.stroke();
    
        //footR
    
        this.context.beginPath();
        this.context.moveTo(210,310);
        this.context.lineTo(215,310);
        this.context.stroke();
    
        //footL
    
        this.context.beginPath();
        this.context.moveTo(190,310);
        this.context.lineTo(185,310);
        this.context.stroke();
    
        //armR
    
        this.context.beginPath();
        this.context.moveTo(200,246);
        this.context.lineTo(210,270);
        this.context.stroke();
    
        //armL
    
        this.context.beginPath();
        this.context.moveTo(200,246);
        this.context.lineTo(190,270);
        this.context.stroke();
  }

}



  // gameOver() {
  //   // ... your code goes here
  // }

  // winner() {
  //   // ... your code goes here
  // }

