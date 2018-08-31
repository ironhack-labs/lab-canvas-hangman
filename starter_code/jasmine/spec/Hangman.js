describe('Hangman Game', function () {
  var hangman;
  beforeEach(function () {
    hangman = new Hangman();
  });
  describe('Words to Pick', function () {
    it('There should be an array of words', function () {
      expect(hangman.words).toBeDefined();
    });
    it('There should be at least one word to pick', function () {
       expect(hangman.words.length).toBeGreaterThan(2);
    });
  });

  describe('Secret Word', function () {
    it('secretWord should exist', function () {
      expect(hangman.secretWord).toBeDefined();
    });

    it('getWord should be a function', function () {
      expect(typeof (hangman.getWord)).toBe('function');
    });

    it('getWord should return a string', function () {
      expect(typeof (hangman.getWord())).toBe('string');
    });

    it('secretWord should be a string', function () {
      expect(typeof (hangman.secretWord)).toBe('string');
    });
  });

  describe('Check if is a letter', function () {
    it('checkIfLetter should be a function', function () {
      expect(typeof (hangman.checkIfLetter)).toBe('function');
    });

    it('checkIfLetter should receive a number', function () {
      expect(typeof (hangman.checkIfLetter)).toBe('function');
    });

    it('checkIfLetter should return a boolean', function () {
      var keyCode = 43;
      hangman.checkIfLetter(keyCode);
      expect(typeof (keyCode)).toBe('number');
    });

    it('checkIfLetter should return false', function () {
      expect(hangman.checkIfLetter(43)).toEqual(false);
    });

    it('checkIfLetter should return true', function () {
      expect(hangman.checkIfLetter(76)).toEqual(true);
    });
  });

  describe('Check if the letter was already clicked', function () {
    it('checkClickedLetters should be a function', function () {
      expect(typeof (hangman.checkClickedLetters)).toBe('function');
    });
    it('checkClickedLetters should receive a string', function () {
      var key = 'P';
      hangman.checkClickedLetters(key);
      expect(typeof (key)).toBe('string');
    });
    it('checkClickedLetters should return a boolean', function () {
      hangman.letters.push('I');
      expect(typeof (hangman.checkIfLetter('N'))).toBe('boolean');
    });

    it('checkClickedLetters should return true', function () {
      hangman.letters.push('I', 'R', 'P');
      expect(hangman.checkClickedLetters('F')).toEqual(true);
    });

    it('checkIfLetter should return false', function () {
      hangman.letters.push('I', 'R', 'P');
      expect(hangman.checkClickedLetters('R')).toEqual(false);
    });
  });

  describe('Add correct letters', function () {
    it('addCorrectLetter should be a function', function () {
      expect(typeof (hangman.addCorrectLetter)).toBe('function');
    });
    it('addCorrectLetter should receive a number', function () {
      var key = 'N';
      hangman.checkClickedLetters(key);
      expect(typeof (key)).toBe('string');
    });
    it('addCorrectLetter should add letters to guessedLetter string', function () {
      hangman.secretWord = 'Ironhack';
      hangman.addCorrectLetter(1);
      expect(hangman.guessedLetter).toEqual('R');
    });
  });

  describe('Wrong letters', function () {
    it('addWrongLetter should be a function', function () {
      expect(typeof (hangman.addWrongLetter)).toBe('function');
    });
    it('addWrongLetter should receive a string', function () {
      var letter = 'P';
      hangman.addWrongLetter(letter);
      expect(typeof (letter)).toBe('string');
    });
    it('addWrongLetter should discount the amount of errors left', function () {
      hangman.errorsLeft = 7;
      hangman.addWrongLetter('P');
      expect(hangman.errorsLeft).toEqual(6);
    });
  });

  describe('Check if the game is over', function () {
    it('checkGameOver should be a function', function () {
      expect(typeof (hangman.checkGameOver)).toBe('function');
    });
    it('checkGameOver should return a boolean', function () {
      expect(typeof (hangman.checkGameOver())).toBe('boolean');
    });
    it('checkGameOver should return false if the errorsLeft is 0', function () {
      hangman.errorsLeft = 0;
      expect(hangman.checkGameOver()).toEqual(true);
    });
    it('checkGameOver should return false if the errorsLeft is 0', function () {
      hangman.errorsLeft = 5;
      expect(hangman.checkGameOver()).toEqual(false);
    });
  });

  describe('Check if we win', function () {
    it('checkWinner should be a function', function () {
      expect(typeof (hangman.checkWinner)).toBe('function');
    });
    it('checkWinner should return a boolean', function () {
      expect(typeof (hangman.checkWinner())).toBe('boolean');
    });
    it('checkWinner should return true if we guess all letters', function () {
      hangman.secretWord = 'IRONHACK';
      hangman.guessedLetter = 'KHARCNIO';
      expect(hangman.checkWinner()).toEqual(true);
    });
    it('checkWinner should return true if we guess all letters', function () {
      hangman.secretWord = 'IRONHACK';
      hangman.guessedLetter = 'KHARCN';
      expect(hangman.checkWinner()).toEqual(false);
    });
  });
});
