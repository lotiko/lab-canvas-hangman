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
      if (this.words.includes(letter)) {
        this.addCorrectLetter(letter);
      } else {
        this.addWrongLetter(letter);
      }
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    console.log(letter);
    if (!this.checkIfLetter(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    if (this.checkIfLetter(letter)) {
      this.letters.push(letter);
    }
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length ? true : false;
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisboa"]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener("keydown", (ev) => {
  let letter = ev.key;
  let isLetter = hangman.checkIfLetter(letter);
  if (!isLetter) {
    return;
  } else {
    let isAlreadyClicked = hangman.checkClickedLetters(letter);
    if (isAlreadyClicked) {
      return;
    } else {
      hangmanCanvas.writeCorrectLetter(letter);
    }
  }
});
