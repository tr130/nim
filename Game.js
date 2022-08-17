import ComputerPlayer from './ComputerPlayer.js';
import Token from './Token.js';
import Board from './Board.js';
import HumanPlayer from './HumanPlayer.js';

export default class Game {
  constructor() {
    //this.board = new Board();
    this.tokens = this.createTokens();
    this.computerPlayer = new ComputerPlayer();
    this.humanPlayer = new HumanPlayer();
  }

  createTokens() {
    let tokens = [];
  //   document.getElementById('game-board').textContent = '';
  //   const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  // svgSpace.setAttributeNS(null, "x", 0);
  // svgSpace.setAttributeNS(null, "y", 0);
  // svgSpace.setAttributeNS(null, "height", 600);
  // svgSpace.setAttributeNS(null, "width", 480);
  // svgSpace.setAttributeNS(null, "fill", "blue");
  // svgSpace.setAttributeNS(null, "stroke", "none");
  // document.getElementById("game-board").appendChild(svgSpace);
    for (let i = 0; i < 4; i++) {
      const rowDiv = document.createElement('div')
      rowDiv.setAttribute("class", "game_row")
      document.getElementById('game-board').appendChild(rowDiv)
      let limit = 2*i + 1;
      let row = [];
      for (let j = 0; j < limit; j++) {
        console.log(`${i}-${j}`)
        let token = new Token(i,j);
        token.drawToken(rowDiv);
        row.push(token);
     }
     tokens.push(row);
    }
    return tokens;
  }

  computerMove() {
    this.computerPlayer.selectTokens(this.tokens)
    this.makeMove()
  }

  humanSelect(token) {
    console.log('human move');
    console.log(token.id);
    let row = token.id[0];
    let col = token.id[2];
    if (token.classList.contains("token_selected")) {
      token.classList.remove("token_selected");
      console.log("go deselect")
      this.humanPlayer.deselectToken(this.tokens[row][col]);
    } else {
      
      console.log("go select")
      this.humanPlayer.selectToken(this.tokens[row][col], this);
      token.classList.add('token_selected');
    }
    console.log(this.tokens);
    if (this.tokensSelected(this.tokens).length > 0) {
      document.getElementById("make_move").removeAttribute("disabled")
    } else {
      document.getElementById("make_move").setAttribute("disabled", "true")
    }
  }

  humanMove() {
    this.makeMove(this.humanPlayer.selectedTokens);
    document.getElementById("make_move").setAttribute("disabled", "true")
    this.computerMove();
  }

  makeMove() {
    for (let token of this.tokensSelected(this.tokens)) {
      token.present = false;
      token.selected = false;
      document.getElementById(token.id).classList.add('token_taken');
    }
  }

  tokensSelected(tokens) {
    let selectedTokens = []
    for (let row of tokens) {
      for (let token of row) {
        if (token.selected) {
          selectedTokens.push(token)
        }
      }
    }
    return selectedTokens
  }


}


// let game = new Game();

// game.makeMove([3,1]);
// game.makeMove([2,3]);
// game.computerMove();
// game.computerMove();