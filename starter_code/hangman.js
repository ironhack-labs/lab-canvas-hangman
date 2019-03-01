var hangman;

 function Hangman() {
this.words=["perro","gato","hamster"];//array con palabras aleatorias mínimo 3
this.secretWord='';//palabra elegida al azar
this.letters=[];//array de teclas pulsadas por el usuario
this.guessedLetter='';//cadena con las letras acertadas. La usaremos para ver si hemos ganado
this.errorsLeft=10;//max de errores
 }

 Hangman.prototype.getWord = function () {

var min=0;
var max=this.words.length;
var aleatorio= Math.floor(Math.random() * (max - min) + min); 


return this.words[aleatorio];



 };

 Hangman.prototype.checkIfLetter = function (keyCode) {


if(keyCode>=65 && keyCode<=90){

//codigos ascii para letras mayúsculas
return true;

}else if(keyCode>=97 && keyCode<=122){

return true;

}else{

return false;

}

 };

Hangman.prototype.checkClickedLetters = function (key) {


  if(this.letters.indexOf(key.toUpperCase())===-1){


      return true;


  }else{

      return false;

  }


};

 Hangman.prototype.addCorrectLetter = function (i) {


  //añadir letra si adivinada
  var palabraCorrecta=this.secretWord;//palabra correcta

  this.guessedLetter+=i;//añadir letra adivinada
  console.log(this.guessedLetter);

  if(palabraCorrecta.indexOf(i)!==-1){

 
    this.guessedLetter+=i;//añadir letra adivinada
    console.log(this.guessedLetter);

  }  



  this.checkWinner();
  //hemos ganado?

    
 };

 Hangman.prototype.addWrongLetter = function (letter) {

  var palabraCorrecta=this.secretWord;//palabra correcta

  if(palabraCorrecta.indexOf(letter)==-1){


    this.errorsLeft--;
  }
  

this.checkGameOver();

};

 Hangman.prototype.checkGameOver = function () {


    if(this.errorsLeft==0){

      return true;
      
    }else{


      return false;

    }

 };

 Hangman.prototype.checkWinner = function () {

  var palabraCorrecta=this.secretWord;//palabra correcta
  var acierto=0;
  var letrasAdivinadas=this.guessedLetter;//letras adivinadas
  

  //hemos ganado?

    for(i=0;i<palabraCorrecta.length;i++){


        if(letrasAdivinadas.indexOf(palabraCorrecta[i])!==-1){

          acierto++;

        }

    }

    if(acierto===palabraCorrecta.length){

      
        console.log('ACIERTO');
        return true;

    }else{

      console.log('NOT YET');
      return false;
    }




 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
