class HangmanCanvas {
  constructor(secretWord) {
      this.canvas = document.getElementById('hangman')
      this.context = this.canvas.getContext('2d');
      this.secretWord = secretWord
  }
  createBoard() {
      // ... your code goes here
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawLines()
  }
  drawLines() {
      // ... your code goes here
      console.log("entra a esa funcion");
      for (let i = 0; i < this.secretWord.length; i++) {
          this.context.beginPath()
          this.context.moveTo(370 + 80 * i, 700)
          this.context.lineTo(430 + 80 * i, 700)
          this.context.stroke()
          this.context.closePath()
      }
  }
  writeCorrectLetter(index) {
      // ... your code goes here
      console.log(index.length);
      if (typeof index.length === "undefined") {
          this.context.font = "60px Arial";
          this.context.fillText(this.secretWord[index], 385 + 80 * index, 690);

      } else {
          index.forEach((element, i) => {

              this.context.font = "60px Arial";
              this.context.fillText(this.secretWord[element], 385 + 80 * element, 690);

          });




      }

  }
  writeWrongLetter(letter = [], errorsLeft) {
      // ... your code goes 
      let y = 390
      let x = 0
      letter.forEach((element, index) => {
          x = 800 + 80 * index;
          this.context.font = "60px Arial"
          console.log(900 + 80 * index);
          if (900 + 80 * index >= 1300) {
              y = 450;
              x -= 400;
          }
          console.log(errorsLeft);
          if (errorsLeft === 0) {
              console.log("perdiste");
              this.gameOver();
          }
          this.context.fillText(element, x, y)

      });

  }
  drawHangman(errorsLeft) {
      // ... your code goes here
      // PINTAR EL AHORCADO
      // Cada vez que yo me equivoco, se debe de pintar una línea.
      // Cada pintada depende del errorLeft

      console.log(errorsLeft);
      switch (errorsLeft) {

          case 9:
              this.context.beginPath()
              this.context.moveTo(50, 700)
              this.context.lineTo(150, 700)
              this.context.lineTo(100, 650)
              this.context.lineTo(50, 700)
              this.context.stroke()
              this.context.closePath()
              break;


          case 8:
              this.context.beginPath()
              this.context.moveTo(100, 650)
              this.context.lineTo(100, 150)
              this.context.stroke();
              this.context.closePath();
              break;

          case 7:
              this.context.beginPath()
              this.context.moveTo(100, 150)
              this.context.lineTo(300, 150)
              this.context.stroke();
              this.context.closePath();
              break;

          case 6:
              this.context.beginPath()
              this.context.moveTo(300, 150)
              this.context.lineTo(300, 200)
              this.context.stroke();
              this.context.closePath();
              break;

          case 5:
              this.context.beginPath()
              this.context.arc(300, 240, 45, 0, Math.PI * 2)
              this.context.stroke();
              this.context.closePath();
              break;
          case 4:
              this.context.beginPath()
              this.context.moveTo(300, 280)
              this.context.lineTo(300, 500)
              this.context.stroke();
              this.context.closePath();
              break;

          case 3:
              this.context.beginPath()
              this.context.moveTo(300, 500)
              this.context.lineTo(200, 600);

              this.context.stroke();
              this.context.closePath();

              this.context.beginPath()
              this.context.moveTo(300, 500)

              this.context.lineTo(400, 600)
              this.context.stroke();
              this.context.closePath();
              break;

          case 2:
              this.context.beginPath()
              this.context.moveTo(300, 350)
              this.context.lineTo(200, 400);

              this.context.stroke();
              this.context.closePath();


              break;

          case 1:
              this.context.beginPath()
              this.context.moveTo(300, 350)
              this.context.lineTo(400, 400);

              this.context.stroke();
              this.context.closePath();


              break;

          case 0:
              this.context.beginPath()
              this.context.arc(280, 240, 10, 0, Math.PI * 2)

              this.context.stroke();
              this.context.closePath();

              this.context.beginPath()

              this.context.arc(320, 240, 10, 0, Math.PI * 2)
              this.context.stroke();
              this.context.closePath();


              break;
      }
  }
  gameOver() {
      const url = new Image()

      url.src = "./images/gameover.png";

      url.onload = () => {

          this.context.drawImage(url, 200, 200);


      }
  }
  winner() {

      const url = new Image()

      url.src = "./images/awesome.png";

      url.onload = () => {

              this.context.drawImage(url, 200, 200);


          }
          // ... your code goes here

  }
}