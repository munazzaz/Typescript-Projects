import inquirer from 'inquirer';

console.log("Welcome to Countdown Timer:");

// Function to calculate time remaining
function calculateTimeRemaining(targetDate: Date): number {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();
  return Math.max(0, timeDifference);
}

// Function to format milliseconds into HH:MM:SS
function formatTime(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Prompt the user for their target date and time using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'targetDate',
      message: 'Enter your target date and time (Year-Month-Day Hour:minute:sec): ',
      validate: (answer) => {
        const targetDate = new Date(answer);
        if (isNaN(targetDate.getTime())) {
          return 'Invalid date format. Please use YYYY-MM-DDTHH:mm:ss format.';
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    const targetDate = new Date(answers.targetDate);

    // Calculate the initial time remaining
    const initialTimeRemaining = calculateTimeRemaining(targetDate);

    // Display the initial countdown
    console.log(`Countdown to ${targetDate.toLocaleString()}:`);
    console.log(formatTime(initialTimeRemaining));

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      const timeRemaining = calculateTimeRemaining(targetDate);

      // Check if the countdown has reached zero
      if (timeRemaining === 0) {
        clearInterval(countdownInterval);
        console.log('Countdown is over!');
        process.exit(0);
      } else {
        console.clear(); // Clear the console to update the countdown
        console.log(`Countdown to ${targetDate.toLocaleString()}:`);
        console.log(formatTime(timeRemaining));
      }
    }, 1000);
  });
