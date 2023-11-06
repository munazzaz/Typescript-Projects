import inquirer from 'inquirer';
import Student from './student.js';
import chalk from 'chalk';
async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'personality',
                message: chalk.bold.blue('Type 1 if you like to talk to others and type 2 or 3 if you would rather keep to yourself:'),
                choices: ['1', '2', '3'],
            },
            {
                type: 'input',
                name: 'name',
                message: chalk.yellow('What is your name:'),
            },
        ]);
        const myPerson = new Student();
        myPerson.askQuestion(Number(answers.personality));
        myPerson.setName(answers.name);
        console.log(`Your Name is: ${myPerson.getName()} and your personality type is: ${myPerson.getPersonality()}`);
    }
    catch (error) {
        console.error('Please enter valid input.');
    }
}
main();
