import Game from './Game.js';

function newgame() {
  document.getElementsByClassName("game_board")[0].innerHTML = ""
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

function showInstructions() {
  let instructionsVisible
  document.getElementsByClassName("instructions_container")[0].classList.add("instructions_on")
  instructionsVisible = true
  
  setTimeout(function() {
    document.addEventListener('click', function() {
      if(instructionsVisible == true) {
        document.getElementsByClassName("instructions_container")[0].classList.remove("instructions_on")
        instructionsVisible = false
      } 
    })}, 20)
}

document.getElementById('newGame').addEventListener('click', newgame);
document.getElementById('instructions').addEventListener('click', showInstructions);
