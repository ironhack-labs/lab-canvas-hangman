constructor(secretWord) {
  this.context = document.getElementById('hangman').getContext('2d');
  // ... your code goes here
  this.secretWord = secretWord
  this.gameOverImg = new Image()
  this.gameOverImg.src = "../images/gameover.png"
  this.winnerImg = new Image()
  this.winnerImg.src = "../images/awesome.png"
  this.createBoard()

}

createBoard() {
  // ... your code goes here
  this.context.clearRect(0, 0, 1200, 800)
  this.drawLines()

}

drawLines() {
  // ... your code goes here
  for(let i=0; i< this.secretWord.length;i++){
    this.context.beginPath()
    this.context.moveTo(250+i*70,600)
    this.context.lineTo(300+i*70,600)
    this.context.stroke()
    this.context.closePath()
  }
}

writeCorrectLetter(index) {
  // ... your code goes here
  let letter = index
  this.context.font = "50px Arial"
  for(let i=0; i< this.secretWord.length;i++){
    if (letter === this.secretWord[i]){
      this.context.fillText(letter,265+i*70,600)
    }
  }

}

writeWrongLetter(letter, errorsLeft) {
  // ... your code goes here
  //let letter = letter
  this.context.clearRect(410, 100, 900, 150)

  this.context.font = "30px Arial"

  const errorsString = `Errors Left: ${errorsLeft}`
  this.context.fillText(errorsString,800,200)

  for(let i=0; i < letter.length ; i++){
    this.context.fillText(letter[i],500+i*70,300)
  }

}

drawHangman(errorsLeft) {
  // ... your code goes here
  console.log(errorsLeft)
  switch (errorsLeft){
    case 9:
      this.context.lineWidth = 5
      this.context.beginPath();
      this.context.moveTo(50, 600);
      this.context.lineTo(200, 600);
      this.context.lineTo(125, 525);
      this.context.lineTo(50, 600);
      this.context.stroke();
      this.context.closePath();
      break;
    case 8:
      this.context.moveTo(125, 525);
      this.context.lineTo(125, 150);
      this.context.stroke();
      break;
    case 7:
      this.context.moveTo(125, 150);
      this.context.lineTo(350, 150);
      this.context.stroke();
      break;
    case 6:
      this.context.moveTo(350, 150);
      this.context.lineTo(350, 200);
      this.context.stroke();
      break;
    case 5:
      this.context.beginPath();
      this.context.arc(350, 250, 50, 0, 2 * Math.PI);
      this.context.stroke();
      break;
    case 4:
      this.context.moveTo(350, 300);
      this.context.lineTo(350, 450);
      this.context.stroke();
      break;
    case 3:
      this.context.moveTo(350, 350);
      this.context.lineTo(300, 310);
      this.context.stroke();
      break;
    case 2:
      this.context.moveTo(350, 350);
      this.context.lineTo(400, 310);
      this.context.stroke();
      break;
    case 1:
      this.context.moveTo(350, 450);
      this.context.lineTo(300, 490);
      this.context.stroke();
      break;
    case 0:
      this.context.moveTo(350, 450);
      this.context.lineTo(400, 490);
      this.context.stroke();
      break;
  }
}

gameOver() {
  // ... your code goes here
  const img = new Image()
  img.src = "../images/gameover.png"
  img.onload = this.context.drawImage(img,200,100,400,400)
}

winner() {
  // ... your code goes here
  const img = new Image()
  img.src = "../images/awesome.png"
  img.onload = this.context.drawImage(img,200,100,400,400)
}