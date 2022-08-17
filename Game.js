import ComputerPlayer from './ComputerPlayer.js';
import Token from './Token.js';
import HumanPlayer from './HumanPlayer.js';

export default class Game {
  constructor() {
    this.tokens = this.createTokens();
    this.computerPlayer = new ComputerPlayer();
    this.humanPlayer = new HumanPlayer();
  }

  createTokens() {
    let tokens = [];
    for (let i = 0; i < 4; i++) {
      const rowDiv = document.createElement('div')
      rowDiv.setAttribute("class", "game_row")
      document.getElementById('game-board').appendChild(rowDiv)
      let limit = 2*i + 1;
      let row = [];
      for (let j = 0; j < limit; j++) {
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
    const _this = this
    setTimeout(function(){
      if (!_this.makeMove()) {
        _this.endGame("computer")
      }
    }, 500);
    
  }

  humanSelect(token) {
    let row = token.id[0];
    let col = token.id[2];
    if (token.classList.contains("token_selected")) {
      token.classList.remove("token_selected");
      this.humanPlayer.deselectToken(this.tokens[row][col]);
    } else {
      this.humanPlayer.selectToken(this.tokens[row][col], this);
      token.classList.add('token_selected');
    }
    if (this.filterTokens(this.tokens, "selected").length > 0) {
      document.getElementById("make_move").removeAttribute("disabled")
    } else {
      document.getElementById("make_move").setAttribute("disabled", "true")
    }
  }

  humanMove() {
    document.getElementById("make_move").setAttribute("disabled", "true")
    if (this.makeMove(this.humanPlayer.selectedTokens)) {
      this.computerMove();
    } else {
      this.endGame("human");
    }
    
  }

  makeMove() {
    for (let token of this.filterTokens(this.tokens, "selected")) {
      token.present = false;
      token.selected = false;
      document.getElementById(token.id).classList.add('token_taken');
    }
    if (this.filterTokens(this.tokens, "present").length === 0) {
      return false
    }
    return true
  }

  filterTokens(tokens, condition) {
    let filtered = []
    for (let row of tokens) {
      for (let token of row) {
        if (token[condition]) {
          filtered.push(token)
        }
      }
    }
    return filtered
  }

  endGame(loser) {
    let endgameVisible;
    document.getElementsByClassName("endgame_container")[0].classList.add("endgame_on");
    endgameVisible = true;
    if (loser === "human") {
      document.getElementById("endgame_header").innerText = "You lost."
      document.getElementById("endgame_message").innerText = "Despite having perfect information."
    } else if (loser === "computer") {
      document.getElementById("endgame_header").innerText = "You won."
      document.getElementById("endgame_message").innerText = "Great! Do it again."
    }
    
    setTimeout(function() {
      document.addEventListener('click', function() {
        if(endgameVisible == true) {
          document.getElementsByClassName("endgame_container")[0].classList.remove("endgame_on");
          endgameVisible = false;
        } 
      })}, 20);
  }
}
