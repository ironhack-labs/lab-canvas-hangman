class Hangman {
    constructor(words) {
        this.words = words; //palabras almacendas
        // ... your code goes here
        this.secretWord = words[0]; //palabra random almacenada
        this.letters = []; // almacena palabras ya usadas
        this.guessedLetters = ""; //cadena que guarda letras del ganador
        this.errorsLeft = 10; //valor de intentos antes de perder
    }

    pickWord() {
        // ... your code goes here
        let pickWords = this.words[Math.floor(Math.random() * this.words.length)];
        return pickWords;
        //de las palabras almacenadas en la propiedad words, el metodo mathfloor ayudara a obtener(redondear) el resultado de 
        //math random con la longitud de la cadena para darnos una palabra al azar
        // y return pickWords; nos mostrara la palabra random 
    }
    checkIfLetter(keyCode) {

        // ... your code goes here
        return keyCode > 64 && keyCode < 90;
        //si el usuario presiona una tecla de a (64) a z (90)
        //la logica retornara un valor true y cualquier otra tecla sera false
    }

    checkClickedLetters(letter) {
        // ... your code goes here
        return !this.letters.includes(letter);
        //metodo que invocara ! la funcion 
        //y la letra tecleada debera retornar un valor true 
    }

    addCorrectLetter(letter) {
        // ... your code goes here
        this.guessedLetters += letter;
        this.checkWinner();
        //metodo que verificara letras adivinadas tecleadas y si fue
        //correcta, ademas revisara al metodo ganador
    }

    addWrongLetter(letter) {
        // ... your code goes here
        if (!this.letters.includes(letter) && !this.secretWord.includes(letter)) {
            this.errorsLeft;
            this.letters.push(letter);
            //el metodo debera regresar una variable erronea del metodo errorleft
        }
    }

    checkGameOver() {
        // ... your code goes here
        if (this.errorsLeft > 0) {
            return false;
        } else {
            return true;
        }
        //este metodo revisa el numero de errores de errorsleft, 
        //la condicion sera: si es mayor a 0 el juego sigue y si no termina
    }

    checkWinner() {
            // ... your code goes here
            if (this.guessedLetters.includes(letter)) {
                finishGame.push(true);
            } else {
                finishGame.push(false);
            }
            return finishGame.includes(true);
        }
        //metodo que revisa al ganador y regresa un valor verdadero o falso
}



let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

        // HINT (uncomment when start working on the canvas portion of the lab)
        // hangman.secretWord = hangman.pickWord();
        // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

        // ... your code goes here
    });
}

document.addEventListener('keydown', event => {
    // React to user pressing a key
    // ... your code goes here
});