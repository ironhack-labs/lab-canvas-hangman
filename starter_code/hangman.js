  let keyString = keyCode =>{
    return String.fromCharCode(keyCode);
  }

  function Hangman(){
    this.words = ['coche', 'coche', 'coche','coche'];
    this.secretWord = this.getWord();
    this.guessedLetter = '';
    this.letters = [];
    this.errorsLeft = 10;
  }

  Hangman.prototype.getWord = function () {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  Hangman.prototype.checkIfLetter = function (keyCode){
    let checkKeyString = keyString(keyCode).length === 1 && keyString(keyCode).match(/[a-z]/i);
    if(checkKeyString != null){
      return true;
    }
    return false;
  }
  Hangman.prototype.checkClickedLetters = function (key){

      if(this.letters.includes(key)){
        return false;
      }
        this.letters.push(key);
        return true;
    }
  
  
  Hangman.prototype.checkGameOver = function (){
    if(this.errorsLeft > 0){
      return false;
    }
    else if(this.errorsLeft === 0){
      return true;
    }
  }
  Hangman.prototype.checkWinner = function (){
    if(this.guessedLetter.length === this.secretWord.length && this.errorsLeft > 0){
      alert('Has ganado!')
      return true;
    }
    else{
      return false;
    }
  }
  Hangman.prototype.addCorrectLetter = function (i){
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();

    return this.guessedLetter;
  }
  Hangman.prototype.addWrongLetter = function (letter){
    this.errorsLeft--;
    return letter;
  }

  Hangman.prototype.gameOver = function (){
    //Game over
    console.log('perdiste')
    window.alert('Has perdido!')
  }


let hangman = new Hangman()
let hangmanCanvas = new HangmanCanvas(hangman.getWord());

document.getElementById('start-game-button').onclick = function () {
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = function (e) {
  let secretWord = hangmanCanvas.secretWord;

 if(hangman.checkIfLetter(e.keyCode)){
   if(!hangman.checkClickedLetters(e.key)){
     //Tecla repetida
     alert('¡La tecla ya ha sido seleccionada anteriormente, elige una nueva')
   }
   else{
     //Tecla nueva
     if(secretWord.includes(e.key)){

      let indices= [], i;

      for(i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === e.key) {
        indices.push(i);
        hangman.addCorrectLetter(1);
      }
      }

      hangmanCanvas.writeCorrectLetter(indices);

     }
     else{
      //write the letter in the top right corner
      hangman.addWrongLetter();
      let shape;
      shape = 'triangulo';

      hangmanCanvas.drawHangman(shape)

       if(hangman.errorsLeft === 0){
        shape = 'brazoDer';
        hangman.gameOver();
        hangmanCanvas.drawHangman(shape);
       }
       if(hangman.errorsLeft === 1){
        shape = 'brazoIzq';
        hangmanCanvas.drawHangman(shape);
        
      }
      if(hangman.errorsLeft === 2){
        shape = 'piernaDer';
        hangmanCanvas.drawHangman(shape);
      }
      if(hangman.errorsLeft === 3){
        shape = 'piernaIzq';
        hangmanCanvas.drawHangman(shape);
      }
      if(hangman.errorsLeft === 4){
        shape = 'tronco';
        hangmanCanvas.drawHangman(shape);
      }
      if(hangman.errorsLeft === 5){
        shape = 'cabeza';
        hangmanCanvas.drawHangman(shape);
      }
      if(hangman.errorsLeft === 6){
        shape = 'cuerda';
        hangmanCanvas.drawHangman(shape);
      }
      if(hangman.errorsLeft === 7){
        shape = 'posteHorizontal';
        hangmanCanvas.drawHangman(shape);
      }
      if(hangman.errorsLeft === 8){
        shape = 'posteVertical';
        hangmanCanvas.drawHangman(shape);
      }

      
        
    
      
      
      
      
      
      
      
      
       //Start drawing
       
     }
   }
 }
 
 
};
