![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Canvas Hangman

## Introduction

In this exercise, we are going to create the classic game [Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>). How to play this game, what are the rules? Just in case you don't know, in this game, we have to figure out a secret word by guessing one letter at a time. However, with each error, the man will get one step closer to death! The goal is to successfully guess the word before the man gets hanged.

![](https://i.imgur.com/wrQrY1T.png)

As we have learned, we can't confront the whole game without splitting it up into smaller steps. We will split it up into three different parts: structure, logic, and game layout. This technique is known as **incremental build.**

We will separate the game logic from the visuals, which we will create using `canvas`. When we are done with the logic part, we should be able to "play" the game from the console. What does this mean? We should be able to create hangman object and call the methods on it to change its properties, just the same as eventually we will do combined with the graphical representation of the game.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your TAs can check up your work.

## Tests!

In order to help you develop the game logic, we have added some **Jasmine** tests. Open the `SpecRunner.html` to check them. To see each test, open the `tests/hangman.spec.js` file.

## Instructions

### Iteration 1: The game logic

In the `javascript/hangman.js` file, create Hangman class and its methods as described below.

#### Hangman Class

First let's take a look at the starter code in the `hangman.js` file. We can see that, in this file, we will be developing the `Hangman` class, and all its methods. The `Hangman` class has `constructor` method and it expects an array of words as the single parameter.

Let's start with properties. `Hangman` should have the following properties:

- **words** - an `array` to store all the words that could be given to a player to guess. When the class is instantiated, all the words passed to the constructor as an argument will be saved in this property.

- **secretWord** - here we will store the word that has been picked as a secret word for the current game. Every time a new game starts, a random word from the `this.words` array needs to be picked as the secret word to be guessed by the player. That is, when the class is instantiated, call the method `pickWord()` and save the result to the property `secretWord`.

- **letters** - an `array` in which we will store the letters that the user has already picked while trying to guess the secret word. It is important to keep the track of these letters so we can, later on, apply some logic to prevent users from repeating them.

- **guessedLetters** - a `string` to store the _letters_ user chose and guessed. We will use this to know when the user has won.

- **errorsLeft** - the initial/start value should be 10, and it should decrease every time a user picks a letter that doesn't appear in the word they need to guess.

#### The Hangman methods

Now, let's move to the `Hangman` methods. Keep working in the same file.

- `pickWord()` - a method that returns a random word from the array of `words`.

- `checkIfLetter(keyCode)` - a method that returns _true_ or _false_ depending on the `keyCode` of the key pressed by the user: if the `keyCode` corresponds to a character from `a-z`, it should return _true_, otherwise, it should return _false_. You can use [keycode.info](https://keycode.info/) to find out which codes refer to each key.

- `checkClickedLetters(letter)` - a method that should check if the letter passed as an argument has already been pressed. It should return _true_ if it was not or _false_ in the opposite case.

- `addCorrectLetter(letter)` - a method that should add the passed letter to the `guessedLetters` property. This could be a good place to check if the user won.

- `addWrongLetter(letter)` - a method that should subtract one from the variable `errorsLeft`. It also should push this letter in the array of letters if the letter is not there already.

- `checkGameOver()` - a method that checks if the user has any errors left. If the number of errors is greater than 0, the method should return _false_ (the game continues). In opposite case, if there is no more errors left, the method should return true.

- `checkWinner()` - a method that should check if the user won and return the corresponding boolean value.

### Iteration 2: Draw in Canvas

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3e1e1919b29ba77e77cdcec2ed7b92c5.png)

Now we need to develop some visuals in order to finish our game. As we said, we will do it in a different file separating it from the logic.

#### HangmanCanvas class

In the `javascript/canvas.js` file, you can see `HangmanCanvas` class and it has the following properties:

- **context** - the canvas context has been already captured in its property `this.context`.

- **secretWord** - the _HangmanCanvas_ class should know which random secret word has been chosen. This is actually super doable since it receives this word as an argument, as we can see in its constructor.

:bulb: _Hint_: You can uncomment now the code provided in the `javascript/hangman.js` file:

```javascript
// javascript/hangman.js

// HINT (uncomment when start working on the canvas portion of the lab)
hangman.secretWord = hangman.pickWord();
hangmanCanvas = new HangmanCanvas(hangman.secretWord);
```

#### The HangmanCanvas methods

- **createBoard()** - the method that should clear the `canvas`, so every time we start the game we have a clean one. This method also should call the next one we will define, the _drawLines()_.

- **drawLines()** - the method that should draw one line for each letter of the secret word. At this point we know the secret word the user has to guess.

- **writeCorrectLetter(index)** and **writeWrongLetter(letter, errorsLeft)** - the methods that should write the letter on which the user has just clicked, on the appropriate part of the canvas. After checking if the letter was not already clicked, we should write it on our board. If the secret word includes the letter, we should write it in the position where it belongs, and if the letter is not included in the secret word, we should write it on the top right corner, so that the user knows which letters were already clicked.

- **drawHangman(errorsLeft)** - the method that should draw the **hangman**. You will see that the drawing is composed of multiple lines and one circle. Go ahead and experiment, you will see it is pretty straightforward. :wink:

### Bonus

Your game is finished! Anybody can play it, but we need to show them something when they win or lose, so go ahead and create two additional methods **`gameOver()`** and **`winner()`**, to utilize the images available in the `images` folder.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1dc0d7772d204da800d078c153c12e47.png)

Happy coding! :heart:
