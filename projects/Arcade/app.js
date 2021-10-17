"use strict";

const gameState = {
    players: ['x', 'o'],
    board: ["", "", "", "", "", "", "", "", ""],
    players: [],
    currentPlayerIndex: 0
  }


// Get my Elements
const board = document.querySelector('#board');
const cells = board.children;
const newGame = document.querySelector('#new-game')
const playerTurn = document.querySelector('#player-turn')
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Updates the State
// let state = initialState;

function updatePlayerTurn(){
  // Switch current players index for each turn
  if (gameState.currentPlayerIndex === 0){
    gameState.currentPlayerIndex = 1;
  } else {
    gameState.currentPlayerIndex = 0;
  }
}

function checkWinner () {
  // Check the innerHTML of the cells and compare that to the winningCombinations arrays and see if all 3 of those cells include the same variable
  // Did not have time to start the validation and then make a new game button appear
}

// Renders
function  renderNewGame(){
  newGame.innerHTML = '';
  const player1Input = renderPlayerNameInput(1);
  const player2Input = renderPlayerNameInput(2);
  const button = document.createElement("button");
  button.innerText = "Start Game";
  newGame.append(player1Input, player2Input, button);
  button.addEventListener('click', () => {
    if (player1Input.value && player2Input.value){
    gameState.players = [player1Input.value, player2Input.value];
    renderPlayerTurn();
    newGame.innerHTML = '';
    }
  })
}


function renderCharacter (){
  // if (cells.innerHTML !== null){
  //   return renderCharacter    ----------------My Attempt at making a cell with text in it unclickable--------
  // } else
   if (gameState.currentPlayerIndex === 0){
    event.target.innerHTML = 'X';
  } else {
  event.target.innerHTML='O';
  }
} 

function renderPlayerNameInput(playerNumber){
  const input= document.createElement('input');
  input.setAttribute("type", "text");
  input.setAttribute("name", `player${playerNumber}`);
  input.setAttribute("placeholder", `Enter Player ${playerNumber} Name`);
  return input;
}

function renderPlayerTurn(){
  playerTurn.innerText = `Current Player: ${gameState.players[gameState.currentPlayerIndex]}`
}

// Actions
board.addEventListener('click', function(event) {

  renderCharacter();
  updatePlayerTurn();
  renderPlayerTurn();
})
renderNewGame();


// // To Do List
// Cant select box with text in it
// New Game Button
// Check victory
// make computer moves
