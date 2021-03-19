class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 8;
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    console.log(keyCode);
    if (keyCode < "a" && keyCode < "z") {
      return false;
    }
    return true;
    //[...this.secretWord].includes(keyLetter))
    //let keyLetter = String.fromCharCode(keyCode);
  }

  checkClickedLetters(letter) {
    let isAlreadyClicked = this.letters.includes(letter);
    if (!isAlreadyClicked) {
      if (this.secretWord.includes(letter)) {
        this.addCorrectLetter(letter);
      } else {
        this.addWrongLetter(letter);
      }
      return true;
    }
    return false;
  }
  checkUserHasGuess(oldGuessedLength) {
    return oldGuessedLength < this.guessedLetters.length;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length;
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");
const imgLogo = document.querySelector(".game-logo");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisboa"]);
    imgLogo.hidden = false;
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // hangmanCanvas.gameOver();

    // ... your code goes here
  });
}

document.addEventListener("keydown", (ev) => {
  let letter = ev.key;
  let oldGuessedLength = hangman.guessedLetters.length || 0;

  if (!hangman.checkIfLetter(letter)) {
    return;
  } else {
    if (!hangman.checkClickedLetters(letter)) {
      return;
    } else {
      if (hangman.checkUserHasGuess(oldGuessedLength)) hangmanCanvas.writeCorrectLetter(letter);
      else hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
    }
    let hasLose = hangman.checkGameOver();
    let hasWin = hangman.checkWinner();
    if (hasLose) {
      imgLogo.hidden = true;
      hangmanCanvas.gameOver();
      return;
    }
    if (hasWin) {
      hangmanCanvas.winner();
      return;
    }
  }
});
