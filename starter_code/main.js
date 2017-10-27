var hangman = new Hangman();

document.getElementById("start-game-button").onclick = function(){

  var palabra = hangman._getWord();
  var game = new HangmanCanvas(palabra);
  game._createBoard();
  game._drawLines();

document.addEventListener("keydown", function x (){
  var keyCode = event.keyCode;
  var isALetter = hangman._checkIfLetter(keyCode);
  //Compruebo que la letra esta dentro de la palabra selccionada
  //True--> Write Correct Letter game._write....
            // Mirar .split(), .short() --> Compruebo letras
            //

  //False--> Write Wrong Letter game._write....
            // game._drawHangman(a) --> a = Recoge del array errorsDraw[i]
});
}
