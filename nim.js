import Game from './Game.js';

function newgame(e) {
  document.getElementsByClassName("game_board")[0].innerHTML = "";
  const game = new Game();

  //doing this rather than AddEventListener means EventListener is not
  //readded on a new game.
  document.onclick = function(e) {
    if (e.target.classList.contains('token')) {
      game.humanSelect(e.target);
    } else if (e.target.classList[0] === 'human_move') {
      game.humanMove();
    }
  }

  if (e.target.id === "computer") {
    game.computerMove();
  }
  
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

function showNewGame() {
  let newGameVisible
  document.getElementsByClassName("newgame_container")[0].classList.add("newgame_on")
  newGameVisible = true
  
  setTimeout(function() {
    document.addEventListener('click', function() {
      if(newGameVisible == true) {
        document.getElementsByClassName("newgame_container")[0].classList.remove("newgame_on")
        newGameVisible = false
      } 
    })}, 20)
}

showNewGame();
document.getElementById('newgame').addEventListener('click', showNewGame);
document.getElementById('playagain').addEventListener('click', showNewGame);
document.getElementById('instructions').addEventListener('click', showInstructions);
document.getElementById("newgamep1").addEventListener('click', newgame);
document.getElementById("newgamecomp").addEventListener('click', newgame);
