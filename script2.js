let playerPoints = 0;
let computerPoints = 0;

const scoreInfo  = document.querySelector("#score-info");
const scoreMsg = document.querySelector("#score-msg");
const playerOption = document.querySelector("#playerOption");
const computerOption = document.querySelector("#computerOption");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");


//Function to generate computer choiece
const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random()*3);//Random number is for 3 choices between 0 and 2
  switch(randomNumber){
  case 0:
    computerOption.innerHTML = '✊';
    return'rock';
  case 1:
    computerOption.innerHTML = '🖐️';
    return'paper';
  case 2:
    computerOption.innerHTML = '✌️';
    return'scissors';
}
}

//Takes User Input from HTMl Buttons
const userInputBtn = document.querySelectorAll("button");
let userInput;


function playGame(){
  userInputBtn.forEach((button) => {
    button.addEventListener('click', () =>{
      userInput = button.id;
      handlePlayerSign(userInput);
      console.log("User Choice",userInput);
      const computerSelection = getComputerChoice();
      console.log("Computer Choice", computerSelection);
      checkWinner(userInput, computerSelection);
      endGame(playerPoints, computerPoints);

    })
  })
}

playGame();


//Function to check the winner
function checkWinner(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    scoreInfo.textContent = "It was Tie!";
    scoreMsg.innerHTML = `${playerSelection} Ties with ${computerSelection}`;
    console.log("Tie");
    playerPoints++;
    computerPoints++;
    updateScore(playerPoints,computerPoints);
    console.log("Player Points: ", playerPoints);
    console.log("Computer points: ", computerPoints);
  }
  if(
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ){
    scoreInfo.innerHTML = "You Won!";
    scoreMsg.innerHTML = `${playerSelection} beats ${computerSelection}`;
    console.log("You Won");
    playerPoints++;
    updateScore(playerPoints,computerPoints);
    console.log("Player Points: ", playerPoints);
    console.log("Computer points: ", computerPoints);
  }
  if(
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ){
    scoreInfo.innerHTML = "Computer Won!";
    scoreMsg.innerHTML = `${computerSelection} beats ${playerSelection}`;
    console.log("Computer Won");
    computerPoints++;
    updateScore(playerPoints,computerPoints);
    console.log("Player Points: ", playerPoints);
    console.log("Computer points: ", computerPoints);
  }
}

function endGame(playerPoints, computerPoints) {
  if(playerPoints === 5 || computerPoints === 5){
    if(playerPoints > computerPoints){
      console.log("You Won FInally");
      scoreInfo.innerHTML = `🎉 Final Winner: You! 🎉`;
    }else{
      console.log("Computer Won Finally");
      scoreInfo.innerHTML = `😒 Final Winner: Computer! 😒`;
    }
    restart();
  }
}

function restart() {
  playerPoints = 0;
  computerPoints = 0;
}


const handlePlayerSign = (playerSelection) =>{
  switch (playerSelection) {
    case 'rock':
      playerOption.innerHTML = `✊`;
      break;
    case 'paper':
      playerOption.innerHTML = `🖐️`;
      break;
    case 'scissors':
      playerOption.innerHTML = `✌️`;
      break;
  }
}

const updateScore = (playerPoints,computerPoints) => {
  playerScoreDisplay.innerHTML = `Player Points : ${playerPoints}`;
  computerScoreDisplay.innerHTML = `Computer Points : ${computerPoints}`;
}