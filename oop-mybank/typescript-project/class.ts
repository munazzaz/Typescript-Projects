import chalk from "chalk";
class BankAccount {
    accountBalance: number = 0;
  
    constructor(initialBalance: number) {
      this.accountBalance = initialBalance;
    }
  
    debit(amount: number): string {
      if (amount > 0 && this.accountBalance >= amount) {
        this.accountBalance -= amount;
        return chalk.blue(`Debit successful! New account balance is ${this.accountBalance}`);
      }
      return chalk.red("Debit failed! Insufficient funds or invalid amount.");
    }
  
    credit(amount: number): string {
      if (amount > 0) {
        this.accountBalance += amount;
        return chalk.blue("Credit successful! New account balance is " + this.accountBalance);
      }
      return chalk.red("Credit failed! Invalid amount.");
    }
  
    getBalance(): number {
      return this.accountBalance;
    }
  }
  
  class Customer {
    constructor(
      public FirstName: string,
      public LastName: string,
      public Gender: string,
      public Age: number,
      public MobileNumber: string,
      public bankAccount: BankAccount,
      public pin: string
    ) {}
  
    customerInfo(): string {
      return chalk.blue(`Name: ${this.FirstName} ${this.LastName}
  Age: ${this.Age}
  Gender: ${this.Gender}
  Mobile: ${this.MobileNumber}
  Account Balance: ${this.bankAccount.getBalance()}`);
    }
  }
  

  
  export { BankAccount, Customer };
  