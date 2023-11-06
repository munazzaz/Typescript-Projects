import inquirer from 'inquirer';
import chalk from "chalk";
import { BankAccount, Customer } from './class.js';
console.log(chalk.yellow.bold("Welcome to My Bank!"));
(async () => {
    const customers = [];
    const questions = [
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter your first name:',
            validate: (input) => {
                if (input.trim() === '') {
                    return chalk.red('First name must not be left blank');
                }
                return /^[a-zA-Z]+$/.test(input) ? true : chalk.red('Only letters are allowed in the first name');
            },
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter your last name:',
            validate: (input) => {
                if (input.trim() === '') {
                    return chalk.red('Last name name must not be left blank');
                }
                return /^[a-zA-Z]+$/.test(input) ? true : chalk.red('Only letters are allowed in the Last name');
            },
        },
        {
            type: 'input',
            name: 'gender',
            message: 'Enter your gender:',
            validate: (input) => {
                if (input.trim() === '') {
                    return chalk.red('Gender name must not be left blank');
                }
                return /^[a-zA-Z]+$/.test(input) ? true : chalk.red('Only letters are allowed in the Gender');
            },
        },
        {
            type: 'input',
            name: 'age',
            message: 'Enter your age:',
            validate: (input) => {
                const age = parseInt(input);
                if (input.trim() === '') {
                    return chalk.red('Age name must not be left blank');
                }
                if (isNaN(age)) {
                    return chalk.red('Make sure the age is a numeric value');
                }
                if (age < 18) {
                    return chalk.red('You age must be at least 18 years or older to open an account');
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'mobileNumber',
            message: 'Enter your mobile number:',
            validate: (input) => {
                if (input.trim() === '') {
                    return chalk.red('Mobile number name must not be left blank');
                }
                const mobileNO = parseInt(input);
                return !isNaN(mobileNO) ? true : chalk.red('Only numeric values are allowed in the Mobile number');
            },
        },
        {
            type: 'input',
            name: 'initialBalance',
            message: 'Enter your initial account balance:',
            validate: (input) => {
                if (input.trim() === '') {
                    return chalk.red('Initial balance name must not be left blank');
                }
                const balance = parseFloat(input);
                return !isNaN(balance) && balance >= 0 ? true : chalk.red('Initial balance must be a number greater than or equal to 0');
            },
        },
        {
            type: 'input',
            name: 'pin',
            message: 'Create a PIN for your account:',
            validate: (input) => {
                if (input.trim() === '') {
                    return chalk.red('PIN name must not be left blank');
                }
                return input.length === 4 && /^\d+$/.test(input) ? true : chalk.red('The PIN must contain four numerical digits');
            },
        },
    ];
    const answers = await inquirer.prompt(questions);
    const bankAccount = new BankAccount(parseFloat(answers.initialBalance));
    const customer = new Customer(answers.firstName, answers.lastName, answers.gender, parseInt(answers.age), answers.mobileNumber, bankAccount, answers.pin);
    customers.push(customer);
    let exit = false;
    while (!exit) {
        const operationChoice = await inquirer.prompt({
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Credit', 'Debit', 'View Balance', 'Customer Information', 'Exit'],
        });
        switch (operationChoice.operation) {
            case 'Credit':
                const creditAmount = await inquirer.prompt({
                    type: 'input',
                    name: 'amount',
                    message: 'Enter the credit amount:',
                });
                const creditResult = customer.bankAccount.credit(parseFloat(creditAmount.amount));
                console.log(creditResult);
                break;
            case 'Debit':
                const debitAmount = await inquirer.prompt({
                    type: 'input',
                    name: 'amount',
                    message: 'Enter the debit amount:',
                });
                const debitResult = customer.bankAccount.debit(parseFloat(debitAmount.amount));
                console.log(debitResult);
                break;
            case 'View Balance':
                console.log(`Account Balance: ${customer.bankAccount.getBalance()}`);
                break;
            case 'Customer Information':
                console.log(customer.customerInfo()); // Display customer information
                break;
            case 'Exit':
                exit = true;
                break;
        }
    }
})();
