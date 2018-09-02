class Hangman {
  constructor(words){
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.lettersPicked = [];
    this.correctLetter = [];
    this.incorrectLetter = [];
    this.errorsLeft = 7;
  };
  
  checkIfLetter(keyCode) {
      if(keyCode >= 65 && keyCode <= 90) {
        console.log('true');
        return true;
      }else {
        console.log('false');
        return false;
      }
  
  };

  drawDashes(){ 
    var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < this.secretWord.length; i++){
        
    ctx.beginPath();
    ctx.moveTo(200 + (i * 100),500);
    ctx.lineTo(280 + (i * 100),500);
    ctx.stroke();
  }
}

  printLetters(key) {
    var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();

    var x = this.secretWord.indexOf(key);
    for (var i = 0; i < this.secretWord.length; i++){
      if(x === i){
        ctx.font = "30px Arial";
		  	ctx.fillText(key,200 + (i * 100),500);
	    }
    }
    return;
  }

  checkClickedLetter(key) {

    var array = this.lettersPicked;
    var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');
    
    if (array.includes(key)) {
      alert ("You have already chosen this letter");
    }else{
      
      this.lettersPicked.push(key)
        
        if(this.secretWord.includes(key)){
        this.correctLetter.push(key);
  
        }else {
          this.incorrectLetter.push(key);
          this.errorsLeft -= 1;

          if(this.errorsLeft === 6){
            ctx.beginPath();
            ctx.arc(500, 180, 50, 0, 2 * Math.PI);
            ctx.stroke();
          } else if (this.errorsLeft === 5) {
            ctx.beginPath();
            ctx.moveTo(500, 230);
            ctx.lineTo(500, 250);
            ctx.stroke();
          } else if (this.errorsLeft === 4) {
            ctx.beginPath();
            ctx.moveTo(500, 250);
            ctx.lineTo(500, 320);
            ctx.stroke();
          } else if (this.errorsLeft === 3) {
            ctx.beginPath();
            ctx.moveTo(500, 320);
            ctx.lineTo(550, 350);
            ctx.stroke();
          } else if (this.errorsLeft === 2) {
            ctx.beginPath();
            ctx.moveTo(500, 320);
            ctx.lineTo(450, 350);
            ctx.stroke();
        } else if (this.errorsLeft === 1) {
          ctx.beginPath();
          ctx.moveTo(500, 290);
          ctx.lineTo(450, 250);
          ctx.stroke();
        } else if (this.errorsLeft === 0) {
          ctx.beginPath();
          ctx.moveTo(500, 290);
          ctx.lineTo(550, 250);
          ctx.stroke();
        }
      }
    }
  }
    
  checkIfWin(){
      var array1 = this.correctLetter;
      var array2 = this.secretWord;
      var finalArray = [];
      var array = array2.split('');
      array1.forEach((e1)=>array.forEach((e2)=>
      {if(e1 === e2){
        finalArray.push(e1)
      }
    }
  ));

    if (array1.length === array2.length){
      var canvas = document.getElementById('hangman');
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.font = "30px Arial";
      ctx.fillText("You Win!",400,50);
    }else if (array1.length !== array2.length && this.errorsLeft === 0){
      var canvas = document.getElementById('hangman');
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.font = "30px Arial";
      ctx.fillText("You Lose!",400,50);
    }
    }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman(['monochrome', 'bunny', 'ironhack', 'red']);
  hangman.drawDashes(hangman.secretWord);
};

document.onkeydown = function (e) {
 if (hangman.checkIfLetter(e.keyCode) === true) {
   hangman.checkClickedLetter(e.key);
   hangman.printLetters(e.key);
   hangman.checkIfWin();
 }
};

//ISSUES TO RESOLVE

//duplicate letters in secret word, must fill to appropriate spots if word contains more than one of same true letter
//enter key extends/changes secret word (via length of dashes) while game is being played
//game does not end with win or loose, need to stop ability to press more keys, or make initial key stroke after checkIfWin funtion runs to refresh page, or alert
//incorrect letters do not appear on screen as reference, must print to screen using ctx.fillText and draw area
