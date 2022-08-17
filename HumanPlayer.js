export default class HumanPlayer {
  constructor() {
    this.playingRow = null;
  }

  selectToken(token, game) {
    let row = token.row;
    if (this.playingRow !== null && this.playingRow !== row) {
      //deselect current selectedTokens
      // for (let selectedToken of this.selectedTokens) {
      //   document.getElementById(selectedToken.id).classList.remove('token_selected');
      // }
      console.log("gametokens", game.tokens)
      for (let row of game.tokens) {
        console.log("row", row)
        for (let tkn of row) {
        this.deselectToken(tkn)
        console.log("token", tkn, tkn.id)
        document.getElementById(tkn.id).classList.remove("token_selected");
        }

      }
      console.log('different row')
    }
    this.playingRow = row;
    token.selected = true;
  }

  deselectToken(token) {
    token.selected = false;
  }
}