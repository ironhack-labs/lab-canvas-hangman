describe('juego Game', function () {
  var juego;


  describe('Words to Pick', function () {
    it('There should be an array of words', function () {
      expect(OpcionesJuego.listaPalabras).toBeDefined();
    });
    it('There should be at least one word to pick', function () {
      expect(juego.words.length).toBeGreaterThan(2);
    });
  });


  // describe('Secret Word', function () {
  //   it('secretWord should exist', function () {
  //     expect(juego.secretWord).toBeDefined();
  //   });
  //
  //   it('getWord should be a function', function () {
  //     expect(typeof (juego.getWord)).toBe('function');
  //   });
  //
  //   it('getWord should return a string', function () {
  //     expect(typeof (juego.getWord())).toBe('string');
  //   });
  //
  //   it('secretWord should be a string', function () {
  //     expect(typeof (juego.secretWord)).toBe('string');
  //   });
  // });
  //
  // describe('Check if is a letter', function () {
  //   it('checkIfLetter should be a function', function () {
  //     expect(typeof (juego.checkIfLetter)).toBe('function');
  //   });
  //
  //   it('checkIfLetter should receive a number', function () {
  //     expect(typeof (juego.checkIfLetter)).toBe('function');
  //   });
  //
  //   it('checkIfLetter should return a boolean', function () {
  //     var keyCode = 43;
  //     juego.checkIfLetter(keyCode);
  //     expect(typeof (keyCode)).toBe('number');
  //   });
  //
  //   it('checkIfLetter should return false', function () {
  //     expect(juego.checkIfLetter(43)).toEqual(false);
  //   });
  //
  //   it('checkIfLetter should return true', function () {
  //     expect(juego.checkIfLetter(76)).toEqual(true);
  //   });
  // });
  //
  // describe('Check if the letter was already clicked', function () {
  //   it('checkClickedLetters should be a function', function () {
  //     expect(typeof (juego.checkClickedLetters)).toBe('function');
  //   });
  //   it('checkClickedLetters should receive a string', function () {
  //     var key = 'P';
  //     juego.checkClickedLetters(key);
  //     expect(typeof (key)).toBe('string');
  //   });
  //   it('checkClickedLetters should return a boolean', function () {
  //     juego.letters.push('I');
  //     expect(typeof (juego.checkIfLetter('N'))).toBe('boolean');
  //   });
  //
  //   it('checkClickedLetters should return true', function () {
  //     juego.letters.push('I', 'R', 'P');
  //     expect(juego.checkClickedLetters('F')).toEqual(true);
  //   });
  //
  //   it('checkIfLetter should return false', function () {
  //     juego.letters.push('I', 'R', 'P');
  //     expect(juego.checkClickedLetters('R')).toEqual(false);
  //   });
  // });
  //
  // describe('Add correct letters', function () {
  //   it('addCorrectLetter should be a function', function () {
  //     expect(typeof (juego.addCorrectLetter)).toBe('function');
  //   });
  //   it('addCorrectLetter should receive a number', function () {
  //     var key = 'N';
  //     juego.checkClickedLetters(key);
  //     expect(typeof (key)).toBe('string');
  //   });
  //   it('addCorrectLetter should add letters to guessedLetter string', function () {
  //     juego.secretWord = 'Ironhack';
  //     juego.addCorrectLetter(1);
  //     expect(juego.guessedLetter).toEqual('R');
  //   });
  // });
  //
  // describe('Wrong letters', function () {
  //   it('addWrongLetter should be a function', function () {
  //     expect(typeof (juego.addWrongLetter)).toBe('function');
  //   });
  //   it('addWrongLetter should receive a string', function () {
  //     var letter = 'P';
  //     juego.addWrongLetter(letter);
  //     expect(typeof (letter)).toBe('string');
  //   });
  //   it('addWrongLetter should discount the amount of errors left', function () {
  //     juego.errorsLeft = 7;
  //     juego.addWrongLetter('P');
  //     expect(juego.errorsLeft).toEqual(6);
  //   });
  // });
  //
  // describe('Check if the game is over', function () {
  //   it('checkGameOver should be a function', function () {
  //     expect(typeof (juego.checkGameOver)).toBe('function');
  //   });
  //   it('checkGameOver should return a boolean', function () {
  //     expect(typeof (juego.checkGameOver())).toBe('boolean');
  //   });
  //   it('checkGameOver should return false if the errorsLeft is 0', function () {
  //     juego.errorsLeft = 0;
  //     expect(juego.checkGameOver()).toEqual(true);
  //   });
  //   it('checkGameOver should return false if the errorsLeft is 0', function () {
  //     juego.errorsLeft = 5;
  //     expect(juego.checkGameOver()).toEqual(false);
  //   });
  // });
  //
  // describe('Check if we win', function () {
  //   it('checkWinner should be a function', function () {
  //     expect(typeof (juego.checkWinner)).toBe('function');
  //   });
  //   it('checkWinner should return a boolean', function () {
  //     expect(typeof (juego.checkWinner())).toBe('boolean');
  //   });
  //   it('checkWinner should return true if we guess all letters', function () {
  //     juego.secretWord = 'IRONHACK';
  //     juego.guessedLetter = 'KHARCNIO';
  //     expect(juego.checkWinner()).toEqual(true);
  //   });
  //   it('checkWinner should return true if we guess all letters', function () {
  //     juego.secretWord = 'IRONHACK';
  //     juego.guessedLetter = 'KHARCN';
  //     expect(juego.checkWinner()).toEqual(false);
  //   });
  // });

});
