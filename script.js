let playerPoints = 0;
let computerPoints = 0;

const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random()*3);//Random number is for 3 choices between 0 and 2
  switch(randomNumber){
  case 0:
    return'rock';
  case 1:
    return'paper';
  case 2:
    return'scissors';
}
}


const getPlayerSelection = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
    return userInput;
  }else{
    console.log("Enter a valid choice!");
  }
}


function play(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    return ++computerPoints, ++playerPoints;
  } 
  if(playerSelection == 'rock'){
    if(computerSelection === 'paper'){
      return ++computerPoints;
    }else{
      return ++playerPoints;
    }
  }
  if(playerSelection === 'paper'){
    if(computerSelection === 'scissors'){
      return ++computerPoints;
    }else{
      return ++playerPoints;
    } 
  }
  if(playerSelection === 'scissors'){
      if(computerSelection === 'rock'){
        return ++computerPoints;
      }else{
        return ++playerPoints;
      }
  }
}

function game(){
  const computerSelection = getComputerChoice();
  console.log("Computer Choice", computerSelection);

  let userInput = prompt("Enter your choice for rock paper scissors");
  const playerSelection = getPlayerSelection(userInput);
  console.log("player Choice",playerSelection);

  play(playerSelection, computerSelection);
}

game();

// for(let i = 0; i < 5; i++){
//   game();
// }
checkWinner(computerPoints,playerPoints);

function checkWinner(computerPoints,playerPoints){
  if(playerPoints > computerPoints){
    console.log("You Won by", playerPoints);
  }else if(computerPoints > playerPoints){
    console.log("Computer Won", computerPoints);
  }else{
    console.log("It was Tie", playerPoints, computerPoints);
  }
}
