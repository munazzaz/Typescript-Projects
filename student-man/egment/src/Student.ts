export class Student {
    private id: string;
    private name: string;
    private courses: Course[];
    private balance: number;
  
    constructor(name: string) {
      this.id = this.generateStudentID();
      this.name = name;
      this.courses = [];
      this.balance = 0;
    }
  
    private generateStudentID(): string {
      // Implement your logic to generate a unique 5-digit student ID
      return Math.floor(10000 + Math.random() * 90000).toString();
    }
  
    enroll(course: Course): void {
      this.courses.push(course);
    }
  
    viewBalance(): void {
      console.log(`Balance for ${this.name}: $${this.balance}`);
    }
  
    payTuition(amount: number): void {
      this.balance += amount;
      console.log(`Paid $${amount} tuition fees. New balance: $${this.balance}`);
    }
  
    showStatus(): void {
      console.log(`Student ID: ${this.id}`);
      console.log(`Student Name: ${this.name}`);
      console.log('Courses Enrolled:');
      this.courses.forEach((course, index) => {
        console.log(`${index + 1}. ${course.getName()} (${course.getCode()})`);
      });
      console.log(`Balance: $${this.balance}`);
    }
  
    getId(): string {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  export class Course {
    private name: string;
    private code: string;
    private cost: number;
  
    constructor(name: string, code: string, cost: number) {
      this.name = name;
      this.code = code;
      this.cost = cost;
    }
  
    getName(): string {
      return this.name;
    }
  
    getCode(): string {
      return this.code;
    }
  
    getCost(): number {
      return this.cost;
    }
  }
  