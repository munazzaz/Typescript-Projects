export class Student {
    constructor(name) {
        this.id = this.generateStudentID();
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    generateStudentID() {
        // Implement your logic to generate a unique 5-digit student ID
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance += amount;
        console.log(`Paid $${amount} tuition fees. New balance: $${this.balance}`);
    }
    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
        console.log('Courses Enrolled:');
        this.courses.forEach((course, index) => {
            console.log(`${index + 1}. ${course.getName()} (${course.getCode()})`);
        });
        console.log(`Balance: $${this.balance}`);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
export class Course {
    constructor(name, code, cost) {
        this.name = name;
        this.code = code;
        this.cost = cost;
    }
    getName() {
        return this.name;
    }
    getCode() {
        return this.code;
    }
    getCost() {
        return this.cost;
    }
}
