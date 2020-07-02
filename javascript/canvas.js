class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.width = 900; //800
    this.height = 800;
    this.hangManDrawFunctions = [
      // function-1 - first line of traingle
      () => {
        // console.log(`first function of ${this.height}`);
        this.context.moveTo(50, this.height - 50);
        this.context.lineTo(100, this.height - 50);
      },
      // function-2 - second line of traingle
      () => {
        this.context.lineTo(75, this.height - 75);
      },
      //function-3 - third line of traingle
      () => {
        this.context.closePath();
      },
      //function-4 - firstvertical line
      () => {
        this.context.moveTo(75, this.height - 75);
        this.context.lineTo(75, 400);
      },
      // function-5 - horizontal line
      () => {
        this.context.lineTo(300, 400);
      },
      // function-6 - small vertical line
      () => {
        this.context.lineTo(300, 450);
      },
      // function-7 - circle[ hangman face]
      () => {
        let centerX = 300;
        let centerY = 450;
        this.context.moveTo(centerX + 30, centerY + 30);
        this.context.arc(centerX, centerY + 30, 30, 0, Math.PI * 2, true);
      },
      // function-8 - draw the vertical line [body of hangman)
      () => {
        let centerX = 300;
        let centerY = 450;
        centerY += 60;
        this.context.moveTo(centerX, centerY);
        centerY += 100;
        this.context.lineTo(centerX, centerY);
      },
      // function-9 - one hand of hangman
      () => {
        let centerX = 300;
        let centerY = 610;
        this.context.lineTo(centerX + 50, centerY + 75);
      },
      //function-10 - other hand of hangman
      () => {
        let centerX = 300;
        let centerY = 610;
        this.context.moveTo(centerX, centerY);
        this.context.lineTo(centerX - 50, centerY + 75);
      }
    ];
  }

  createBoard() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }

  drawLines() {
    // ===== HANGMAN drawing =====
    // Draw lines for the Letters of Secret Word.  
    console.log(this.secretWord);
    this.context.strokeRect(0, 0, this.width - 10, this.height - 10);

    let centerX = 150;

    this.context.lineTo(centerX, this.height - 50);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(centerX, this.height - 50);
      centerX += 40;
      this.context.lineTo(centerX, this.height - 50);
      centerX += 30;
    }
    this.context.stroke();
  }

  writeFinal(index) {
    index = index || -1;
    let centerX = 150;
    let letFound;
    this.context.font = "30px Arial";
    if (index >= 0) {
      letFound = this.secretWord.charAt(index);
    }

    Array.from(this.secretWord).forEach((ele, idx) => {
      if (index >= 0) {
        if (ele === letFound) {
          this.context.fillText(ele, centerX, this.height - 70);
        }
      } else {
        this.context.fillText(ele, centerX, this.height - 70);
      }
      centerX += 70;
    });
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    let centerX = 150;
    this.context.font = "30px Arial";
    const letFound = this.secretWord.charAt(index);
    Array.from(this.secretWord).forEach((ele, idx) => {
      if (ele === letFound) {
        this.context.fillText(ele, centerX, this.height - 70);
      }
      centerX += 70;
    });
    this.context.stroke();
  }


  writeWrongLetter(letter, errorsLeft) {
    let centerWrongX = 500;
    let centerWrongY = 500;
    this.context.font = "30px Arial";
    // this.context.fillStyle = "red";
    letter.forEach((eachLetter) => {
      this.context.fillText(eachLetter, centerWrongX, centerWrongY);
      centerWrongX += 40;
    });
    // this.context.fillText("W", centerWrongX, centerWrongY);
    this.context.stroke();
  }

  drawHangman(errorsLeft) {
    const linesDraw = 10 - errorsLeft;
    this.context.beginPath();
    this.context.lineWidth = 3;
    // this.context.strokeStyle = "blue";
    for (let i = 0; i < linesDraw; i++) {
      this.hangManDrawFunctions[i]();
    }
    this.context.stroke();
  }

  gameOver() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.beginPath();
    let naturePic = new Image();
    // naturePic.src = "https://mdn.mozillademos.org/files/5395/backdrop.png";
    naturePic.src = "./images/gameover.png";
    naturePic.onload = () => {
      this.context.drawImage(naturePic, 0, 0, this.width, this.height);
      // this.context.fillRect(105, 105, 20, 20)
    };
    this.context.stroke();
  }

  winner() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.beginPath();
    let naturePic = new Image();
    // naturePic.src = "https://mdn.mozillademos.org/files/5395/backdrop.png";
    naturePic.src = "./images/awesome.png";
    naturePic.onload = () => {
      this.context.drawImage(naturePic, 0, 0, this.width, this.height - 300);
      // this.context.fillRect(105, 105, 20, 20)
    };
    this.drawLines();
    this.hangManDrawFunctions[0]();
    this.hangManDrawFunctions[1]();
    this.hangManDrawFunctions[2]();
    this.writeFinal();
    this.context.stroke();
  }
}