export default class HumanPlayer {
  constructor() {
    this.playingRow = null;
    this.selectedTokens = [];
  }

  selectToken(token) {
    let row = token.row;
    if (this.playingRow !== null && this.playingRow !== row) {
      //deselect current selectedTokens
      for (let selectedToken of this.selectedTokens) {
        document.getElementById(selectedToken.id).classList.remove('token_selected');
      }
      this.selectedTokens = [];
      console.log('different row')
    }
    this.playingRow = row;
    this.selectedTokens.push(token);
    console.log(this.selectedTokens);
  }
}