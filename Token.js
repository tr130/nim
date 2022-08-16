export default class Token {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.present = true;
    this.id = `${row}-${col}`
  }

  drawToken(rowDiv) {
    // const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // svgSpace.setAttributeNS(null, "id", `${this.id}`);
    // svgSpace.setAttributeNS(null, "class", "token");
    // svgSpace.setAttributeNS(null, "cx", 480/(this.row+2) * (this.col*0.5+1));
    // svgSpace.setAttributeNS(null, "cy", ((600/8) * (2*this.row+1)));
    // svgSpace.setAttributeNS(null, "r", 16);
    // svgSpace.setAttributeNS(null, "fill", "black");
    // svgSpace.setAttributeNS(null, "stroke", "none");
    // document.getElementById("game-board").appendChild(svgSpace);

    const token = document.createElement("div")
    token.setAttribute("id", `${this.id}`);
    token.setAttribute("class", "token");
    rowDiv.appendChild(token);
  }
}