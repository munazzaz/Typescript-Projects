import inquirer from "inquirer";
import { faker } from "@faker-js/faker"; // can give atm pin from 1000 to 1009
import chalk from "chalk";

// Requirements:
// 1. User data
// 2. ATM machine
// 3. ATM functions

interface User {
  name: string;
  id: number;
  pin: number;
  accountNumber: number;
  balance: number;
}

const createUser = (): User[] => {
  let users: User[] = [];
  for (let i = 1; i <= 10; i++) {
    let userObj: User = {
      id: i,
      pin: 1000 + i,
      name: faker.person.fullName(),
      accountNumber: Math.floor(100000000 * Math.random() * 90000000),
      balance: 1000000 + 1000000 * i,
    };
    users.push(userObj);
  }
  return users;
};

// ATM machine
const atmMachine = async (users: User[]) => {
  try {
    const response = await inquirer.prompt({
      type: "number",
      message: "Welcome to the Best ATM Machine!\nPlease enter your PIN code:",
      name: "pin",
    });

    const findingUser = users.find((user) => user.pin === response.pin);

    if (findingUser) {
      console.log(chalk.green(`Welcome, ${findingUser.name}! You are now connected to your account.`));
      await atmFunc(findingUser);
    } else {
      console.log(chalk.red("Invalid PIN. Please try again."));
     
    }
  } catch (error) {
    console.error(chalk.red("An error occurred: " + error));
  }
};

const atmFunc = async (findingUser: User) => {
  try {
    const answer = await inquirer.prompt({
      type: "list",
      name: "Select",
      message: "Choose the action you want to perform:",
      choices: ["Withdraw", "Check Balance", "Deposit", "Exit"],
    });

    if (answer.Select === "Withdraw") {
      const amount = await inquirer.prompt({
        type: "number",
        message: "Enter the amount you want to withdraw:",
        name: "amount",
      });
      if (amount.amount > findingUser.balance) {
        console.log(chalk.red("Insufficient Balance!"));
      } else {
        findingUser.balance -= amount.amount;
        console.log(chalk.green(`Withdrawn amount: $${amount.amount}`));
        console.log(chalk.yellow(`Updated Balance: $${findingUser.balance}`));
      }
    }

    if (answer.Select === "Check Balance") {
      console.log(chalk.yellow(`Your Account Balance: $${findingUser.balance}`));
    }

    if (answer.Select === "Deposit") {
      const deposit = await inquirer.prompt({
        type: "number",
        message: "Enter the amount you want to deposit:",
        name: "amount",
      });
      findingUser.balance += deposit.amount;
      console.log(chalk.green(`Deposited amount: $${deposit.amount}`));
      console.log(chalk.yellow(`Updated Balance: $${findingUser.balance}`));
    }

    if (answer.Select === "Exit") {
      console.log(chalk.blue("Thank you for using the Best ATM! Have a great day."));
    }
  } catch (error) {
    console.error(chalk.red("An error occurred: " + error));
  }
};

const users = createUser();
atmMachine(users);
