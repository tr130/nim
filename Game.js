import ComputerPlayer from './ComputerPlayer.js';
import Token from './Token.js';
import Board from './Board.js';
import HumanPlayer from './HumanPlayer.js';

export default class Game {
  constructor() {
    this.board = new Board();
    this.tokens = this.createTokens();
    this.computerPlayer = new ComputerPlayer();
    this.humanPlayer = new HumanPlayer();
  }

  createTokens() {
    let tokens = [];
    document.getElementById('game-board').textContent = '';
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  svgSpace.setAttributeNS(null, "x", 0);
  svgSpace.setAttributeNS(null, "y", 0);
  svgSpace.setAttributeNS(null, "height", 600);
  svgSpace.setAttributeNS(null, "width", 480);
  svgSpace.setAttributeNS(null, "fill", "blue");
  svgSpace.setAttributeNS(null, "stroke", "none");
  document.getElementById("game-board").appendChild(svgSpace);
    for (let i = 0; i < 4; i++) {
      let limit = 2*i + 1;
      let row = [];
      for (let j = 0; j < limit; j++) {
        console.log(`${i}-${j}`)
        let token = new Token(i,j);
        token.drawToken();
        row.push(token);
     }
     tokens.push(row);
    }
    return tokens;
  }

  computerMove() {
    this.makeMove(this.computerPlayer.selectTokens(this.tokens))
  }

  humanSelect(token) {
    console.log('human move');
    token.classList.add('token_selected');
    console.log(token.id);
    let row = token.id[0];
    let col = token.id[2];
    this.humanPlayer.selectToken(this.tokens[row][col]);
    console.log(this.tokens);
  }

  humanMove() {
    this.makeMove(this.humanPlayer.selectedTokens);
    this.computerMove();
  }

  makeMove([...selectedTokens]) {
    for (let token of selectedTokens) {
      let row = token.row;
      let col = token.col;
      this.tokens[row][col].present = false;
      document.getElementById(token.id).classList.add('token_taken');
    }
  }
}


// let game = new Game();

// game.makeMove([3,1]);
// game.makeMove([2,3]);
// game.computerMove();
// game.computerMove();