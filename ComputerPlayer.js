export default class ComputerPlayer {
  constructor() {
    this.selectedTokens = [];
  }

  decideMove(tokens) {
    let nimTotals = [0,0,0,0];
    for (let i = 0; i < 4; i++) {
      for (let token of tokens[i]) {
        if (token.present) {
          nimTotals[i]++;
        }
      }
    }

    if (nimTotals.filter((total)=>total>1).length == 1) {
      let highestValue = Math.max(...nimTotals);
      let highestRow = nimTotals.indexOf(highestValue);
      if(nimTotals.filter((total)=>total).length % 2) {
        return [highestRow, highestValue - 1];
      } else {
        return [highestRow, highestValue];
      }
    } else {
        // ^ is bitwise XOR
      let nimsum = nimTotals[0] ^ nimTotals[1] ^ nimTotals[2] ^ nimTotals[3];
      console.log(nimsum)

      if (nimsum) {
        for (let i = 0; i < 4; i++) {
          if ((nimTotals[i] ^ nimsum) < nimTotals[i]) {
            return [i, nimTotals[i] - (nimTotals[i] ^ nimsum)];
          }
        }
      } else {
        for (let i = 0; i < 4; i++) {
          if (nimTotals[i]) {
            return [i,1];
          }
        }
      }
    }

  }

  selectTokens(tokens) {
    let move = this.decideMove(tokens);
    console.log(move)
    let row = move[0];
    let quantity = move[1];
    let selected = 0;
    let rowLength = tokens[row].length;
    for (let i = rowLength - 1; selected < quantity; i--) {
      if ( tokens[row][i].present ) {
        this.selectedTokens.push(tokens[row][i]);
        selected++;
      }
    }
    return this.selectedTokens;
  }  

}

// const tokens1 = [
//   [
//     {'present':1}
//   ],
//   [
//     {'present':1},
//     {'present':1},
//     {'present':0}
//   ],
//   [
//     {'present':1},
//     {'present':0},
//     {'present':0},
//     {'present':0},
//     {'present':0}
//   ],
//   [
//     {'present':1},
//     {'present':0},
//     {'present':0},
//     {'present':0},
//     {'present':0},
//     {'present':0},
//     {'present':0}
//   ]
// ]

// let player = new ComputerPlayer();
// console.log(player.decideMove(tokens1));
