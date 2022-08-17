export default class Token {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.present = true;
    this.selected = false;
    this.id = `${row}-${col}`
  }

  drawToken(rowDiv) {
    const token = document.createElement("div")
    token.setAttribute("id", `${this.id}`);
    token.setAttribute("class", "token");
    rowDiv.appendChild(token);
  }
}