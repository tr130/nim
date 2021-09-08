import Game from './Game.js';

function newgame() {
  let game = new Game();
  console.log(game.tokens);

  document.addEventListener('click', function(e) {
    if (e.target.classList[0] === 'token') {
      game.humanSelect(e.target);
    } else if (e.target.classList[0] === 'human_move') {
      game.humanMove();
    }
  })
}

document.getElementById('newGame').addEventListener('click', newgame);

