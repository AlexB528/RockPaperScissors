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

    const container = document.querySelector('#container');
    const content = document.createElement('div');
    container.appendChild(content);


    const containertwo = document.querySelector('#containertwo');
    const contenttwo = document.createElement('div');
    containertwo.appendChild(contenttwo);

    btntest = document.querySelector('#btntest');

    function aaa (e) {
        let playerSelection = e.srcElement.innerText;
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();
        computerSelection = computerSelection.toLowerCase();
        
        console.log(playerSelection);
        console.log(computerSelection);
        r = playRound(playerSelection,computerSelection);
        
        if (r.slice(4,7) == "Win") {
            w = w + 1;
        } else if (r.slice(4,8) == "Lose") {
            l = l + 1;
        }
        
        contenttwo.textContent = 'Wins are '+w+' and losses are '+l;

        console.log(w);
        console.log(l);

        if (w == 3) {content.textContent = "YOU WIN THE BEST OUT OF FIVE!!!"}
        else if (l == 3) {content.textContent = "YOU WIN THE BEST OUT OF FIVE!!!"}

    };

    btns = document.querySelectorAll('#btn')
    btns.forEach(btn => btn.addEventListener('click', aaa));
    

