const canvas = document.getElementById('my-canvas');
canvas.width = 1000;
canvas.height = 500;
const context = canvas.getContext('2d');
// CONFIGURAÇAO DE COR DE LINHAS DENTRO DO CANVAS (PINCELADA)
context.strokeStyle = 'red';
context.fillStyle = 'green';
context.font = '30px Arial';
context.textAlign = 'center';
// RETANGULOS
// context.strokeRect(500, 100, 100, 100);
// context.fillRect(500, 225, 100, 100);
// setTimeout(() => {
//   context.clearRect(0, 0, 1000, 500);
// }, 2000)
// CIRCULOS / ARCOS --- Pacman com boca aberta ;-)
// context.beginPath();
// context.arc(500, 250, 200, Math.PI / 180 * 45, Math.PI / 180 * 315);
// context.lineTo(500, 250);
// context.fill();
// context.closePath();
// Desenhar Linhas!!!
context.beginPath();
context.moveTo(50, 50);
context.lineTo(175, 125);
context.lineTo(300, 50);
context.fill();
context.closePath();
// IMAGEM E ANIMAÇAO
const image = new Image();
image.src = './images/Sports-Ball-PNG-Photos.png';
let x = 10;
let y = 10;
isIncreasingSize = true;
function drawMyAnimatedImage() {
  context.clearRect(0, 0, 1000, 500);
  context.drawImage(image, x, y, x, y);
  if (isIncreasingSize) {
    x += 2;
    y += 2;
  } else {
    x -= 2;
    y -= 2;
  }
  if (y > 250) {
    isIncreasingSize = false;
  } else if (y < 10) {
    isIncreasingSize = true;
  }
}
image.onload = () => {
  setInterval(() => {
    drawMyAnimatedImage();
  }, 10);
}
// EXEMPLO DE IMPLEMENTACAO DE JOGO DA FORCA!!!
const word = 'java';
for (let i = 0; i < word.length; i += 1) {
  const xInicial = 50 + i * 50;
  const xFinal = 85 + i * 50;
  console.log(`Interação ${i + 1}`);
  console.log(`Valor de "i" ---> ${i}`)
  console.log(xInicial);
  console.log(xFinal);
  console.log();
  context.beginPath();
  context.moveTo(xInicial, 300);
  context.lineTo(xFinal, 300);
  context.stroke();
  context.closePath();
}
window.onkeydown = event => {
  // event.key -- como verificar se ele existe???
  if (word.indexOf(event.key) !== -1) {
    for (let i = 0; i < word.length; i += 1) {
      if (event.key.toUpperCase() === word[i].toUpperCase()) {
        const xInicial = 50 + i * 50;
        const xFinal = 85 + i * 50;
        context.fillText(word[i].toUpperCase(), (xFinal - xInicial) / 2 + xInicial, 295);
      }
    }
  } else {
    // alert(`Letra "${event.key}" não existe!! Escolha outra!!!`);
  }
};