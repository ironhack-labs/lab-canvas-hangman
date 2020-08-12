class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    this.canvasWidth = 1200;
    this.canvasHeight = 800;
    this.indexError = 0;
    this.initialPosX = 700;
    this.initialPosY = 600;
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight);
    this.drawLines();
    this.context.font = "40px Georgia";
    this.context.fillText("Letras que no", 850, 100)
  }

  drawLines() {
    // ... your code goes here
    // hola tiene que ser 4 lineas
    //_ _ _ _

    let posX = this.initialPosX;
    let posY = this.initialPosY;

    for(let i = 0; i < this.secretWord.length; i++)
    {
      this.context.beginPath();
      this.context.moveTo(posX, posY)
      posX = posX + 25;
      this.context.lineTo(posX, posY)
      this.context.stroke();
      this.context.closePath(); 
      posX = posX + 25;
    }

  }

  writeCorrectLetter(index) {
    // ... your code goes here    
    let posX = this.initialPosX + (50* index);
    let posY = this.initialPosY;

    this.context.font = "40px Georgia";
    this.context.fillText(this.secretWord[index], posX, posY)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let posX = 1100 - (50 * this.indexError);
    let posY = 200;
    this.context.font = "40px Georgia";
    this.context.fillText(letter, posX, posY)
    this.drawHangman(errorsLeft)
    this.indexError++;
  }

  drawHangman(errorsLeft) {
    // ... your code goes here

    switch (errorsLeft) {
      case 9:        
      this.context.strokeStyle = "#000000";
      this.context.beginPath();
      this.context.moveTo(200,600)
      this.context.lineTo(400,600)
      this.context.stroke();
      this.context.closePath(); 
        break;
      
      case 8:
      this.context.strokeStyle = "#0000ff";
      this.context.beginPath();
      this.context.moveTo(300,600)
      this.context.lineTo(300,250)
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 7:
      this.context.strokeStyle = "#00ffff";
      this.context.beginPath();
      this.context.moveTo(300,250)
      this.context.lineTo(450,250)
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 6:
      this.context.strokeStyle = "#00dddd";
      this.context.beginPath();
      this.context.moveTo(450,250)
      this.context.lineTo(450,300)
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 5:
      this.context.strokeStyle = "red";
      this.context.beginPath();
      this.context.arc(450,325, 25, 0, 2 * Math.PI);
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 4:
      this.context.strokeStyle = "black";
      this.context.beginPath();
      this.context.moveTo(450,350)
      this.context.lineTo(450,450)
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 3:
      this.context.strokeStyle = "brown";
      this.context.beginPath();
      this.context.moveTo(450,450)
      this.context.lineTo(400,550)
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 2:
      this.context.strokeStyle = "green";
      this.context.beginPath();
      this.context.moveTo(450,450)
      this.context.lineTo(500,550)
      this.context.stroke();
      this.context.closePath(); 
      break;

      case 1:
      this.context.strokeStyle = "orange";
      this.context.beginPath();
      this.context.moveTo(450,400)
      this.context.lineTo(500,350)
      this.context.stroke();
      this.context.closePath();
      break;

      case 0:
      this.context.strokeStyle = "purple";
      this.context.beginPath();
      this.context.moveTo(450,400)
      this.context.lineTo(400,350)
      this.context.stroke();
      this.context.closePath();
      break;
    
      default:
        break;
    } 
  }

  gameOver() {
    // ... your code goes here
    //por alguna razon no funciona el drawImage
    let image = new Image()
    image.src = "https://www.seekpng.com/png/detail/239-2391119_game-over-sticker-game-over-button-png.png";
    this.context.drawImage(image, 10 ,10)
    document.querySelector(".game-logo").src = image.src;
    alert("Perdiste")
  }

  winner() {
    // ... your code goes here
    let image = new Image()
    image.src = "https://f4.bcbits.com/img/a0403740897_5.jpg";
    this.context.drawImage(image, 10 ,10)
    document.querySelector(".game-logo").src = image.src;
    //alert("ganaste")
  }
}
