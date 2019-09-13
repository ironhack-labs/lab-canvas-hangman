
class HangmanCanvas {
  constructor(secretWord){
    this.canvasEl = document.getElementById('hangman');
    this.ctx;
    this.secretWord = secretWord;
    this.imgOver= new Image();
    this.imgOver.src="./images/gameover.png";
    this.imgWin= new Image();
    this.imgWin.src="./images/awesome.png";
    this.w=600;
    this.h=600;
    this.gainAudio= new Audio('./audio/YouAreAwesome.mp3');
    this.overAudio= new Audio('./audio/GameOver.mp3');
    this.initialAudio= new Audio('./audio/initial.wav');
    this.goodAudio= new Audio('./audio/good.wav');
    this.opssAudio= new Audio('./audio/opsss.wav');
    
  }



createBoard =()=> {
  this.initialAudio.play();
  this.ctx=this.canvasEl.getContext('2d');
  // this.ctx.drawImage(this.logo, this.w/2, this.h/8, 50, 50);
  this.drawLines(this.secretWord.length);
};

drawLines =(wordLen)=> {
  this.ctx.clearRect(0, 0, 1000, 1000);
  //triangulo
  this.ctx.strokeStyle="black";
  this.ctx.lineWidth=3;
  this.ctx.beginPath(); 
  this.ctx.moveTo(this.w/6,this.h/6*5);
  this.ctx.lineTo(this.w/6*2,this.h/6*5);
  this.ctx.lineTo(this.w/6+this.w/12,this.h/6*5-this.h/12);
  this.ctx.closePath()
  this.ctx.stroke();
  //forca
  this.ctx.beginPath(); 
  this.ctx.moveTo(this.w/6+this.w/12,this.h/6*5-this.h/12);
  this.ctx.lineTo(this.w/6+this.w/12,this.h/6-this.h/12);
  this.ctx.lineTo(this.w/6*4,this.h/6-this.h/12);
  this.ctx.lineTo(this.w/6*4,this.h/6+this.h/24);
  this.ctx.stroke();
  


  
  this.ctx.beginPath();
  const posXi=this.w/6*2+this.w/12;
  const totalLetter = this.w/12;
  const spaceLetters = this.w/24;
  for(let i =0;i<wordLen;i+=1){
    this.ctx.moveTo(posXi+(i*spaceLetters)+totalLetter*i,this.h/6*5);
    this.ctx.lineTo(posXi+totalLetter*(i+1)+(i*spaceLetters),this.h/6*5);
  }
  
  this.ctx.stroke();

};

writeCorrectLetter =(letter)=> {
  this.goodAudio.play();
  const posXi=this.w/6*2+this.w/9;
  const totalLetter = this.w/12;
  const spaceLetters = this.w/24;
  this.ctx.textAlign="rigth";
  this.ctx.textBaseline = "Bottom";
  this.ctx.font="60px Arial"; 
  this.ctx.fillStyle="green";  
  
  for(let index=0;index<this.secretWord.length;index+=1){
    if(this.secretWord[index]===letter){
      //print in position index
      this.ctx.fillText(letter,posXi+(index*spaceLetters)+totalLetter*index +this.w/96,this.h/6*5-this.h/48);
      
    }
  }
  


};

writeWrongLetter =(letter, errorsLeft) =>{
  
  this.opssAudio.play();
  const posXi=2*this.w/3+this.w/8;
  const totalLetter = this.w/12;
  const spaceLetters = this.w/128;
  this.ctx.textAlign="center";
  this.ctx.textBaseline = "Bottom";
  this.ctx.font="50px Arial"; 
  this.ctx.fillStyle="red"
  const index=9-errorsLeft
      this.ctx.fillText(letter,posXi+(index*spaceLetters)+totalLetter*index +this.w/96,this.h/6);

};

drawHangman =(numberOfEl)=> {
  
  if(numberOfEl<10){
    //cabeça
  this.ctx.beginPath();   
  this.ctx.arc(this.w/6*4,this.h/6+this.h/24+this.h/24,this.h/24,0,Math.PI*2);
  this.ctx.stroke();
  }
  if(numberOfEl<9){
  //corpo
  this.ctx.beginPath(); 
  this.ctx.moveTo(this.w/6*4,this.h/6+this.h/24+this.h/12);
  this.ctx.lineTo(this.w/6*4,this.h/2);
  this.ctx.stroke();
}
if(numberOfEl<8){
  //perna direita
  this.ctx.lineTo(this.w/6*4+this.w/12,this.h/2+this.h/12);
  this.ctx.stroke();
}
if(numberOfEl<7){
  //perna esquerda
  this.ctx.moveTo(this.w/6*4,this.h/2);
  this.ctx.lineTo(this.w/6*4-this.w/12,this.h/2+this.h/12);
  this.ctx.stroke();
}
if(numberOfEl<6){
  //braço direito
  this.ctx.moveTo(this.w/6*4,this.h/3);
  this.ctx.lineTo(this.w/6*4+this.w/12,this.h/3+this.h/12);
  this.ctx.stroke();
}
if(numberOfEl<5){
  //braço esquerdo
  this.ctx.moveTo(this.w/6*4,this.h/3);
  this.ctx.lineTo(this.w/6*4-this.w/12,this.h/3+this.h/12);
  this.ctx.stroke();
}
if(numberOfEl<4){
  //olho direito
  this.ctx.beginPath();   
  this.ctx.arc(this.w/6*4+this.h/64,this.h/6+this.h/24+this.h/32,this.h/128,0,Math.PI*2);
  this.ctx.stroke();
}
if(numberOfEl<3){
  //olho esquerdo
  this.ctx.beginPath();   
  this.ctx.arc(this.w/6*4-this.h/64,this.h/6+this.h/24+this.h/32,this.h/128,0,Math.PI*2);
  this.ctx.stroke();
}
if(numberOfEl<2){
  //NARIZ
  this.ctx.beginPath(); 
  this.ctx.moveTo(this.w/6*4,this.h/6+this.h/12);
  this.ctx.lineTo(this.w/6*4,this.h/6+this.h/12+this.h/64);
  this.ctx.stroke();
}
if(numberOfEl<1){
  //boca
  this.ctx.beginPath();   
  this.ctx.arc(this.w/6*4,this.h/6+this.h/12+this.h/24,this.h/54,7*Math.PI/4,5*Math.PI/4,true);
  this.ctx.stroke();
  //olho direito X
  
  this.ctx.save();
  this.ctx.textAlign="center";
  this.ctx.textBaseline = "middle";
  this.ctx.font="20px Arial";  
  
  this.ctx.fillStyle = "red";
  this.ctx.beginPath();   
  this.ctx.fillText('X', this.w/6*4+this.h/64,this.h/6+this.h/24+this.h/30)
  this.ctx.stroke();
  //olho esquerdo X
  this.ctx.beginPath(); 
  this.ctx.fillText('X', this.w/6*4-this.h/64,this.h/6+this.h/24+this.h/30)
  this.ctx.stroke();
  this.ctx.restore();
  this.gameOver();

  }
};

gameOver =()=> {
  setTimeout(()=>{
    // colocar imagem de perdeu
    // ctx.drawImage(whichImage, x, y, width, height);
    this.overAudio.play();
    this.ctx.drawImage(this.imgOver,this.w/2,this.h/4)

  },600)

};

winner =()=> {
  setTimeout(()=>{
    // colocar imagem de acertou
    this.gainAudio.play();
    this.ctx.drawImage(this.imgWin,this.w/4,0)
  },600)
};
}
