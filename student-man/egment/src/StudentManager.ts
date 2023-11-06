import { Student } from './Student.js';

export class StudentManager {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  findStudentById(studentId: string): Student | undefined {
    return this.students.find((student) => studentId === student.getId());
  }
}
