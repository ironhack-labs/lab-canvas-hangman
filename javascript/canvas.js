class HangmanCanvas {
  constructor(secretWord) {
    this.space = document.getElementById('hangman');
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
    this.callDesign()
  }
  callDesign(){
    const ctx = this.context
    ctx.fillStyle='dark';
    ctx.lineWidth=2;
    
    //triangle base
    ctx.beginPath();
    ctx.moveTo(50,700);
    ctx.lineTo(200,700);
    ctx.lineTo(125,600);
    ctx.lineTo(50,700);
    ctx.stroke();
    ctx.closePath();

    // mastro

    ctx.beginPath();
    ctx.moveTo(125,600);
    ctx.lineTo(125,100);
    ctx.lineTo(350,100);
    ctx.lineTo(350,200);
    ctx.stroke();
    ctx.closePath();
     
  }
  drawLines() {
    // ... your code goes here
    this.context.fillStyle ='dark';
    
    for(let i = 0 ; i < this.secretWord.length ; i += 1){
      this.context.fillRect(300 + i * 65,700,50,3);
    }
    
  }

  writeCorrectLetter(index) {
    // ... your code goes here
      for(let i = 0 ; i < this.secretWord.length; i++){
        if(index === this.secretWord[i]){
          this.context.font='35px Arial'
          this.context.fillText(index.toUpperCase(),320 + i * 65, 700, 50)
        }
      }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    for(let i = 0 ; i < letter.length; i++){
        this.context.font='35px Arial'
        this.context.fillText(`| ${letter[i].toUpperCase()} |`,500 + i * 55, 150, 50)
    }
    //this.context.fillText(errorsLeft, 500 , 200)
  }

  drawHangman(errorsLeft) {
    const ctx = this.context
    // ... your code goes here
    //head
    if(errorsLeft === 9){
      ctx.beginPath();
      ctx.arc(350, 250, 50, 0, Math.PI * 2)
      ctx.lineWidth=2;
      ctx.strokeStyle='black';      
      ctx.stroke();
      ctx.closePath();      
    }
    //body
    if(errorsLeft === 8){
      ctx.beginPath();
      ctx.moveTo(350,300);
      ctx.lineTo(350,500);
      ctx.lineWidth=2;
      ctx.strokeStyle='black';      
      ctx.stroke();
      ctx.closePath(); 
    }
    //perna direita
    if(errorsLeft === 7){
      ctx.beginPath();
      ctx.moveTo(350,500);
      ctx.lineTo(400,600);
      ctx.lineWidth=2;
      ctx.strokeStyle='black';      
      ctx.stroke();
      ctx.closePath(); 
    }
    //perna esquerda
    if(errorsLeft === 6){
      ctx.beginPath();
      ctx.moveTo(350,500);
      ctx.lineTo(300,600);
      ctx.lineWidth=2;
      ctx.strokeStyle='black';      
      ctx.stroke();
      ctx.closePath(); 
    }
    //braço direito
    if(errorsLeft === 5){
      ctx.beginPath();
      ctx.moveTo(350,300);
      ctx.lineTo(400,400);
      ctx.lineWidth=2;
      ctx.strokeStyle='black';      
      ctx.stroke();
      ctx.closePath(); 
    } 
    //braço esquerdo
    if(errorsLeft === 4){
      ctx.beginPath();
      ctx.moveTo(350,300);
      ctx.lineTo(300,400);
      ctx.lineWidth=2;
      ctx.strokeStyle='black';      
      ctx.stroke();
      ctx.closePath(); 
    }
    //head blue
    if(errorsLeft === 3){
      ctx.beginPath();
      ctx.arc(350, 250, 50, 0, Math.PI * 2)
      ctx.lineWidth=2;
      ctx.fillStyle='rgb(160, 207, 255)';      
      ctx.fill();
      ctx.fillStyle = 'black'
      ctx.fillText(`HELP!!!`,500, 250 )
      ctx.closePath();

    } 
    //head purple
    if(errorsLeft === 2){
      ctx.beginPath();
      ctx.arc(350, 250, 50, 0, Math.PI * 2)
      ctx.lineWidth=2;
      ctx.fillStyle='rgb(190, 122, 249)';      
      ctx.fill();
      ctx.fillStyle = 'black'
      ctx.fillText(`HELP!!!`,500, 250 );
      ctx.fillStyle = 'purple'
      ctx.fillText(`HELP!!!`,500, 300 )
      ctx.closePath();

    }
    //head red
    if(errorsLeft === 1){
      ctx.beginPath();
      ctx.arc(350, 250, 50, 0, Math.PI * 2)
      ctx.lineWidth=2;
      ctx.fillStyle='rgb(255, 76, 76';      
      ctx.fill();
      ctx.clearRect(500, 200,200,200 );
      ctx.fillText(`PLEASE DON'T MISS!!!`,500, 250 );
      ctx.closePath();

    }
  }

  gameOver() {
    // ... your code goes here
    let imagem = new Image()
    imagem.src ='./images/gameover.png' 
    imagem.onload = () => {
      this.context.drawImage(imagem, 400, 300);
    };
  }

  winner() {
    // ... your code goes here
    let imagem = new Image()
    imagem.src ='./images/awesome.png' 
    imagem.onload = () => {
      this.context.drawImage(imagem, 400, 200);
    };
  }
}
