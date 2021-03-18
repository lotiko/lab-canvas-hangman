class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 8; 
  }

  pickWord() {
    return words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {
    let keyLetter = String.fromCharCode(keyCode);
    return [...this.secretWord].includes(keyLetter)
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    let KeyCode = letter.fromCharCode(0);
    if(this.checkIfLetter(KeyCode)) {
      this.guessedLetters += letter
    } 
  }

  addWrongLetter(letter) {
    let KeyCode = letter.fromCharCode(0);
    if(!this.checkIfLetter(KeyCode)) {
      this.letters.push(letter);
      this.errorsLeft -1;
    } 
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length ? true : false;
  }
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
