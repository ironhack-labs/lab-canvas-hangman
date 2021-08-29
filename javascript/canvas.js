class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800)
    this.drawLines()
    // ... your code goes here
  }

  drawLines() {

    for(let i = 1; i <= this.secretWord.length; i++){
      
      this.ctx.beginPath();
      this.ctx.moveTo(100*i, 200);
      this.ctx.lineTo((100*i)+80, 200);
      this.ctx.stroke();
    }
    // ... your code goes here
  }

  writeCorrectLetter(index) {

    this.ctx.font = "60px Arial"
    this.ctx.fillText(`${this.secretWord[index].toUpperCase()}`, 100*(index+1)+20 ,150)
    console.log(`the letter is : ${this.secretWord[index]}, and the index is : ${index}`)
    
    // ... your code goes here
  }

  getAndWriteIndex(letter){
    for(let i = 0; i < this.secretWord.length; i++){
      if(this.secretWord[i] === letter){
        this.writeCorrectLetter(i)

      }
    }
  }
  

  writeWrongLetter(letter, errorsLeft) {
    if(errorsLeft >= 0)
    this.ctx.font = "30px Arial"
    this.ctx.fillText(letter, 100,700)
    
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft){
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        break;
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        break;
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(900, 500, 25, 0, 2 * Math.PI)
        this.ctx.stroke();
        break;
      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(900, 500, 25, 0, 2 * Math.PI)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 525);
        this.ctx.lineTo(900, 600);
        this.ctx.stroke();
        break;
      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(900, 500, 25, 0, 2 * Math.PI)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 525);
        this.ctx.lineTo(900, 600);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(870, 570);
        this.ctx.stroke();
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(900, 500, 25, 0, 2 * Math.PI)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 525);
        this.ctx.lineTo(900, 600);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(870, 570);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(930, 570);
        this.ctx.stroke();
        break;
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(900, 500, 25, 0, 2 * Math.PI)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 525);
        this.ctx.lineTo(900, 600);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(870, 570);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(930, 570);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 600);
        this.ctx.lineTo(870, 640);
        this.ctx.stroke();
        break;
      case 0:
        this.ctx.beginPath();
        this.ctx.moveTo(700, 700);
        this.ctx.lineTo(1000, 700);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 700);
        this.ctx.lineTo(800, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(800, 400);
        this.ctx.lineTo(900, 400);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 400);
        this.ctx.lineTo(900, 475);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(900, 500, 25, 0, 2 * Math.PI)
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 525);
        this.ctx.lineTo(900, 600);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(870, 570);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 530);
        this.ctx.lineTo(930, 570);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 600);
        this.ctx.lineTo(870, 640);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(900, 600);
        this.ctx.lineTo(930, 640);
        this.ctx.stroke();
        break;
      
    }
  }

  gameOver(errorsLeft) {
    if(errorsLeft <= 0){
    this.ctx.font = "30px Arial"
    this.ctx.fillText('GAME OVER!', 400,500)
    /* let imgGameOver = new Image()
    imgGameOver.src = '../images/gameover.png'
    this.ctx.drawImage(imgGameOver, 300,300,700,400) */
    // ... your code goes here
    }
  } 

  winner() {
    // ... your code goes here
  }
}
