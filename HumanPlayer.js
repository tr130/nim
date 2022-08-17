export default class HumanPlayer {
  constructor() {
    this.playingRow = null;
  }

  selectToken(token, game) {
    let row = token.row;
    if (this.playingRow !== null && this.playingRow !== row) {
      for (let row of game.tokens) {
        for (let tkn of row) {
        this.deselectToken(tkn);
        document.getElementById(tkn.id).classList.remove("token_selected");
        }
      }
    }
    this.playingRow = row;
    token.selected = true;
  }
  
  deselectToken(token) {
    token.selected = false;
  }
}