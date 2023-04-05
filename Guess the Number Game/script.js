'use strict';


const secretnum = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';

    // when player wins
  } else if (guess === secretnum) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretnum;

    document.querySelector('.number').style.width = '30rem';
    score = score + 2;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      document.querySelector('.highscore').textContent = score;
    } else {
      document.querySelector('.highscore').textContent = score;
    }

    // when Too High
  } else if (guess > secretnum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is Two High';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
      // When lost the game
    } else {
      document.querySelector('.message').textContent = 'You loast the Game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
    // When Too Low
  } else if (guess < secretnum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
});
