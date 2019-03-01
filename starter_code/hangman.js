var hangman;

function Hangman() {
this.words=["perro","gato","hamster","flor","arbol","raton"];//array con palabras aleatorias mínimo 3
this.secretWord='';//palabra elegida al azar
this.letters=[];//array de teclas pulsadas por el usuario
this.guessedLetter='';//cadena con las letras acertadas. La usaremos para ver si hemos ganado
this.errorsLeft=10;//max de errores
 }

 Hangman.prototype.getWord = function () {

var min=0;
var max=this.words.length;
var aleatorio= Math.floor(Math.random() * (max - min) + min); 
alert('a'+aleatorio);
this.secretWord=this.words[aleatorio];

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
 
 
  this.guessedLetter+=this.secretWord[i].toUpperCase();//añadir letra adivinada

 return this.checkWinner();
  //hemos ganado?

    
 };

 Hangman.prototype.addWrongLetter = function (letter) {

  var palabraCorrecta=this.secretWord;//palabra correcta

  if(palabraCorrecta.indexOf(letter)==-1){


    this.errorsLeft--;
  }
  

return this.checkGameOver();

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
  
  //alert('hola');
  
  hangman = new Hangman();
  hangman.getWord();
  //alert(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines(hangman.secretWord.length);
  
};


document.onkeydown = function (e) {
  var winner=false;
  var gameOver=false;

  //comprobar si es una letra. sino lo es no hacer nada

      if(hangman.checkIfLetter(e.keyCode)){
          
          alert('ES LETRA');
          console.log(e);

          //Comprobamos si está pulsada, sino, la añadimos al array de letters.
          //si está pulsada no hacemos nada

          if(hangman.checkClickedLetters(e.key)){
   
          hangman.letters.push(e.key);


          }
          var indice=hangman.secretWord.indexOf(e.key);
          if(indice!==-1){

            hangman.guessedLetter+=e.key;
            winner = hangman.addCorrectLetter(indice);
             //pintarla con writeCorrectLetter
              canvas.writeCorrectLetter(hangman.secretWord[indice],indice);
            alert('W'+winner);
            alert('acertada'+e.key);

          }else{

            alert('no');
            gameOver= hangman.addWrongLetter(e.key);
            //pintarla con writeWrongLetter
            alert('gO'+gameOver);

          }

          
      //comprobamos si está acertada. si lo está llamamos a writeCorrectLetter
      //Sino es acierto llamamos a writeWrongLetter
      
    }
alert('llega');
     if(winner===true){
       
      alert('GANASTE');

    }
     if(gameOver===true){alert('PERDISTE GASTASTE TU 10 INTENTOS');}
  
};
