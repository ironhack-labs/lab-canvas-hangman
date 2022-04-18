//canvas.js
class HangmanCanvas {
  constructor(secretWord, guessedLetters) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.guessedLetters = guessedLetters;
    this.gameOverImg = new Image();
    this.gameOverImg.src = "images/gameover.png";
    this.winnerImg = new Image();
    this.winnerImg.src = "images/awesome.png";
    this.wrongletters = []
    this.letters = []
    this.createBoard();
    this.errors = 0
    // ... your code goes here
  }
  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }
  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(200 + i * 70, 600);
      this.context.lineTo(250 + i * 70, 600);
      this.context.stroke();
      this.context.closePath();
      // console.log("Esta corriendo?");
    }
  }
  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = index
    this.context.font = "50px Arial"
    for(let i=0; i< this.secretWord.length;i++){
      if (letter === this.secretWord[i]){
        this.context.fillText(letter,210+i*70,600)
          this.letters.push(letter)
         console.log(this.letters)

      } 
    }
  }
  writeWrongLetter(letters, errorsLeft) {
    // ... your code goes here

    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(30 , 600);
        this.context.lineTo(150 , 600);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(30 , 600);
        this.context.lineTo(93 , 550);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(150 , 600);
        this.context.lineTo(93 , 550);
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(93 , 550);
        this.context.lineTo(93 , 200);
        this.context.stroke();
        this.context.closePath();
        break      
      case 5:
        this.context.beginPath();
        this.context.moveTo(93 , 200);
        this.context.lineTo(300 , 200);
        this.context.stroke();
        this.context.closePath();
        break;
      case 4 :
        this.context.beginPath();
        this.context.moveTo(300 , 200);
        this.context.lineTo(300 , 250);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3 :
        this.context.beginPath();	  
        this.context.arc(300,280,30, 0, 2*Math.PI);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(300 , 310);
        this.context.lineTo(300 , 420);
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(300 , 420);
        this.context.lineTo(255 , 480);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(300 , 420);
        this.context.lineTo(345 , 480);
        this.context.stroke();
        this.context.closePath();
        break;

    }
    
    this.context.font = "50px Arial"
    for(let i = 0;i<letters.length;i++){
      console.log(letters[i])
      this.context.fillText(letters[i],410+i*50,200)
    }


  }
  drawHangman(errorsLeft) {
    // ... your code goes here
  }
  gameOver() {
    // ... your code goes here
    this.context.drawImage(this.gameOverImg,200,200,800,400)

  }
  winner() {
    // ... your code goes here
    this.context.drawImage(this.winnerImg,200,200,800,400)

  }
}