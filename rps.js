function getComputerChoice () {
    var randomnumber = Math.floor(Math.random() * 3) + 1;
    if (randomnumber == 1) {
        return "Rock";
      } else if (randomnumber == 2) {
        return "Paper";
      } else {
        return "Scissors";
      }
}

var playerSelection;


var computerSelection;


function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie! ";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats rock!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beat paper!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You Lose! Rock beats scissors!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "You Lose! Paper beats rock!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You Lose! Scissors beat paper!";
    }
    }

    var w = 0;
    var l = 0;
    var t = 0;
    var r = "starting";

function game (playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rocks, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();
        computerSelection = computerSelection.toLowerCase();

        r = playRound(playerSelection, computerSelection);

        console.log(r);

        if (r.slice(4,7) == "Win") {
            w = w + 1;
        } else if (r.slice(4,8) == "Lose") {
            l = l + 1;
        } else {
            t = t + 1;
            i = i - 1;
        }
     }
     if (w > l) {
        return "YOU WIN THE BEST OUT OF FIVE!!!";
     } else {
        return "YOU Lose THE BEST OUT OF FIVE!!!";
     }

    }

    console.log(game(playerSelection, computerSelection));

