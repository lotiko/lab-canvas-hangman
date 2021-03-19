class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.secretWordToShow = Array(secretWord.length).fill("_ ");
    this.wrongLetter = [];
    this.heigthLetters = 40;
    this.startPointHeigthWordToGuess = 150;
  }

  createBoard() {
    this.context.canvas.width = this.context.canvas.width;
    this.drawLines();
    this.writeWrongLetter();
  }

  drawLines() {
    this.context.beginPath();
    this.context.font = "40px Arial";
    this.context.fillText(this.secretWordToShow.join(""), 20, this.startPointHeigthWordToGuess);
    this.context.closePath();
  }

  writeCorrectLetter(letter) {
    for (let index = 0; index < this.secretWord.length; index++) {
      const letterInWord = this.secretWord[index];
      if (letterInWord === letter) {
        this.secretWordToShow[index] = letter + " ";
      }
    }
    this.context.beginPath();
    this.context.clearRect(
      0,
      0,
      20 + this.secretWord.length * 40,
      this.startPointHeigthWordToGuess + 70
    );
    this.context.font = "40px Arial";
    this.context.fillText(this.secretWordToShow.join(""), 20, this.startPointHeigthWordToGuess);
    this.context.closePath();
    // this.writeWrongLetter(letter, this.errorsLeft);
  }

  writeWrongLetter(letter, errorsLeft = 8) {
    this.wrongLetter.push(letter);
    this.context.beginPath();
    this.context.clearRect(900, 0, 1200 - 900, 200);
    this.context.font = "25px Arial";
    this.context.fillText("Errors left: " + errorsLeft, 910, 80);
    this.context.fillText("Wrong letters choose:", 910, 130);
    if (this.wrongLetter.length > 0) {
      this.context.fillText(this.wrongLetter.join(" "), 910, 160);
    }
    this.context.closePath();
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
