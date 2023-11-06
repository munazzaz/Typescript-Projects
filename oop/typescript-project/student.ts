import Person from './person.js';
import chalk from 'chalk';

class Student extends Person {
  private name: string;

  constructor() {
    super();
    this.name = "";
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return chalk.green(this.name);
  }
}

export default Student;
