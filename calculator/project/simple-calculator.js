import inquirer from "inquirer";
console.log("Simple calculator:");
console.log();
let { firstNumber, secondNumber, operation } = await inquirer.prompt([
    {
        message: "Enter you first number",
        type: "number",
        name: "firstNumber"
    }, {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber"
    }, {
        message: "Enter your operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "operation"
    }
]);
if (operation == "Addition") {
    console.log(`\n${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}.`);
}
else if (operation == "Subtraction") {
    console.log(`\n${firstNumber} + ${secondNumber} = ${firstNumber - secondNumber}.`);
}
else if (operation == "Multiplication") {
    console.log(`\n${firstNumber} x  ${secondNumber} = ${firstNumber * secondNumber}.`);
}
else if (operation == "Division") {
    console.log(`\n${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}.`);
}
else {
    console.log("This operation is invalid.");
}
