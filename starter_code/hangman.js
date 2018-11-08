var hangman;

 function Hangman() {
   this.words = ['pollo','computadora','hijo','padre']
   this.secretWord =''
   this.letters = []
   this.guessedLetter = ''
   this.secretWord = ''
   this.errorsLeft = 8
   this.wrongLetter = []
 }

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*(this.words.length-1))]
  
  return this.secretWord
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
    if (keyCode<65 || keyCode>90){
      return false
    } else{
      //this.letter.push(String.fromCharCode(e.keyCode))
      return true
    }
};

Hangman.prototype.checkClickedLetters = function (key) {

  if(this.letters.includes(key)){

    return false
  }else{
    this.letters.push(key)
    
    
    return true
  }
};

Hangman.prototype.addCorrectLetter = function (i) {

  this.guessedLetter+= (this.secretWord[i]).toUpperCase()

};

Hangman.prototype.addWrongLetter = function (letter) {
    this.wrongLetter.push(letter)
    this.errorsLeft--

};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    console.log("perdiste")
    return true
  } else{
    return false
  }
};

Hangman.prototype.checkWinner = function () {
    if(this.secretWord.length === this.guessedLetter.length){
      console.log("ganaste")
      return true
    }else{
      return false
    }
};
var canvas
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord =  hangman.getWord()
  console.log(hangman.secretWord)
  document.getElementById('start-game-button').className = 'ocultar'
  canvas = new HangmanCanvas(hangman.secretWord)
   

};


document.onkeydown = function (e) {
  var keyCode = e.keyCode
  var key= e.key
  if(hangman.checkIfLetter(keyCode)){
    if(hangman.checkClickedLetters(key)){
      if(hangman.secretWord.indexOf(key) !== -1){
        var posicion = hangman.secretWord.indexOf(key);
        var pos = [posicion]
        hangman.addCorrectLetter(posicion)
        canvas.writeCorrectLetter(posicion)
        while (posicion != -1) {
          
          posicion = hangman.secretWord.indexOf(key, posicion + 1);
          if(posicion!=-1){
          pos.push(posicion)
          hangman.addCorrectLetter(posicion)
          canvas.writeCorrectLetter(posicion)
          }

        }
        if(hangman.checkWinner()){
          canvas.winner()
        }
        
        console.log(hangman.guessedLetter)
        
        
      }else{
        hangman.addWrongLetter(key)
        var numero = 8 - hangman.errorsLeft
        canvas.drawHangman(numero)
        if(hangman.checkGameOver())canvas.gameOver()
      }
      
    }

  }



  
  
  

};
