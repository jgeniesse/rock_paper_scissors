let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function main() {
  rock.addEventListener('click', function() {
    game("r");
  })

  paper.addEventListener('click', function() {
    game("p");
  })

  scissors.addEventListener('click', function() {
    game("s");
  })
}

main();

function game(userChoice) {
  let randNum = Math.random();
 
  if(randNum < .33) { //lose
    lose(userChoice);
  } else if(randNum > .66) { //win
    win(userChoice);
  } else { //tie
    tie(userChoice);
  }
}

function win(userChoice) {
  userScore_span.innerHTML = ++userScore;
  if(userChoice === "r") {
    result_div.innerHTML = "Rock beats Scissors. YOU WIN!";
  } else if(userChoice === "p") {
    result_div.innerHTML = "Paper beats Rock. YOU WIN!";
  } else {
    result_div.innerHTML = "Scissors beats Paper. YOU WIN!";
  }
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 600);
}

function lose(userChoice) {
  compScore_span.innerHTML = ++computerScore;
   if(userChoice === "s") {
    result_div.innerHTML = "Rock beats Scissors. You lose.";
  } else if(userChoice === "r") {
    result_div.innerHTML = "Paper beats Rock. You lose.";
  } else {
    result_div.innerHTML = "Scissors beats Paper. You lose.";
  }
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 600);
}

function tie(userChoice) {
  result_div.innerHTML = "You tied.";
  document.getElementById(userChoice).classList.add('yellow-glow');
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove('yellow-glow');
  }, 600);
}