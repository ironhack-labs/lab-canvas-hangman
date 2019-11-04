class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.loop = [
      () => {
        // triangulo
        this.ctx.beginPath();
        this.ctx.moveTo(0, 800);
        this.ctx.lineTo(90, 747);
        this.ctx.lineTo(175, 800);
        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();
        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        this.ctx.beginPath();
        this.ctx.moveTo(90, 747);
        this.ctx.lineTo(90, 24);
        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // techo
        this.ctx.beginPath();
        this.ctx.moveTo(90, 24);
        this.ctx.lineTo(543, 24);
        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // soga
        this.ctx.beginPath();
        this.ctx.moveTo(543, 24);
        this.ctx.lineTo(543, 75);
        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // cabeza
        this.ctx.beginPath();
        this.ctx.moveTo(543, 75);

        this.ctx.lineTo(543, 75);
        this.ctx.arc(543, 135, 60, 0, 2 * Math.PI);

        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // tronco
        this.ctx.beginPath();
        this.ctx.moveTo(543, 195);

        this.ctx.lineTo(543, 475);

        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // brazo
        this.ctx.beginPath();
        this.ctx.moveTo(543, 240);

        this.ctx.lineTo(450, 245);

        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // brazo
        this.ctx.beginPath();
        this.ctx.moveTo(543, 240);

        this.ctx.lineTo(636, 245);

        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // pierna
        this.ctx.beginPath();
        this.ctx.moveTo(543, 475);

        this.ctx.lineTo(450, 600);

        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      },
      () => {
        // pierna
        this.ctx.beginPath();
        this.ctx.moveTo(543, 475);

        this.ctx.lineTo(636, 600);

        this.ctx.closePath();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#666666";
        this.ctx.stroke();

        this.ctx.fillStyle = "#FFCC00";
        this.ctx.fill();
      }
    ];
    this.notSoSecretWord = "*".repeat(secretWord.length);
    this.errors = "";
    this.tries = 10;
  }



  createBoard() {
    for (let i = 0; i < 10 - this.tries; i++) {
      this.loop[i](this);
    }
    this.drawLines();
    this.drawStars();
    this.drawErrors();
  }

  gameOver() {
    const img = new Image();
    img.src = "./images/gameover.png";
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0);
    };
  }

  drawLines() {
    this.ctx.save();
    this.ctx.translate(245, 750);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(40, 0);
      this.ctx.closePath();
      this.ctx.lineWidth = 10;
      this.ctx.strokeStyle = "#666666";
      this.ctx.stroke();
      this.ctx.fillStyle = "#FFCC00";
      this.ctx.fill();
      this.ctx.translate(60, 0);
    }
    this.ctx.restore();
  }

  drawStars() {
    this.ctx.save();
    this.ctx.font = "30px Comic Sans MS";
    this.ctx.fillStyle = "red";
    this.ctx.translate(245, 725);
    for (let i = 0; i < this.notSoSecretWord.length; i++) {
      if (this.notSoSecretWord[i] === "*") {
        this.ctx.translate(60, 0);
        continue;
      }
      this.ctx.fillText(this.notSoSecretWord[i], 15, 0);
      this.ctx.translate(60, 0);
    }
    this.ctx.restore();
  }

  updateErrors(errs, left) {
    this.errors = errs;
    this.tries = left;
    this.createBoard();
  }

  drawErrors() {
    this.ctx.save();
    this.ctx.font = "30px Comic Sans MS";
    this.ctx.fillStyle = "red";
    this.ctx.translate(700, 150);
    for (let i = 0; i < this.errors.length; i++) {
      this.ctx.fillText(this.errors[i], 15, 0);
      this.ctx.translate(60, 0);
    }
    this.ctx.restore();
  }

  updateNotSoSecret(char, index) {
    const temp = this.notSoSecretWord.split("");
    temp[index] = char;
    this.notSoSecretWord = temp.join("");
  }

  decodeSecret(partOfSecret) {
    const secretToArray = this.secretWord.toUpperCase().split("");
    const partial = partOfSecret.split("");
    for (let i = 0; i < secretToArray.length; i++) {
      for (let j = 0; j < partial.length; j++) {
        if (secretToArray[i] === partial[j])
          this.updateNotSoSecret(secretToArray[i], i);
      }
    }
    this.createBoard();
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}


  winner() {
    const img = new Image();
    img.src = "./images/awesome.png";
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0);
    };
  }
}