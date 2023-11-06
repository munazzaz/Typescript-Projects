import Person from './person.js';
import chalk from 'chalk';
class Student extends Person {
    constructor() {
        super();
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return chalk.green(this.name);
    }
}
export default Student;
