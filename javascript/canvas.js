let lineaX=100
let lineaY=500
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord= secretWord
    // ... your code goes here
  }

  createBoard() {
    console.log('limpio tablero')
    this.context.clearRect(0,0,1200,800);
    this.drawLines();

  }

  drawLines() {
    console.log(this.secretWord)
   // console.log(this.secretWord.length)
    //dependiendo la longitud de la palabra son las lineas que dibuja
    for(let i = 0;i<this.secretWord.length;i++){
      this.context.beginPath();
      lineaX+=100
//donde poner el lapiz
this.context.moveTo(lineaX+5,lineaY)
//indicar hacia donde se va mover pero no la pinta aun
this.context.lineTo(lineaX+50,lineaY)
//Stroke es dibujar la linea
this.context.stroke()
    }
    lineaX=100
    lineaY=500
  }

  writeCorrectLetter(index) {
    //llamo al string con las letras que se han tecleado y lo convierto en array
    let acomodarPalabraAdivinada=hangman.guessedLetters.split("")
    let palabraNormal=this.secretWord.split("");
    /* METODOS QUE ESTABA INTENTANDO PARA ARREGLAR LA PALABRA EN PPOSISIOCON
    let arrGuia=Array(palabraNormal.length)
    arrGuia.push(acomodarPalabraAdivinada);

    for(let i=0;i<palabraNormal.length;i++){
      if(acomodarPalabraAdivinada[i]==palabraNormal[i]){
      console.log("estan en la misma posicion")
     


    }
    else{

      console.log("NO estan en la misma posision")

    }
   
   }
   console.log("EL array guia ",arrGuia)
   */
   //VOLVI UNIR EL ARRAY NADAMAS PARA ESCRIBIRLO
   acomodarPalabraAdivinada=acomodarPalabraAdivinada.join("")
   this.context.font="48px arial"
  this.contextfillStyle = "blue"
  this.context.fillText(`${acomodarPalabraAdivinada}`,lineaX+100,lineaY-5)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
