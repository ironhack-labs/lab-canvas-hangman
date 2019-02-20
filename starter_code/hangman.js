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

  this.guessedLetter+=i;
   
  this.guessedLetter;//recorrer este array letra por letra y compararlo con el de la palabra elegida
                     //si las letras estás al menos una vez ganas


  if(){

    return true;

  }else{

    return false;
  }


 };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
