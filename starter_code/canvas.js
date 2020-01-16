let hangmanCanvas;


//Primero se crea el constructor dentro de el se agregan las palabras con el this. seguido de las propiedades que tenemos


class Hangman {
  constructor(words, secretWord, letters, guessedLetter, errorLetter) {
//Se crea una lista de palabras las cuales seran usadas para el random de la funcion y juego

    this.words = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
    this.secretWord = ""
    this.letters = [] 
    this.guessedLetter = ""
    this.errorsLeft = 10
  }


  // creamos una constante la cual pasara con Math.flor y random , el primero generando un numero entero que se aproxime del dandom que es multitplicado por la cantidad de palabras en indice

  getWord() {
    const wordIndex = Math.floor( Math.random() * this.words.length)
    //se manda a llamar la this.secrect word puesto que aqui es donde pasara a ser guardada cuando se ejecute la funcion 
    //y respectivamente la almacenara para jugar con ella

    this.secretWord = this.words[wordIndex].toLocaleUpperCase()
    //retornamos el valor de Sw 
    return this.secretWord
  }


  //Aqui revisamos que si el key es igual a un numero y menor a otro o un numero es mayor a uno y menor a otro
  //Los numero pasan a representar el numro que tinen las letras el el codigo ASSII

  checkIfLetter(keyCode) {
    const isValidKey = ( (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) )
    
    //nuevamente retornamos el valor de la llave o constante que guarda dicho vaor que posteriro sera usado
    
    return isValidKey
  }


//Aqui entran las conciciones , el filto que dice si una letra a sido ingresada o no


  checkClickedLetters(key) {

    if( this.checkIfLetter(key.keyCode )){

      
      if( !this.letters.includes(key.key) ){
        this.letters.push(key.key.toLocaleUpperCase())

        if( this.secretWord.includes(key.key.toLocaleUpperCase()) ) {
          this.addCorrectLetter(key.key.toLocaleUpperCase())
          return true
        }
        this.addWrongLetter(key.key)
      } }
    return false
  }



  //Se agrega una letra si esta esta incluye una letra en a posicioin x
  addCorrectLetter(i) {
    if( !this.guessedLetter.includes(i.toLocaleUpperCase()) ) this.guessedLetter += i.toLocaleUpperCase()
    return this.checkWinner()
  }


  //Revisa si los la letra esta bien o no, 

  addWrongLetter(letter) {
    this.errorsLeft--
    return this.checkGameOver()
  }

  //Revisa el contrador de los errores i este a llegado o no a cero,
  //si este llega a cero return de igual forma el valo el cual pasa aser leido  y mandando el error de per
  checkGameOver() {
    return (this.errorsLeft === 0)
  }


//Revisa si la palabra random es identica a la escrita

  checkWinner() {
    return (this.secretWord.length === this.guessedLetter.length)
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas( hangman.getWord() )
};

document.onkeydown = (e) => {

  hangman.checkClickedLetters( e )
  hangmanCanvas.createBoard()
  hangmanCanvas.writeCorrectLetter(hangman.guessedLetter)
};