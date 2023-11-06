export class StudentManager {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    findStudentById(studentId) {
        return this.students.find((student) => studentId === student.getId());
    }
}
