class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    clearRect()
    drawLines()
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      ctx.fillRect(i * 50,  0, 50, 50)
    }
  }

  writeCorrectLetter(letter) {
    for (let i=0; i < this.secretWord.length; i++)
    ctx.fillText(letter[i], 10, 20)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
