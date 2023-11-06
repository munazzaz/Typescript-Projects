import inquirer from 'inquirer';
import { Student } from './Student.js';
import { StudentManager } from './StudentManager.js';
import { Course } from './Student.js'; // Import Course if it's in a separate file
const studentManager = new StudentManager();
function displayOptions() {
    console.log('\nOptions:');
    console.log('1. Add Student');
    console.log('2. Enroll Student in Course');
    console.log('3. View Balance');
    console.log('4. Pay Tuition');
    console.log('5. Show Status');
    console.log('6. Exit');
}
async function addStudent() {
    const { studentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'studentName',
            message: 'Enter student name:',
        },
    ]);
    if (studentName !== null) {
        const newStudent = new Student(studentName);
        studentManager.addStudent(newStudent);
        console.log(`Student ${newStudent.getName()} added with ID ${newStudent.getId()}`);
    }
    else {
        console.log('Student name cannot be null.');
    }
    await delay();
}
async function enrollStudent() {
    const { studentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'studentId',
            message: 'Enter student ID:',
        },
    ]);
    if (studentId !== null) {
        const student = studentManager.findStudentById(studentId);
        if (student) {
            console.log('Available Courses:');
            // List available courses here
            const availableCourses = [
                new Course('Math', 'MATH101', 500),
                new Course('History', 'HIST101', 400),
                new Course('Science', 'SCI101', 450),
                new Course('English', 'ENGL101', 350), // Additional course
            ];
            availableCourses.forEach((course, index) => {
                console.log(`${index + 1}. ${course.getName()} (${course.getCode()}) - Cost: $${course.getCost()}`);
            });
            const { courseChoice } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'courseChoice',
                    message: 'Enter the course number to enroll:',
                },
            ]);
            if (courseChoice !== null) {
                const selectedCourse = availableCourses[parseInt(courseChoice) - 1];
                if (selectedCourse) {
                    const { tuitionInput } = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'tuitionInput',
                            message: 'Enter tuition amount:',
                        },
                    ]);
                    if (tuitionInput !== null) {
                        const tuitionAmount = parseFloat(tuitionInput);
                        if (!isNaN(tuitionAmount)) {
                            if (tuitionAmount >= selectedCourse.getCost()) {
                                student.enroll(selectedCourse);
                                console.log(`${student.getName()} enrolled in ${selectedCourse.getName()}`);
                            }
                            else {
                                console.log('Tuition amount is not enough to enroll in the course.');
                            }
                        }
                        else {
                            console.log('Invalid tuition amount.');
                        }
                    }
                    else {
                        console.log('Tuition input cannot be null.');
                    }
                }
                else {
                    console.log('Invalid course selection.');
                }
            }
            else {
                console.log('Course choice cannot be null.');
            }
        }
        else {
            console.log('Student not found.');
        }
    }
    else {
        console.log('Student ID cannot be null.');
    }
    await delay();
}
async function viewBalance() {
    const { studentIdBalance } = await inquirer.prompt([
        {
            type: 'input',
            name: 'studentIdBalance',
            message: 'Enter student ID to view balance:',
        },
    ]);
    if (studentIdBalance !== null) {
        const studentBalance = studentManager.findStudentById(studentIdBalance);
        if (studentBalance) {
            studentBalance.viewBalance();
        }
        else {
            console.log('Student not found.');
        }
    }
    else {
        console.log('Student ID cannot be null.');
    }
    await delay();
}
async function payTuition() {
    const { studentIdPay } = await inquirer.prompt([
        {
            type: 'input',
            name: 'studentIdPay',
            message: 'Enter student ID to pay tuition:',
        },
    ]);
    if (studentIdPay !== null) {
        const studentPay = studentManager.findStudentById(studentIdPay);
        if (studentPay) {
            const { tuitionInput } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'tuitionInput',
                    message: 'Enter tuition amount:',
                },
            ]);
            if (tuitionInput !== null) {
                const tuitionAmount = parseFloat(tuitionInput);
                if (!isNaN(tuitionAmount)) {
                    studentPay.payTuition(tuitionAmount);
                }
                else {
                    console.log('Invalid tuition amount.');
                }
            }
            else {
                console.log('Tuition input cannot be null.');
            }
        }
        else {
            console.log('Student not found.');
        }
    }
    else {
        console.log('Student ID cannot be null.');
    }
    await delay();
}
async function showStatus() {
    const { studentIdStatus } = await inquirer.prompt([
        {
            type: 'input',
            name: 'studentIdStatus',
            message: 'Enter student ID to show status:',
        },
    ]);
    if (studentIdStatus !== null) {
        const studentStatus = studentManager.findStudentById(studentIdStatus);
        if (studentStatus) {
            studentStatus.showStatus();
        }
        else {
            console.log('Student not found.');
        }
    }
    else {
        console.log('Student ID cannot be null.');
    }
    await delay();
}
function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000); // Delay for 1 second (adjust as needed)
    });
}
async function main() {
    console.log('Welcome to the Student Management System!\n');
    while (true) {
        displayOptions();
        const { choice } = await inquirer.prompt([
            {
                type: 'input',
                name: 'choice',
                message: 'Enter your choice:',
            },
        ]);
        switch (choice) {
            case '1':
                await addStudent();
                break;
            case '2':
                await enrollStudent();
                break;
            case '3':
                await viewBalance();
                break;
            case '4':
                await payTuition();
                break;
            case '5':
                await showStatus();
                break;
            case '6':
                console.log('Exiting program.');
                process.exit(0);
                break;
            default:
                console.log('Invalid choice. Please try again.');
                break;
        }
    }
}
main();
