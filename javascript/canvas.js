class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;

    // Image for the Game Over and the Winner
    this.imgGameOver = new Image();
    this.imgGameOver.src = '/images/gameover.png';
    this.imgAwesome = new Image();
    this.imgAwesome.src = '/images/awesome.png';

    // Width and heigth of the wrong letters (to be changed in the method writeWrongLetter())
    this.wrongLetterWidth = 1050;
    this.wrongLetterHeight = 70;
  }

  createBoard() {
    // Clearing/creating the canvas for the game
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    // Defining the height and width of the lines
    const constantHeight = 740;
    let changingWidth = 80;

    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'black';


    // Printing a line for each letter of the secret word and stablishing the space between them
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(changingWidth, constantHeight);
      this.ctx.lineTo(changingWidth + 50, constantHeight);
      this.ctx.stroke();
      changingWidth += 100;
    }
  }

  writeCorrectLetter(index) {
    // Setting the height and width of the letters in the canvas
    const constantHeight = 730;
    let changingWidth = 80;

    // Setting the font and the color of the font
    this.ctx.fontStyle = 'black';
    this.ctx.font = '48px Impact';

    // Writting the correct letter when pressed above the line in caps
    this.ctx.fillText(hangman.secretWord[index].toUpperCase(), (changingWidth + (index * 100) + 10), constantHeight, 100);
  }

  writeWrongLetter(letter, errorsLeft) {
    // Setting the font and the color of the font
    this.ctx.fontStyle = 'black';
    this.ctx.font = '48px Impact';

    // Writting the wrong letter on the left side when pressed 
    this.ctx.fillText(letter.toUpperCase(), this.wrongLetterWidth, this.wrongLetterHeight);
    this.drawHangman(errorsLeft);

    // Adding height so that the next letter doesn't appear on the same spot in the canvas
    this.wrongLetterHeight += 70;
  }

  drawHangman(errorsLeft) {
    // Draw a part of the hangman when an error is commited
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'black';

    switch (errorsLeft) {
      case 9:
        // Base of the hangman
        this.ctx.beginPath();
        this.ctx.moveTo(80, 650);
        this.ctx.lineTo(170, 650);
        this.ctx.lineTo(125, 610);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 8:
        // Vertical line
        this.ctx.beginPath();
        this.ctx.moveTo(125, 610);
        this.ctx.lineTo(125, 110);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 7:
        // Horizontal line
        this.ctx.beginPath();
        this.ctx.moveTo(125, 110);
        this.ctx.lineTo(500, 110);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 6:
        // Rope
        this.ctx.beginPath();
        this.ctx.moveTo(500, 110);
        this.ctx.lineTo(500, 210);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 5:
        // Head
        this.ctx.beginPath();
        this.ctx.arc(500, 250, 40, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 4:
        // Body
        this.ctx.beginPath();
        this.ctx.moveTo(500, 290);
        this.ctx.lineTo(500, 450);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 3:
        // Left leg
        this.ctx.beginPath();
        this.ctx.moveTo(500, 450);
        this.ctx.lineTo(450, 500);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 2:
        // Right leg
        this.ctx.beginPath();
        this.ctx.moveTo(500, 450);
        this.ctx.lineTo(550, 500);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 1:
        // Left arm
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(450, 350);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 0:
        // Right arm
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(550, 350);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
    }
  }

  gameOver() {
    // Draw the imgGameOver when the errors left are 0
    this.ctx.drawImage(this.imgGameOver, 315, 280, 570, 240);
  }

  winner() {
    // Draw the imgAwesome when the secret word has been guessed
    this.ctx.drawImage(this.imgAwesome, 164, 91, 872, 618);
  }
}