var hangman;
var hangmanCanvas;

//hay que declarar las variables "globales" que vamos a usar en las funciones  
function Hangman() {
// arreglo de palabras para el juego
this.words=["gorditas", "tacos", "tortas", "tamales", "quesadilla"];
// palabra "secreta" seleccionada para jugar
this.secretWord="";
// arreglo de letras de la palabra secreta
this.letters=[];
// letra(s) de palabra secreta
this.guessedLetter="";
// errores que le quedan al participante, como el muñeco tiene 6 partes, los errores son 6
this.errorsLeft=6;
}

//escoger una palabra -> la palabra secreta
//la palabra secreta es = a la selección aleatoria del arreglo de palabras. Como math random da un número entre el 0 al 1 se debe multiplicar por el largo del arreglo para que nos de números arriba de 1. Math floor redondea el número para tener enteros
Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
  //va a regresar la palabra secreta seleccionada
  return this.secretWord
};

//kecode function salió de stackoverflow.com las teclas de la 48 a la 90 son alfanuméricas
Hangman.prototype.checkIfLetter = function (keyCode) {
  // condición si las letras se encuentran en el rango - son verdaderas (elegibles)
  if(keyCode >= 48 && keyCode <= 90) {
    return true;
  } else { return false }
} 

// revisar si las letras ya fueron "tecleadas" parametro key
// si el arreglo de letras de la palabra secreta es =-1 quiere decir que esa letra no está en el arreglo, por lo tanto no ha sido tecleada
Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key)==-1){
    return true;
  } else {return false}
};

// agrega una letra correcta en MAYÚSCULAS
// se asigna la posición de la letra de secretWord a this.guessLetter
Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

// por cada error resta 1 (de 6 a 0)
Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

// si el número de errores es igual a 0
Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft==0){
    return true;
  } else {return false}
};

// si el largo de las letras de guessletter es igual a la palabra secreta
Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length==this.secretWord.length){
    return true
  } else {return false}
};

// 
document.getElementById('start-game-button').onclick = function () {
  //constructor
  hangman = new Hangman();
  //inicia código para dibujar los elementos del canvas en el html
  var word = hangman.getWord();
  
  //LÓGICA DEL JUEGO
  //constructor. inicializar el objeto
  hangmanCanvas = new HangmanCanvas(word);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
  console.log(hangmanCanvas);
};

//funciones en el html
//(e) = event
document.onkeydown = function (e) {
  var found = false; // variable para saber cuando encuentra una letra correcta
  var key = String.fromCharCode(e.keyCode).toLowerCase(); //código encontrado en stackoverflow para obtener caracter del keyCode // la variable guarda la letra que se tecleo 
  if (hangman.checkIfLetter(e.keyCode)){ //condición: si la tecla presionada es alfanumérica
    if (hangman.checkClickedLetters(key)){ //si la letra/tecla no ha sido tecleada  
      for(i=0;i<hangman.secretWord.length;i++){ //entonces itera sobre el arreglo de letras de secret word
        if (key == hangman.secretWord[i]){ //si la tecla presionada es = a una [letra] de secret word
          hangman.addCorrectLetter(i); // entonces agrega la letra correcta 
          found = true; // la variable found es verdadera
          hangmanCanvas.writeCorrectLetter(i); // va a dibujar la letra correcta
        } 
      }
      if (!found) // si No la encuentra
      {hangman.addWrongLetter(key);
       hangmanCanvas.writeWrongLetter(key,hangman.errorsLeft);
      } //agrega la letra a las letras incorrectas
    }
  } 
  if (hangman.checkWinner()){
    hangmanCanvas.winner();
  } 
  if (hangman.checkGameOver())
  {hangmanCanvas.gameOver()}
};

//references
// https://stackoverflow.com/questions/10323392/in-javascript-jquery-what-does-e-mean?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// https://stackoverflow.com/questions/1772179/get-character-value-from-keycode-in-javascript-then-trim
// https://stackoverflow.com/questions/2257070/detect-numbers-or-letters-with-jquery-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa