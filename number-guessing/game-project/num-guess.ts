import inquirer from 'inquirer';

interface Game {
  targetNumber: number;
  attempts: number;
  maxAttempts: number;
  isGameOver: boolean;
}

const game: Game = {
  targetNumber: Math.floor(Math.random() * 100) + 1,
  attempts: 0,
  maxAttempts: 10,
  isGameOver: false,
};

function startGame() {
  console.log('Welcome to the Number Guessing Challenge!');
  console.log(`You have ${game.maxAttempts} chances to guess the hidden number between 1 and 100.`);
  console.log('Give it your best shot and enter your guess below.');

  askForGuess();
}

function askForGuess() {
  if (!game.isGameOver) {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'guess',
          message: 'Your guess: ',
          validate: (input) => {
            const guess = parseInt(input);
            if (!isNaN(guess) && guess >= 1 && guess <= 100) {
              return true;
            }
            return 'Please enter a valid number between 1 and 100.';
          },
        },
      ])
      .then((answers) => {
        const guess = parseInt(answers.guess);
        game.attempts++;

        if (guess === game.targetNumber) {
          console.log(`Congratulations! You've cracked the code. The hidden number was ${game.targetNumber}, and it only took you ${game.attempts} attempts.`);
          game.isGameOver = true;
          playAgain();
        } else if (game.attempts === game.maxAttempts) {
          console.log(`Sorry, you've exhausted all your attempts. The secret number was ${game.targetNumber}. Better luck next time!`);
          game.isGameOver = true;
          playAgain();
        } else if (guess < game.targetNumber) {
          console.log('Your guess is too low. Try a higher number.');
          askForGuess();
        } else {
          console.log('Your guess is too high. Try a lower number.');
          askForGuess();
        }
      });
  }
}

function playAgain() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'playAgain',
        message: 'Do you want to play again?',
      },
    ])
    .then((answers) => {
      if (answers.playAgain) {
        resetGame();
        startGame();
      } else {
        console.log('Thanks for playing! Goodbye.');
        process.exit();
      }
    });
}

function resetGame() {
  game.targetNumber = Math.floor(Math.random() * 100) + 1;
  game.attempts = 0;
  game.isGameOver = false;
}

startGame();
