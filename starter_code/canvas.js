
function drawHangman(){
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
if(hangman.errorsLeft==9){
ctx.beginPath()
ctx.moveTo(120,900)
ctx.lineTo(160,850)
ctx.lineTo(200,900)
ctx.lineTo(120,900)
ctx.fill()
}
ctx.beginPath()
ctx.moveTo(160,850)
ctx.lineTo(160,100)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(160,100)
ctx.lineTo(450,100)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(450,100)
ctx.lineTo(450,250)
ctx.stroke()

ctx.beginPath()
ctx.arc(450,300,50,0,Math.PI*2,true)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(450,350)
ctx.lineTo(450,550)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(450,400)
ctx.lineTo(350,500)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(450,400)
ctx.lineTo(550,500)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(450,550)
ctx.lineTo(350,700)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(450,550)
ctx.lineTo(550,700)
ctx.stroke()

}