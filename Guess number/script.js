'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/* REFACTORING */
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const enterNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If there is no number input
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No Number!';
    displayMessage('❌ No Number!');

    //If the number is correct and player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.color = '#571845';

    // document.querySelector('body').style.backgroundColor =
    //   '#60b347';
    document.querySelector('body').style.backgroundColor = '#571845';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /* REFACTORING */

    //If guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high' : '📈 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😔 You lost the game!';
      displayMessage('😔 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener(
  'click',
  enterNumber,

  // before refactoring :

  //   // If number is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //If the number is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
);

document.querySelector('.again').addEventListener('click', function () {
  /*score = 20;*/
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = /*score*/ '20';
  document.querySelector('body').style.backgroundColor = '#00204a';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#00204a';
});

document.querySelector('.guess').addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Enter') {
    enterNumber();
  }
});
