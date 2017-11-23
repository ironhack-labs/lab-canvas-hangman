describe("Hangman Game", function () {
  var hangman;
  beforeEach (function () {
    hangman = new Hangman();
  });
  describe("Words to Pick", function () {
    it("There should be an array of words", function () {
      expect(hangman.words).toBeDefined();
    });
    it("There should be at least one word to pick", function () {
      expect(hangman.words.length).toBeGreaterThan(0);
    });
  });

  describe("Secret Word", function () {
    it("secretWord should exist", function () {
      expect(hangman.secretWord).toBeDefined();
    });

    it("_getWord should be a function", function () {
      expect(typeof(hangman._getWord)).toBe("function");
    });

    it("_getWord should return a string", function () {
      expect(typeof(hangman._getWord())).toBe("string");
    });

    it("secretWord should be a string", function () {
      expect(typeof(hangman.secretWord)).toBe("string");
    });
  });

  describe("Check if is a letter", function () {
    it("_checkIfLetter should be a function", function () {
      expect(typeof(hangman._checkIfLetter)).toBe("function");
    });

    it("_checkIfLetter should receive a number", function () {
      var keyCode = 43;
      hangman._checkIfLetter(keyCode);
      expect(typeof(keyCode)).toBe("number");

    });

    it("_checkIfLetter should return a boolean", function () {
      expect(typeof(hangman._checkIfLetter())).toBe("boolean");
    });

    it("_checkIfLetter should return false", function () {
      expect(hangman._checkIfLetter(43)).toEqual(false);
    });

    it("_checkIfLetter should return true", function () {
      expect(hangman._checkIfLetter(76)).toEqual(true);
    });
  });

  describe("Check if the letter was already clicked", function () {
    it("_checkClickedLetters should be a function", function () {
      expect(typeof(hangman._checkClickedLetters)).toBe("function");
    });
    it("_checkClickedLetters should receive a string", function () {
      var key = "P";
      hangman._checkClickedLetters(key);
      expect(typeof(key)).toBe("string");
    });
    it("_checkClickedLetters should return a boolean", function () {
      hangman.letters.push("I");
      expect(typeof(hangman._checkIfLetter("N"))).toBe("boolean");
    });

    it("_checkClickedLetters should return true", function () {
      hangman.letters.push("I","R","P");
      expect(hangman._checkClickedLetters("F")).toEqual(true);
    });

    it("_checkIfLetter should return false", function () {
      hangman.letters.push("I","R","P");
      expect(hangman._checkClickedLetters("R")).toEqual(false);
    });
  });

  describe("Add correct letters", function () {
    it("_addCorrectLetter should be a function", function () {
      expect(typeof(hangman._addCorrectLetter)).toBe("function");
    });
    it("_addCorrectLetter should receive a number", function () {
      var key = "N";
      hangman._checkClickedLetters(key);
      expect(typeof(key)).toBe("string");
    });
    it("_addCorrectLetter should add letters to guessedLetter string", function () {
      hangman.secretWord = "Ironhack";
      hangman._addCorrectLetter(1);
      expect(hangman.guessedLetter).toEqual("R");
    });
  });

  describe("Wrong letters", function () {
    it("_addWrongLetter should be a function", function () {
      expect(typeof(hangman._addWrongLetter)).toBe("function");
    });
    it("_addWrongLetter should receive a string", function () {
      var letter = "P";
      hangman._addWrongLetter(letter);
      expect(typeof(letter)).toBe("string");
    });
    it("_addWrongLetter should discount the amount of errors left", function () {
      hangman.errorsLeft = 7;
      hangman._addWrongLetter("P");
      expect(hangman.errorsLeft).toEqual(6);
    });
  });

  describe("Check if the game is over", function () {
    it("_checkGameOver should be a function", function () {
      expect(typeof(hangman._checkGameOver)).toBe("function");
    });
    it("_checkGameOver should return a boolean", function () {
      expect(typeof(hangman._checkGameOver())).toBe("boolean");
    });
    it("_checkGameOver should return false if the errorsLeft is 0", function () {
      hangman.errorsLeft = 0;
      expect(hangman._checkGameOver()).toEqual(true);
    });
    it("_checkGameOver should return false if the errorsLeft is 0", function () {
      hangman.errorsLeft = 5;
      expect(hangman._checkGameOver()).toEqual(false);
    });
  });

  describe("Check if we win", function () {
    it("_checkWinner should be a function", function () {
      expect(typeof(hangman._checkWinner)).toBe("function");
    });
    it("_checkWinner should return a boolean", function () {
      expect(typeof(hangman._checkWinner())).toBe("boolean");
    });
    it("_checkWinner should return true if we guess all letters", function () {
      hangman.secretWord = "IRONHACK";
      hangman.guessedLetter = "KHARCNIO";
      expect(hangman._checkWinner()).toEqual(true);
    });
    it("_checkWinner should return true if we guess all letters", function () {
      hangman.secretWord = "IRONHACK";
      hangman.guessedLetter = "KHARCN";
      expect(hangman._checkWinner()).toEqual(false);
    });
  });
});
