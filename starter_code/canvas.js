let canvas = document.getElementById('hangman');
let ctx = canvas.getContext('2d');
let storeLettersPositions = [];

const looseImg = new Image()
looseImg.src = './images/gameover.png';
const winImg = new Image()
winImg.src = './images/awesome.png';

function drawHangman(lives) {
  switch(lives) {
    case 9:
      drawBase();
    break;
    case 8:
      drawBar();
    break;
    case 7:
      drawBar2();
    break;
    case 6:
      drawBar3();
    break;
    case 5:
      drawHead();
    break;
    case 4:
      drawBody();
    break;
    case 3:
      drawArm1();
    break;
    case 2:
      drawArm2();
    break;
    case 1:
      drawLeg1();
    break;
    case 0:
      drawLeg2();
    break;
  }
}

function drawBase() {
  ctx.beginPath();
  ctx.moveTo(100, 700);
  ctx.lineTo(150, 650);
  ctx.lineTo(200, 700);
  ctx.lineTo(100, 700);
  ctx.stroke();
  ctx.closePath();
}

function drawBar() {
  ctx.beginPath();
  ctx.moveTo(150, 650);
  ctx.lineTo(150, 200);
  ctx.stroke();
  ctx.closePath();
}

function drawBar2() {
  ctx.beginPath();
  ctx.moveTo(150, 200);
  ctx.lineTo(450, 200);
  ctx.stroke();
  ctx.closePath();
}

function drawBar3() {
  ctx.beginPath();
  ctx.moveTo(450, 200);
  ctx.lineTo(450, 300);
  ctx.stroke();
  ctx.closePath();
}

function drawHead() {
  ctx.beginPath();
  ctx.arc(450, 340, 40, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
}

function drawBody() {
  ctx.beginPath();
  ctx.moveTo(450, 380);
  ctx.lineTo(450, 580);
  ctx.stroke();
  ctx.closePath();
}

function drawLeg1() {
  ctx.beginPath();
  ctx.moveTo(450, 580);
  ctx.lineTo(410, 640);
  ctx.stroke();
  ctx.closePath();
}

function drawLeg2() {
  ctx.beginPath();
  ctx.moveTo(450, 580);
  ctx.lineTo(490, 640);
  ctx.stroke();
  ctx.closePath();
}

function drawArm1() {
  ctx.beginPath();
  ctx.moveTo(450, 450);
  ctx.lineTo(400, 400)
  ctx.stroke();
  ctx.closePath();
}

function drawArm2() {
  ctx.beginPath();
  ctx.moveTo(450, 450);
  ctx.lineTo(500, 400);
  ctx.stroke();
  ctx.closePath();
}

function drawCharacters(word, length) {
  ctx.beginPath();
  
  let nextMove = 600;
  for(let i = 0; i < length; i++) {
    ctx.moveTo(nextMove, 700);
    ctx.lineTo(nextMove + 40, 700);
    ctx.stroke();

    storeLettersPositions.push({letter: word[i], xo: nextMove})

    nextMove += 50;
  }
  ctx.closePath();
}

function initializeCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCorrectLetters(letter) {
  const indexes = hangman.returnIndexPositions(letter);

  for(let i = 0; i < indexes.length; i++) {
    const xo = storeLettersPositions[indexes[i]].xo;

    ctx.font = "30px Comic Sans MS";
    ctx.strokeText(letter, xo + 10, 700)
  }
}

function drawAllLetters(letters) {
  ctx.font = "30px Comic Sans MS";
  ctx.strokeText(letters, 600, 400)
}

function drawLooseImg() {
  ctx.drawImage(looseImg, 300, 300)
}

function drawWinImg() {
  ctx.drawImage(winImg, 150, 100)
}
