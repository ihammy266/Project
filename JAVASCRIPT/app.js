




const score = {
    wins: 0,
    losses: 0,
    ties: 0

}

 


 



let intervalId;
let isAutoPlaying = false;
 function autoPlay () {
    if (!isAutoPlaying) {
   intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playerGame(playerMove);
    },1000);
    isAutoPlaying = true;

  document.querySelector('#js-auto-play-button')
    .innerHTML = 'Stop Play';
} else {
    clearInterval(intervalId);
    isAutoPlaying = false;
     document.querySelector('#js-auto-play-button')
    .innerHTML = 'Auto Play';
}

} ;
document.querySelector('#js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });

/*
document.querySelector('#js-auto-play-button').addEventListener('click', () => {
    autoPlay();
});*/
 document.querySelector('.rock-button').addEventListener('click', () => {
     playerGame('rock');
 });

  document.querySelector('.paper-button'). addEventListener('click', () => {
     playerGame('paper');
 });

  document.querySelector('.scissors-button'). addEventListener('click', () => {
     playerGame('scissors');
 });


 document.getElementsByTagName('body')[0].addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playerGame('rock');
  } else if(event.key === 'p') {
    playerGame('paper');
  } else if (event.key === 's') {
  playerGame('scissors');
  } 
 });
function playerGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }


    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'You lose.') {
        score.losses++;
    } else if (result === 'Tie.') {
        score.ties++;
    }

    document.getElementById('score').textContent = `Wins:${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`;
    document.getElementById("result").textContent = `${result} `;
    document.getElementById('js-moves').innerHTML = `You  
            <img src="../styles/icons/${playerMove}-emoji.png">  <img src="../styles/icons/${computerMove}-emoji.png"> Computer.`;
}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;


    document.getElementById('score').textContent =
        `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

    document.getElementById('result').textContent = '';
    document.getElementById('js-moves').textContent = '';
}