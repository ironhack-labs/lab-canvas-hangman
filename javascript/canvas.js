class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.lineWidth = 10;
    this.context.strokeStyle = '#4a4a44'; // grey
    this.secretWord = secretWord;
    
  }

  createBoard() {
    // clear canvas
    this.context.clearRect(0, 0, 1200, 800); // (x,y, canvas.width, canvas.height)
    // call drawLines
    this.drawLines();
  }

  drawLines() {
    console.log(this.secretWord.length);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(200 + i * 80, 700); // 200 - 250 --> 50px each line -> 200 + 1*80 --> x -> 280
      this.context.lineTo(250 + i * 80, 700);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    // amsterdam 
    // index = [1,8]
    console.log(index);
    console.log(this.secretWord)
    this.context.fillStyle = '#9DA400'; 
    this.context.font = '48px Roboto';
    // context.fillText('string', x, y);
    index.forEach( item => this.context.fillText(this.secretWord[item].toUpperCase(), 210 + item * 80, 680))
  }

  writeWrongLetter(letter, errorsLeft) {
    // write letters not included in secretWord
    // write it on our board
    // console.log(letter)
    // console.log(hangman.letters)
    let indexToDraw;
    if (errorsLeft > 0) {
      debugger
      this.context.fillStyle = '#4a4a44';
      this.context.font = '48px Roboto';
      hangman.letters.forEach((item, index) => {
        if(item === letter) {
          indexToDraw = index;
        }
      });
      this.context.fillText(letter.toUpperCase(), 600 + (indexToDraw * 50), 200);
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // create the img object
    const gameOverImg = new Image();
    // "src" has to point as the image is used in HTML file
    gameOverImg.src = '../images/gameover.png';
    // set the start position of our image
    let imgX = 300;
    let imgY = 300;
    // ctx.drawImage(whichImage, x, y, width, height);
    gameOverImg.onload = () => { // once the image isloaded
      this.context.drawImage(gameOverImg, imgX, imgY);
    };
  }

  winner() {
    const winnerImg = new Image();
    winnerImg.src = '../images/awesome.png';
      // set the start position of our image
      let imgX = 180;
      let imgY = 40;
    winnerImg.onload = () => { // once the image isloaded
      this.context.drawImage(winnerImg, imgX, imgY);
    };

  }
}
