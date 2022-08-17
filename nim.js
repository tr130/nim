import Game from './Game.js';

function newgame() {
  let gameInProgress;
  try {
    console.log(game.tokens)
  } catch {
    console.log("no game")
  }

  document.getElementsByClassName("game_board")[0].innerHTML = ""
  let game = null;
  game = new Game();
  console.log(game.tokens);

  //doing this rather than AddEventListener means EventListener is not
  //readded on a new game.
  document.onclick = function(e) {
    if (e.target.classList.contains('token')) {
      game.humanSelect(e.target);
    } else if (e.target.classList[0] === 'human_move') {
      game.humanMove();
    }
  }

  setTimeout(function() { gameInProgress = true }, 2000)
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
