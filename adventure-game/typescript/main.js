// import inquirer from 'inquirer';
// import chalk from 'chalk';
// // Game variables
// const enemies = ["Skeleton", "Zombie", "Valiant Knight", "Stealthy Ninja"];
// let playerHealth = 100;
// const playerAttackDamage = 50;
// let numHealthPotions = 3;
// const healthPotionHealAmount = 30;
// const healthPotionDropChance = 50; // percentage
// // Define a function to create a banner
// function createBanner(text: any) {
//   const bannerWidth = 40;
//   const padding = (bannerWidth - text.length) / 2;
//   const banner = '='.repeat(padding) + text + '='.repeat(padding);
//   return chalk.yellow.bold(banner);
// }
// console.log(createBanner("Welcome to the Epic Dungeon Adventure!\n"));
// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * max);
// }
// async function promptUser() {
//   const userInput = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'action',
//       message: 'What would you like to do?',
//       choices: [
//         { name: 'Attack', value: 'attack' },
//         { name: 'Drink health potion', value: 'drink' },
//         { name: 'Run', value: 'run' },
//         { name: 'Quit', value: 'quit' }, // Add Quit option
//       ],
//     },
//   ]);
//   const action = userInput.action;
//   if (action === "attack") {
//     const damageDealt = getRandomInt(playerAttackDamage);
//     const damageTaken = getRandomInt(25); // Simplified enemy damage
//     playerHealth -= damageTaken;
//     console.log(chalk.red(`\n> You strike the enemy for ${damageDealt} damage.`));
//     console.log(chalk.red(`> You receive ${damageTaken} in retaliation!`));
//   } else if (action === "drink") {
//     if (numHealthPotions > 0) {
//       playerHealth += healthPotionHealAmount;
//       numHealthPotions--;
//       console.log(chalk.blue(`\n> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`));
//       console.log(chalk.blue(`> You now have ${playerHealth} HP.`));
//       console.log(chalk.blue(`> You have ${numHealthPotions} health potions left.`));
//     } else {
//       console.log(chalk.yellow("\n> You have no health potions left! Defeat enemies for a chance to get one!"));
//     }
//   } else if (action === "run") {
//     console.log(chalk.yellow(`\nYou run away from the enemy!\n`));
//     startGame();
//     return;
//   } else if (action === "quit") { // Handle Quit option
//     console.log(chalk.yellow("\nTHANKS FOR PLAYING!"));
//     console.log(chalk.yellow("\nYou have quit the game."));
//     process.exit(0);
//   } else {
//     console.log(chalk.yellow("\nInvalid command!"));
//   }
//   console.log(chalk.green("\n#######################"));
//   console.log(chalk.green(`# Your health: ${playerHealth} HP #`));
//   console.log(chalk.green("#######################"));
//   if (playerHealth > 0) {
//     await promptUser();
//   } else {
//     console.log(chalk.red("You have been defeated! Game over."));
//   }
// }
// async function startGame() {
//   console.log(chalk.green("---------------------------------------------"));
//   const enemy = enemies[getRandomInt(enemies.length)];
//   console.log(chalk.yellow(`\t#${enemy} has appeared! #\n`));
//   await promptUser();
// }
// startGame();
// import inquirer from 'inquirer';
// import chalk from 'chalk';
// // Game variables
// const enemies = ["Skeleton", "Zombie", "Valiant Knight", "Stealthy Ninja"];
// let playerHealth = 100;
// const playerAttackDamage = 50;
// let numHealthPotions = 3;
// const healthPotionHealAmount = 30;
// const healthPotionDropChance = 50; // percentage
// // Define a function to create a banner
// function createBanner(text: any) {
//   const bannerWidth = 40;
//   const padding = (bannerWidth - text.length) / 2;
//   const banner = '*'.repeat(padding) + text + '*'.repeat(padding);
//   return chalk.bgYellow.bold.black(banner);
// }
// console.log(createBanner("Welcome to the Epic Dungeon Adventure!\n"));
// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * max);
// }
// async function promptUser() {
//   const userInput = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'action',
//       message: chalk.cyan('What would you like to do?'),
//       choices: [
//         { name: 'Attack', value: 'attack' },
//         { name: 'Drink health potion', value: 'drink' },
//         { name: 'Run', value: 'run' },
//         { name: 'Quit', value: 'quit' }, // Add Quit option
//       ],
//     },
//   ]);
//   const action = userInput.action;
//   if (action === "attack") {
//     const damageDealt = getRandomInt(playerAttackDamage);
//     const damageTaken = getRandomInt(25); // Simplified enemy damage
//     playerHealth -= damageTaken;
//     console.log(chalk.red(`\n> You strike the enemy for ${damageDealt} damage.`));
//     console.log(chalk.red(`> You receive ${damageTaken} in retaliation!`));
//   } else if (action === "drink") {
//     if (numHealthPotions > 0) {
//       playerHealth += healthPotionHealAmount;
//       numHealthPotions--;
//       console.log(chalk.green(`\n> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`));
//       console.log(chalk.green(`> You now have ${playerHealth} HP.`));
//       console.log(chalk.green(`> You have ${numHealthPotions} health potions left.`));
//     } else {
//       console.log(chalk.yellow("\n> You have no health potions left! Defeat enemies for a chance to get one!"));
//     }
//   } else if (action === "run") {
//     console.log(chalk.yellow(`\nYou run away from the enemy!\n`));
//     startGame();
//     return;
//   } else if (action === "quit") { // Handle Quit option
//     console.log(chalk.magenta("\nTHANKS FOR PLAYING!"));
//     console.log(chalk.magenta("\nYou have quit the game."));
//     process.exit(0);
//   } else {
//     console.log(chalk.yellow("\nInvalid command!"));
//   }
//   console.log(chalk.bgGreen.white("\n#######################"));
//   console.log(chalk.bgGreen.white(`# Your health: ${playerHealth} HP #`));
//   console.log(chalk.bgGreen.white("#######################"));
//   if (playerHealth > 0) {
//     await promptUser();
//   } else {
//     console.log(chalk.red("You have been defeated! Game over."));
//   }
// }
// async function startGame() {
//   console.log(chalk.bgBlue.white("---------------------------------------------"));
//   const enemy = enemies[getRandomInt(enemies.length)];
//   console.log(chalk.yellow(`\t#${enemy} has appeared! #\n`));
//   await promptUser();
// }
// startGame();
import inquirer from 'inquirer';
import chalk from 'chalk';
// Game variables
const enemies = ["Dragon", "Goblin", "Wizard", "Sorceress"]; // Changed enemy names
let playerHealth = 100;
const playerAttackDamage = 50;
let numHealthPotions = 3;
const healthPotionHealAmount = 30;
const healthPotionDropChance = 50; // percentage
// Function to create a banner-like effect
function createBanner(text) {
    const bannerWidth = 50; // Adjust the width as needed
    const banner = '*'.repeat(bannerWidth);
    const formattedText = `* ${text} *`;
    const padding = ' '.repeat((bannerWidth - formattedText.length) / 2);
    return chalk.bgMagenta.bold(banner) + '\n' +
        chalk.bgMagenta.bold(' '.repeat(padding.length) + formattedText + ' '.repeat(padding.length)) + '\n' +
        chalk.bgMagenta.bold(banner);
}
console.log(createBanner("Welcome to the Mystic Adventure!\n")); // Display the banner
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: chalk.cyan('What would you like to do?'),
            choices: [
                { name: 'Attack', value: 'attack' },
                { name: 'Use health potion', value: 'drink' },
                { name: 'Run away', value: 'run' },
                { name: 'Exit', value: 'exit' },
            ],
        },
    ]);
    const action = userInput.action;
    if (action === "attack") {
        const damageDealt = getRandomInt(playerAttackDamage);
        const damageTaken = getRandomInt(25); // Simplified enemy damage
        playerHealth -= damageTaken;
        console.log(chalk.red(`\n> You strike the enemy for ${damageDealt} damage.`));
        console.log(chalk.red(`> You receive ${damageTaken} in retaliation!`));
    }
    else if (action === "drink") {
        if (numHealthPotions > 0) {
            playerHealth += healthPotionHealAmount;
            numHealthPotions--;
            console.log(chalk.green(`\n> You use a health potion, healing yourself for ${healthPotionHealAmount}.`));
            console.log(chalk.green(`> You now have ${playerHealth} HP.`));
            console.log(chalk.green(`> You have ${numHealthPotions} health potions left.`));
        }
        else {
            console.log(chalk.yellow("\n> You have no health potions left! Defeat enemies for a chance to get one!"));
        }
    }
    else if (action === "run") {
        console.log(chalk.yellow(`\nYou run away from the enemy!\n`));
        startGame();
        return;
    }
    else if (action === "exit") {
        console.log(chalk.magenta("\nTHANKS FOR PLAYING!"));
        console.log(chalk.magenta("\nYou have exited the game."));
        process.exit(0);
    }
    else {
        console.log(chalk.yellow("\nInvalid command!"));
    }
    console.log(chalk.cyan("\n#######################"));
    console.log(chalk.greenBright(`# Your health: ${playerHealth} HP #`));
    console.log(chalk.cyan("#######################"));
    if (playerHealth > 0) {
        await promptUser();
    }
    else {
        console.log(chalk.red("You have been defeated! Game over."));
    }
}
async function startGame() {
    console.log(chalk.cyanBright("---------------------------------------------"));
    const enemy = enemies[getRandomInt(enemies.length)];
    console.log(chalk.yellow(`\t#${enemy} has appeared! #\n`));
    await promptUser();
}
startGame();
