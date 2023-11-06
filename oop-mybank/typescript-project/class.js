import chalk from "chalk";
class BankAccount {
    constructor(initialBalance) {
        this.accountBalance = 0;
        this.accountBalance = initialBalance;
    }
    debit(amount) {
        if (amount > 0 && this.accountBalance >= amount) {
            this.accountBalance -= amount;
            return chalk.blue(`Debit successful! New account balance is ${this.accountBalance}`);
        }
        return chalk.red("Debit failed! Insufficient funds or invalid amount.");
    }
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            return chalk.blue("Credit successful! New account balance is " + this.accountBalance);
        }
        return chalk.red("Credit failed! Invalid amount.");
    }
    getBalance() {
        return this.accountBalance;
    }
}
class Customer {
    constructor(FirstName, LastName, Gender, Age, MobileNumber, bankAccount, pin) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Gender = Gender;
        this.Age = Age;
        this.MobileNumber = MobileNumber;
        this.bankAccount = bankAccount;
        this.pin = pin;
    }
    customerInfo() {
        return chalk.blue(`Name: ${this.FirstName} ${this.LastName}
  Age: ${this.Age}
  Gender: ${this.Gender}
  Mobile: ${this.MobileNumber}
  Account Balance: ${this.bankAccount.getBalance()}`);
    }
}
export { BankAccount, Customer };
