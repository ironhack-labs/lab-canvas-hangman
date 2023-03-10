class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.context.font = "30px Arial";
    this.correctLetterLineXposition = 300;
    this.correctLetterLineYposition = 685;
    this.wrongLetterLineXposition = 600;
    this.wrongLetterLineYposition = 200;
    this.hangmanXposition = 150;
    this.hangmanYposition = 700;
  }

  createBoard() {
    this.context.clearRect(
      0,
      0,
      document.getElementById("hangman").width,
      document.getElementById("hangman").height
    );
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(
        this.correctLetterLineXposition + i * 60,
        this.correctLetterLineYposition
      );
      this.context.lineTo(
        this.correctLetterLineXposition + 50 + i * 60,
        this.correctLetterLineYposition
      );
    }
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(letter) {
    const indexes = this.indexOfAll(letter);
    indexes.forEach((index) => {
      const x = this.correctLetterLineXposition + 20 + index * 60;
      const y = this.correctLetterLineYposition;
      this.context.fillText(letter.toUpperCase(), x, y);
    });
  }

  indexOfAll(letter) {
    return this.secretWord.split("").reduce((acc, curr, i) => {
      if (curr == letter) {
        acc.push(i);
      }
      return acc;
    }, []);
  }

  writeWrongLetter(letter, errorsLeft) {
    const x = this.wrongLetterLineXposition + errorsLeft * 50;
    const y = this.wrongLetterLineYposition;
    this.context.fillText(letter.toUpperCase(), x, y);
  }
  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(this.hangmanXposition, this.hangmanYposition);
        this.context.lineTo(this.hangmanXposition + 100, this.hangmanYposition);
        this.context.lineTo(
          this.hangmanXposition + 50,
          this.hangmanYposition - 50
        );
        this.context.lineTo(this.hangmanXposition, this.hangmanYposition);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 50,
          this.hangmanYposition - 50
        );
        this.context.lineTo(
          this.hangmanXposition + 50,
          this.hangmanYposition - 500
        );
        this.context.stroke();
        this.context.closePath();

        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 50,
          this.hangmanYposition - 500
        );
        this.context.lineTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 500
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 500
        );
        this.context.lineTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 450
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.arc(
          this.hangmanXposition + 300,
          this.hangmanYposition - 400,
          50,
          0,
          2 * Math.PI
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        //sixth
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 350
        );
        this.context.lineTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 200
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 200
        );
        this.context.lineTo(
          this.hangmanXposition + 350,
          this.hangmanYposition - 150
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 200
        );
        this.context.lineTo(
          this.hangmanXposition + 250,
          this.hangmanYposition - 150
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 275
        );
        this.context.lineTo(
          this.hangmanXposition + 350,
          this.hangmanYposition - 275
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(
          this.hangmanXposition + 300,
          this.hangmanYposition - 275
        );
        this.context.lineTo(
          this.hangmanXposition + 250,
          this.hangmanYposition - 275
        );
        this.context.stroke();
        this.context.closePath();
        break;
    }
  }

  gameOver() {
    const gameOverImg = document.createElement("img");
    gameOverImg.src = "../images/gameover.png";
    gameOverImg.onload = () => this.context.drawImage(gameOverImg, 500, 300);
  }

  winner() {
    const winnerImg = document.createElement("img");
    winnerImg.src = "../images/awesome.png";
    winnerImg.onload = () => this.context.drawImage(winnerImg, 200, 100);
  }
}
