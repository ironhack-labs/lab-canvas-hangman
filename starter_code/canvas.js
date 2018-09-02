function draw() {
  var canvas = document.getElementById('hangman');
  var ctx = canvas.getContext('2d');

  ctx.beginPath();

  ctx.moveTo(300,400);
  ctx.lineTo(500,400);
  ctx.stroke();

  ctx.moveTo(400,400);
  ctx.lineTo(400,100);
  ctx.stroke();

  ctx.moveTo(400,100);
  ctx.lineTo(500,100);
  ctx.stroke();

  ctx.moveTo(500,100);
  ctx.lineTo(500,130);
  ctx.stroke()

  }
  draw()
