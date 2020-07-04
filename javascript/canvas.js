class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;                                         
    this.winnerImage = document.getElementById('winner')                  
    this.loserImage = document.getElementById('loser')                    
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);  
    this.drawLines()                                                      
  }

  drawLines() {
    let x = 400;                                            // assign starting position to variables
    let y = 500;  
    this.context.beginPath();
    this.context.lineWidth = 3;                             
     for (let i = 0; i < this.secretWord.length; i++) {     // use a for loop to create as many lines as there are letters in the secretWord
       this.context.moveTo(x, y);
       this.context.lineTo(x + 30, y);              
       x += 45;                                             
     }
     this.context.stroke();                                 // when all lines are pathed, stroke.
  }

  writeCorrectLetter(index) {
    let x = 400;                                                                                 
    let y = 500;                                                                                
    this.context.font = ('24px Helvetica');                                                     
    this.context.fillText(this.secretWord[index].toUpperCase(), x + (index * 45 + 5), y - 10);  
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 900;
    let y = 350;
    this.context.font = ('24px Helvetica');                                 
    this.context.fillText(letter.toUpperCase(), x, y - errorsLeft * 30);    
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    this.context.lineWidth = 3;
    if(errorsLeft === 10){
                                    
      this.context.moveTo(100, 400);
      this.context.lineTo(200, 400);
      this.context.lineTo(150, 380);
      this.context.closePath();
    } else if(errorsLeft === 9) {
                                    
      this.context.moveTo(150, 380);
      this.context.lineTo(150, 50);
    } else if(errorsLeft === 8) {
                                    
      this.context.moveTo(150, 50);
      this.context.lineTo(350, 50);
    } else if(errorsLeft === 7) {
                                    
      this.context.moveTo(350, 50);
      this.context.lineTo(350, 100);
    } else if(errorsLeft === 6) {
                                    
      this.context.moveTo(380, 130);
      this.context.arc(350, 130, 30 ,0, Math.PI * 2);
    } else if(errorsLeft === 5) {
                                    
      this.context.moveTo(350, 160);
      this.context.lineTo(350, 260);
    } else if(errorsLeft === 4) {
                                    
      this.context.moveTo(350, 260);
      this.context.lineTo(340, 340)
    } else if(errorsLeft === 3) {
                                    
      this.context.moveTo(350, 260);
      this.context.lineTo(360, 340)
    } else if(errorsLeft === 2) {
                                    
      this.context.moveTo(350, 160);
      this.context.lineTo(340, 240);
    } else if(errorsLeft === 1) {
                                    
      this.context.moveTo(350, 160);
      this.context.lineTo(360, 240);
      
    }
    this.context.stroke();
  }

  gameOver() {
    this.context.drawImage(this.loserImage, 200, 140);  
  }

  winner() {
    this.context.drawImage(this.winnerImage, 180, 0);   
  }
}