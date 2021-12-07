let canvas = document.getElementById('hangman');
let ctx = canvas.getContext('2d');
let storeLettersPositions = [];

const looseImg = new Image()
// set the looseImg src to './images/gameover.png';
const winImg = new Image()
// set the winImg src to './images/awesome.png';

function drawHangman(lives) {

  console.log(`I have ${lives} remaining`)

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
  ctx.beginPath()
  ctx.linWidth = 12;
  ctx.strokeStyle = "green" 
  ctx.moveTo(500, 500)
  ctx.lineTo(50, 500)
  ctx.stroke()
  ctx.closePath()
}

function drawBar() {
  ctx.beginPath();
  ctx.stroke();
  ctx.closePath();
}

function drawBar2() {
}

function drawBar3() {
}

function drawHead() {
}

function drawBody() {
}

function drawLeg1() {
  ctx.beginPath();
  ctx.moveTo(450, 580);
  ctx.lineTo(410, 640);
  ctx.stroke();
  ctx.closePath();
}

function drawLeg2() {
}

function drawArm1() {
}

function drawArm2() {
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
  ctx.clearRect(0,0,canvas.width, canvas.height)
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

function drawLooseImg(){
// use drawImage()
}

function drawWinImg() {
	// use drawImage()
}