class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    // ... your code goes here
    this.context.linewidth = 10;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(10 + (i * 50), 750);
      this.context.lineTo(50 + (i * 50), 750); 
      this.context.stroke();
    }
  }


  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fillStyle = "salmon"
    this.context.font = "45px monospace"
    let letter = this.secretWord[index].toUpperCase();
    //console.log(letter, "palabra", this.secretWord)
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i].toUpperCase() === letter) {
        this.context.fillText(letter, 20 + 50 * i + 10 * 10, 750, 50)
      }
    }

  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    const wrongLetter = 10 - errorsLeft;
    this.context.fillStyle = "blue"
    this.context.font = "45px monospace"
    if (!this.secretWord.includes(letter)) {
      this.context.fillText(letter.toUpperCase(),500 + (60 * errorsLeft), 100)
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    //switch
  }

  gameOver() {
    // ... your code goes here
    var baseImg = new Image(400,500);
    baseImg.src ='/images/gameover.png';
    baseImg.addEventListener('load', ()=>{
      this.context.drawImage(baseImg,250,350);
    })    
  }

  winner() {
    // ... your code goes here
    var baseImg = new Image(400,500);
    baseImg.src ='/images/awesome.png';
    baseImg.addEventListener('load', ()=>{
      this.context.drawImage(baseImg,250,350);
    }) 
  }
}