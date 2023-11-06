// import inquirer from 'inquirer';
// import chalk from 'chalk';
export {};
// interface CustomQuestion {
//   type: string;
//   name: string;
//   message: string;
//   choices?: string[]; // Make 'choices' optional
// }
// class Quiz {
//   private questions: Question[] = [];
//   private userAnswers: (string | number)[] = [];
//   private totalQuestions: number = 0;
//   constructor() {
//     // Add your questions here
//     this.questions.push(
//       new Question("What is the capital of Japan?", ["Tokyo", "Beijing", "Seoul"], 0),
//       new Question("What is the largest planet in our solar system?", ["Jupiter", "Saturn", "Neptune"], 0),
//       new Question("Which programming language is known for its use in web development?", ["Python", "JavaScript", "Java"], 1),
//       new CodeQuestion("What is the output of the following code?\n\n```javascript\nconsole.log(2 + 2);```\n", ["4", "5", "6"], 0),
//       new Question("Who is the author of 'To Kill a Mockingbird'?", ["Harper Lee", "George Orwell", "J.K. Rowling"], 0),
//       new CodeQuestion("What is the output of the following code?\n\n```python\nprint('Hello, World!')```\n", ["Hello, World!", "World, Hello!", "Error"], 0),
//     );
//     // Set the total number of questions
//     this.totalQuestions = this.questions.length;
//   }
//   async startQuiz() {
//     console.log(chalk.bold("Welcome to the Quiz!\n"));
//     for (let i = 0; i < this.questions.length; i++) {
//       await this.delay(500);
//       console.log(chalk.blue(`\nQuestion ${i + 1}: ${this.questions[i].text}`));
//       const question = this.questions[i];
//       let answer: string | number = "";
//       if (question instanceof CodeQuestion) {
//         answer = await this.getUserCodeAnswer(question.text);
//       } else {
//         answer = await this.getUserChoice(question.choices);
//       }
//       this.userAnswers.push(answer.toString());
//       if ((i + 1) % 3 === 0 && i !== this.questions.length - 1) {
//         console.log(chalk.bold("Exiting after 3 questions...\n"));
//         await this.delay(500);
//         const exitPrompt: any = await inquirer.prompt([
//           {
//             type: 'confirm',
//             name: 'exit',
//             message: 'Do you want to continue with the quiz?',
//             default: true,
//           },
//         ]);
//         if (!exitPrompt.exit) {
//           break;
//         }
//       }
//     }
//     if (this.userAnswers.length < this.totalQuestions) {
//       console.log(chalk.bold("Exiting the quiz...\n"));
//     }
//     this.showResults();
//   }
//   async getUserChoice(options: string[]): Promise<number> {
//     const question: CustomQuestion = {
//       type: 'list',
//       name: 'answer',
//       message: 'Select your answer:',
//       choices: options,
//     };
//     const response: any = await inquirer.prompt([question]);
//     const answer = options.indexOf(response.answer);
//     return answer;
//   }
//   async getUserCodeAnswer(questionText: string): Promise<string> {
//     const codeQuestion: CustomQuestion = {
//       type: 'input',
//       name: 'answer',
//       message: questionText,
//     };
//     const response: any = await inquirer.prompt([codeQuestion]);
//     return response.answer.trim();
//   }
//   async delay(ms: number) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
//   showResults() {
//     console.log(chalk.bold("Quiz Results:\n"));
//     let correctAnswers = 0;
//     for (let i = 0; i < this.userAnswers.length; i++) {
//       const correctAnswer = this.questions[i].correctOption;
//       console.log(chalk.blue(`Question ${i + 1}: ${this.questions[i].text}`));
//       if (this.questions[i] instanceof CodeQuestion) {
//         console.log(chalk.yellow(`Your answer: ${this.userAnswers[i]}`));
//         console.log(chalk.green(`Correct answer: ${this.questions[i].choices[correctAnswer]}`));
//         if (this.userAnswers[i] === this.questions[i].choices[correctAnswer]) {
//           console.log(chalk.green("Correct!\n"));
//           correctAnswers++;
//         } else {
//           console.log(chalk.red("Incorrect!\n"));
//         }
//       } else {
//         console.log(chalk.yellow(`Your answer: ${this.questions[i].choices[this.userAnswers[i] as number]}`)); // Use type assertion
//         console.log(chalk.green(`Correct answer: ${this.questions[i].choices[correctAnswer]}`));
//         if (parseInt(this.userAnswers[i].toString(), 10) === correctAnswer) {
//           console.log(chalk.green("Correct!\n"));
//           correctAnswers++;
//         } else {
//           console.log(chalk.red("Incorrect!\n"));
//         }
//       }
//     }
//     if (this.userAnswers.length < this.totalQuestions) {
//       console.log(chalk.bold(`You got ${correctAnswers} out of ${this.userAnswers.length} questions correct.`));
//     } else {
//       console.log(chalk.bold(`You got ${correctAnswers} out of ${this.totalQuestions} questions correct.`));
//     }
//   }
// }
// class Question {
//   constructor(public text: string, public choices: string[], public correctOption: number) {}
// }
// class CodeQuestion extends Question {
//   constructor(text: string, choices: string[], correctOption: number) {
//     super(text, choices, correctOption);
//   }
// }
// const quiz = new Quiz();
// quiz.startQuiz();
