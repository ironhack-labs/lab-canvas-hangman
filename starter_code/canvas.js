function Hangman(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d')
}
this.ctx = document.getElementById('hangman').getContext('2d')

this.ctx.fillStyle = 'white'
this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

ctx.beginPath()

ctx.beginPath()
// starting position is x=50, y=50
ctx.moveTo(600, 80)
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50)
ctx.strokeStyle = 'black'
ctx.lineWidth = 20
// .stroke() executes the drawing
ctx.stroke()

// start a new line from these coordinates: x=250, y=50
ctx.moveTo(250, 50)
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 600)
// .stroke() executes the drawing
ctx.stroke()

// close the path
ctx.closePath()
