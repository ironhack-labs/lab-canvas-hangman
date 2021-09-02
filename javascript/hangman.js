class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord= this.pickWord(words)
    this.letters=[];
    this.guessedLetters="";
    this.errorsLeft=10;
  }

  pickWord() {
    // ... your code goes here
    //[hola,adios,perrro]
    //multiplicamos el random por la longitud del arr y le quitamos los decimales
    let random= Math.trunc(Math.random()*this.words.length)
    //creamos una variable para pasarle la palabra random
    let pickedWord =this.words[random]
    //regresamos la palabra random
    return pickedWord;

  }

  checkIfLetter(keyCode) {
    if(keyCode>=65 &&keyCode<=90){
      
      return true
    }else{
     return false
    }
  }
  checkClickedLetters(letter) {
     //Si la palabra existe regresa un falso
    if(this.letters.includes(letter)){
      //console.log(this.letters)
      return false
      //SI la palabra no existe regresa un verdadero y la empuja al array de las palabras 
    } else{
      this.letters.push(letter)
      console.log(this.letters)
      return true
    }
    
  
  
  }

  addCorrectLetter(letter) {
  
  
    this.guessedLetters+=letter
    //console.log('como va la palabra',this.guessedLetters)
    
   
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--
    //REVISAR SI FUNCIONA SI NO QUITARLO
      this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorsLeft>0){
      return false
    } else{
      return true
    }
   //return !this.errorsLeft>0
  }

  checkWinner() { 
    //SPLIT Separa las letras en arrays, despues  ordena ese array por orden alfabetico y por ultimo ese array lo junta en una palabra
    let ordenarSecreta = this.secretWord.split("").sort().join("");
    let ordenarAdivinar = this.guessedLetters.split("").sort().join("");
    if (ordenarSecreta === ordenarAdivinar) return true;
    else return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    //hangman queda activado con los valores que se pasan y es por eso que se puede acceder aestos valores en el addevent liseter de abajho
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  //REVISA SI LA PALABRA HA SIDO APRETADA ANTES - Si no ha sido apretada y se agregan al array de palabras que han sido tecleadas, entra al if
  if(hangman.checkClickedLetters(event.key)==true){
    //SI la palabra secreta incluye la tecla que se esta metiendo
    if(hangman.secretWord.includes(event.key)){
      //console.log("Agregando Palabra buena")
      //Agrega la letra que esta siendo presionada al string vacio de  this.guessedLetters=""
      hangman.addCorrectLetter(event.key)
      //Se va al canvas para pintar las letras
      hangmanCanvas.writeCorrectLetter(event.key)
      //Verifica si la palabra escrita corresponde a la palabra secrta si es asi se gana
      if(hangman.checkWinner()){
        console.log("GANASTE")
      }

      //Si la palabra secreta NO INCLUYE la tecla que se sta metiendo
    } else{
      //console.log("Agregando Palabra mala")
      //Se agrega la palabra al array de palabras que ya han sido tecleadas
      hangman.addWrongLetter(event.key)
      console.log("Oportunidades: ", hangman.errorsLeft)
      //SI erros.Left llega a 0 entonces se ha perdido 
      if(hangman.errorsLeft==0){
        console.log("Perdiste")
      }

      
    }
   

 }
 
  //voy en add correct event
  //console.log(Hangman.checkClickedLetters(event.key))
  //addCorrectLetter(letter)
});
