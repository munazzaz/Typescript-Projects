import chalk from 'chalk';
class Person {
    private personality: string;
  
    constructor() {
      this.personality = "Mystery";
    }
  
    askQuestion(answer: number): void {
      if (answer === 1) {
        this.personality = chalk.green("Extrovert");
      } else if (answer === 2) {
        this.personality = chalk.green("Introvert");
      } else if (answer === 3) {
        this.personality = chalk.green("Embivert")
      } else {
        this.personality = "You are still a Mystery";
      }
    }
  
    getPersonality(): string {
      return this.personality;
    }
  }
  
  export default Person;
  