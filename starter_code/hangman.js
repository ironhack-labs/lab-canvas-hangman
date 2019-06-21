class Hangman{
  constructor(words,secretWord,letters,guessedLetter,errorsLeft){
    this.words = ["secret","otherword"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = [""];
    this.errorsLeft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];

  };

  checkIfLetter(e) {

    
      let guess = e.keyCode;
  
          
      if(guess > 64 && guess < 91){
    
        return e.key;
      }else{
        alert("Invalid Input");
      }
  }

  checkClickedLetters(e){
    let guess = e.key.toLowerCase();

      if(this.letters.includes(guess)){
    
        return true;
      }else{
    
        this.letters.push(guess);
        console.log(this.letters);
       
       let str = this.secretWord;
       let indexOfKey = str.indexOf(guess);
       console.log(indexOfKey);
        // var canvas = document.getElementById('hangman');
        // var ctx = canvas.getContext('2d');
        // ctx.fillStyle = "black";
        // ctx.font = "30px Arial";
        //   return false;
        } 
  }

  checkGameOver(){
    if(this.errorsLeft < 1){
      $("#game-over").removeClass("invisible");
      return true;
    }
    else{
      return false;
    }
  };

  checkWinner(e){
    if(this.guessedLetter.length === this.secretWord.length){
      $("#winner").removeClass("invisible");
      return true;
    }
    else{
      false;
    }
  };

  addCorrectLetter(e){
    let guess = e.key;

    if(this.secretWord.includes(guess)){
  
     this.guessedLetter += guess;
  
    }else{
  
      this.errorsLeft --;
  
    }
  };

  addLettersToCanvas(e){
    var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    // ctx.fillText("string", x, y); => x, y are coordinates where the text
    // is going to appear
    ctx.fillText("s", 320, 700);

    // ctx.fillStyle = "black";
    // ctx.font = "30px Arial";
    // // ctx.fillText("string", x, y); => x, y are coordinates where the text
    // // is going to appear
    // ctx.fillText("s", 320, 700);
  }

}

document.getElementById('start-game-button').onclick = function () {
  console.log("You started a new Game yay!!")
  
  hangman = new Hangman();
  hangman.getWord();  
  drawLines();
  addLettersToCanvas();

  document.onkeydown = function (e) {
    // console.log("===============", e);
    hangman.checkIfLetter(e);
    hangman.checkClickedLetters(e);
    hangman.addCorrectLetter(e);
    hangman.checkGameOver(e);
    hangman.checkWinner(e);
  }


  function drawLines(){
    var canvas = document.getElementById('hangman');
      var ctx = canvas.getContext('2d');

      let x = 200;
      let y = 700
      let increment = 50;
      for(let i = 0; i < hangman.secretWord.length; i++){
        x += 100;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+increment, y);
        ctx.stroke();
        ctx.closePath();

        //-------------------//
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("--", x, y); 
      }
  }

  function addLettersToCanvas(){
    var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    let x = 200;
    let y = 700
    let increment = 50;
    for(let i = 0; i < hangman.secretWord.length; i++){
      x += 100;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+increment, y);
      ctx.stroke();
      ctx.closePath();

  
  }
  
}

// document.onkeydown = function (e) {
//   // console.log("===============", e);
//   hangman.checkIfLetter(e);
//   hangman.checkClickedLetters(e);
//   hangman.addCorrectLetter(e);
//   hangman.checkGameOver(e);
//   hangman.checkWinner(e);
}