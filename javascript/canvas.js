class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.widthPointBottomLetters = [];
    this.heigthLetters = 40;
    this.startPointHeigthWordToGuess = 500;
  }

  createBoard() {
    // ... your code goes here
    this.context.canvas.width = this.context.canvas.width;
    this.drawLines();
  }

  drawLines() {
    let nbLine = this.secretWord.length;
    let i = 0;
    let startPointWidth = 500;
    while (i < nbLine) {
      this.context.beginPath();
      this.context.lineWidth = 4;
      this.context.moveTo(startPointWidth, this.startPointHeigthWordToGuess);
      this.context.lineTo(startPointWidth + 30, this.startPointHeigthWordToGuess);
      this.context.stroke();
      this.widthPointLetters.push(startPointWidth);
      startPointWidth += 40;
      i++;
    }
  }

  writeCorrectLetter(letter) {
    let indexOfLettersInWord = [];
    for (let index = 0; index < this.secretWord.length; index++) {
      const letterInWord = this.secretWord[index];
      if (letterInWord === letter) {
        indexOfLettersInWord.push(i);
      }
    }
    indexOfLettersInWord.map((index) => {
      this.context.beginPath();
      this.context.font = "30px Arial";
      let startWidthPointletter = this.widthPointBottomLetters[index] + 30;
      this.context.fillText(letter, startWidthPointletter, this.startPointHeigthWordToGuess);
      this.context.closePath();
    });
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
