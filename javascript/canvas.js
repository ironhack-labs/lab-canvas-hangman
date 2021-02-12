class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.HangmanParts = [
      "head",
      "body",
      "rightArm",
      "rightHand",
      "leftArm",
      "leftHand",
      "rightLeg",
      "rightFoot",
      "leftLeg",
      "leftFoot",
    ];
    this.context.strokeStyle = "black";
    this.context.textAlign = "center";
    this.context.font = "48px Georgia";
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.height, this.context.width); //limpa todos os pixels de um retângulo definido na posição (x, y) e tamanho (width (largura), height (altura)) para uma cor preta transparente, apagando algum conteúdo anterior.

    // Base
    this.drawLines(150, 600, 225, 650);
    this.drawLines(225, 650, 75, 650);
    this.drawLines(75, 650, 150, 600);

    // Linhas da forca
    this.drawLines(150, 600, 150, 200);
    this.drawLines(150, 200, 400, 200);
    this.drawLines(400, 200, 400, 300);

    //letras espaçadas
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.drawLines(400 + i * 75, 650, 450 + i * 75, 650);
    }
  }

  drawLines(x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    const guessedLetter = this.secretWord[index];

    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.secretWord[i] === guessedLetter) {
        this.context.fillText(guessedLetter.toUpperCase(), 425 + i * 75, 645);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    const letterOrder = 10 - errorsLeft;

    this.context.fillText(letter.toUpperCase(), 450 + letterOrder * 75, 250);
  }

  drawHangman(errorsLeft) {
    const errorOrder = 10 - errorsLeft;
    const hangmanPart = this.hangmanParts[errorOrder - 1];

    switch (hangmanPart) {
      case "head":
        this.context.beginPath();
        this.context.arc(400, 330, 30, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        this.drawLines(385, 315, 390, 320);
        this.drawLines(390, 315, 385, 320);
        this.drawLines(415, 315, 410, 320);
        this.drawLines(410, 315, 415, 320);
        this.drawLines(390, 340, 410, 340);
        break;
      case "body":
        this.drawLines(400, 360, 400, 480);
        break;
      case "rightArm":
        this.drawLines(400, 390, 430, 440);
        break;
      case "leftArm":
        this.drawLines(400, 390, 370, 440);
        break;
      case "rightLeg":
        this.drawLines(400, 480, 430, 550);
        break;
      case "leftLeg":
        this.drawLines(400, 480, 370, 550);
        break;
      case "rightHand":
        this.drawLines(430, 440, 440, 435);
        break;
      case "leftHand":
        this.drawLines(370, 440, 360, 435);
        break;
      case "rightFoot":
        this.drawLines(430, 550, 445, 540);
        break;
      case "leftFoot":
        this.drawLines(370, 550, 355, 540);
        break;
      default:
        console.log("Part does not exist");
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
