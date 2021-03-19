class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.secretWordToShow = Array(secretWord.length).fill("_ ");
    this.wrongLetter = [];
    this.heigthLetters = 40;
    this.startPointHeigthWordToGuess = 150;
    this.arrDrawHangman = [
      this.drawfoot.bind(this),
      this.drawFirstLine.bind(this),
      this.drawSecondLine.bind(this),
      this.drawthirdLine.bind(this),
      this.drawHead.bind(this),
      this.drawBody.bind(this),
      this.drawFirstLeg.bind(this),
      this.drawlastleg.bind(this),
    ];
  }

  createBoard() {
    this.context.canvas.width = this.context.canvas.width;
    this.drawLines();
    this.writeWrongLetter();
  }

  drawLines() {
    this.writeCorrectLetter();
  }
  writeCorrectLetter(letter = "&") {
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
    this.context.fillText("Word to guess:", 20, this.startPointHeigthWordToGuess - 80);
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
    let i = 0;
    this.context.beginPath();
    this.context.strokeStyle = "green";
    this.context.strokeRect(300, 300, 600, 450);
    this.context.closePath();

    while (i < errorsLeft) {
      this.arrDrawHangman[i]();
      i++;
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
  drawfoot() {
    this.context.beginPath();
    this.context.strokeStyle = "black";
    this.context.lineWidth = 5;
    this.context.moveTo(550, 750);
    this.context.lineTo(350, 750);
    this.context.lineTo(450, 700);
    this.context.closePath();
    this.context.stroke();
  }
  drawFirstLine() {
    this.context.beginPath();
    this.context.moveTo(450, 700);
    this.context.lineTo(450, 400);
    this.context.stroke();
    this.context.closePath();
  }
  drawSecondLine() {
    this.context.beginPath();
    this.context.moveTo(450, 402.5);
    this.context.lineTo(650, 400);
    this.context.stroke();
    this.context.closePath();
  }
  drawthirdLine() {
    this.context.beginPath();
    this.context.moveTo(647.5, 400);
    this.context.lineTo(647.5, 450);
    this.context.stroke();
    this.context.closePath();
  }
  drawHead() {
    this.context.beginPath();
    this.context.arc(647.5, 470, 20, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
  }
  drawBody() {
    this.context.beginPath();
    this.context.moveTo(647.5, 487.5);
    this.context.lineTo(647.5, 560);
    this.context.stroke();
    this.context.closePath();
  }
  drawFirstLeg() {
    console.log("in leg");
    this.context.beginPath();
    this.context.moveTo(647, 559);
    this.context.lineTo(610, 600);
    this.context.stroke();
    this.context.closePath();
  }
  drawlastleg() {
    this.context.beginPath();
    this.context.moveTo(647, 559);
    this.context.lineTo(680, 600);
    this.context.stroke();
    this.context.closePath();
  }
}
