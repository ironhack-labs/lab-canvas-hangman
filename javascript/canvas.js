class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0, this.context.width, this.context.height);
    this.drawLines() 
    console.log(this.secretWord)
  }

  drawLines() {
     let moveX = 300    //es probable que necesitemos convertir secretWord en array despues
    let y = 700
    for(let i = 0; i < this.secretWord.length ;i++){
      this.context.beginPath()
      this.context.moveTo(moveX,y)
      this.context.lineTo(moveX+40, y)
      this.context.closePath()
      this.context.stroke()
      moveX+=50
    }      
  }


writeCorrectLetter(index) {
    let x = 270
    let y = 695
    for(let i = 0; i < this.secretWord.length; i++){
      if(this.secretWord[i] === index){
        x = x + (i+1) * 45
        this.context.font = '30px Arial'
        this.context.fillText(index,x,y)
        x+=200
      }
    }
  }
  

  writeWrongLetter(letter, errorsLeft) {
    let x = 600
    let y = 100
    //for(let i = 0; i < this.secretWord.length; i++){
      if(!this.secretWord.includes(letter)){    //[i]
        //x = x + (i+1) * 20
        this.context.font = '30px Verdana'
        this.context.fillText(letter,x,y)
        x+=100
      }
    //} 
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft){
     case 9:
       this.context.beginPath();
       this.context.moveTo(110, 660);
       this.context.lineTo(10, 700);
       this.context.lineTo(210, 700);
       this.context.lineTo(110, 660);
       this.context.stroke();
       this.context.closePath();
       break;
     case 8:
       this.context.beginPath();
       this.context.moveTo(110, 660);
       this.context.lineTo(110, 100);
       this.context.stroke();
       this.context.closePath();
       break;
     case 7:
       this.context.beginPath();
       this.context.moveTo(110, 100);
       this.context.lineTo(450, 100);
       this.context.stroke();
       this.context.closePath();
       break;
     case 6:
       this.context.beginPath();
       this.context.moveTo(450, 100);
       this.context.lineTo(450, 175);
       this.context.stroke();
       this.context.closePath();
       break;
     case 5:
       this.context.beginPath();
       this.context.arc(450, 225, 50, 0, Math.PI * 2);
       this.context.stroke();
       this.context.closePath();
       break;
     case 4:
       this.context.beginPath();
       this.context.moveTo(450, 275);
       this.context.lineTo(450, 500);
       this.context.stroke();
       this.context.closePath();
       break;
     case 3:
       this.context.beginPath();
       this.context.moveTo(450, 500);
       this.context.lineTo(425, 560);
       this.context.stroke();
       this.context.closePath();
       break;
     case 2:
       this.context.beginPath();
       this.context.moveTo(450, 500);
       this.context.lineTo(475, 560);
       this.context.stroke();
       this.context.closePath();
       break;
     case 1:
       this.context.beginPath();
       this.context.moveTo(450, 350);
       this.context.lineTo(425, 350);
       this.context.stroke();
       this.context.closePath();
       break;
     case 0:
       this.context.beginPath();
       this.context.moveTo(450, 350);
       this.context.lineTo(475, 350);
       this.context.stroke();
       this.context.closePath();
       break;
   }
 }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
