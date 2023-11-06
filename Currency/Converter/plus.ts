import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue("Welcome To Currency Converter"));

type Currency = "PKR" | "GBP" | "USD" | "EUR" | "CHF" | "INR" | "CNY" | "KRW";

interface ConversionRates {
    [key: string]: {
        [key in Currency]: number;
    };
}

const conversionRates: ConversionRates = {
    "PKR": {
        USD: 0.0034,
        GBP: 0.0027,
        PKR: 1,
        EUR: 0.0029,
        CHF: 0.0027,
        INR: 0.045,
        CNY: 0.020,
        KRW: 3.20,
    },
    "GBP": {
        USD: 1.24,
        PKR: 369.45,
        GBP: 1,
        EUR: 1.12,
        CHF: 1.19,
        INR: 101.43,
        CNY: 8.86,
        KRW: 1494.84,
    },
    "USD": {
        USD: 1,
        PKR: 297.74,
        GBP: 0.81,
        EUR: 0.90,
        CHF: 0.95,
        INR: 73.68,
        CNY: 6.42,
        KRW: 1086.89,
    },
    "EUR": {
        EUR: 1,
        PKR: 344.83,
        GBP: 0.8928,
        USD: 1.098,
        CHF: 1.073,
        INR: 88.77,
        CNY: 7.72,
        KRW: 1310.65,
    },
    "CHF": {
        EUR: 0.95,
        PKR: 332.50,
        GBP: 0.90,
        USD: 1.12,
        CHF: 1,
        INR: 92.78,
        CNY: 8.12,
        KRW: 1484.08,
    },
    "INR": {
        EUR: 0.011,
        PKR: 3.59,
        GBP: 0.0097,
        USD: 0.12,
        CHF: 0.011,
        INR: 1,
        CNY: 0.088,
        KRW: 16.01,
    },
    "CNY": {
        EUR: 0.13,
        PKR: 40.95,
        GBP: 0.11,
        USD: 0.14,
        CHF: 0.12,
        INR: 11.56,
        CNY: 1,
        KRW: 182.79,
    },
    "KRW": {
        EUR: 0.00071,
        PKR: 0.22,
        GBP: 0.00061,
        USD: 0.00075,
        CHF: 0.00067,
        INR: 0.062,
        CNY: 0.0054,
        KRW: 1,
    },
};

const currencyOptions = ["PKR", "GBP", "USD", "EUR", "CHF", "INR", "CNY", "KRW"];

const answer: {
    From: Currency;
    To: Currency;
    Amount: number;
} = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: currencyOptions,
        message: "Select Your Currency:",
    },
    {
        type: "list",
        name: "To",
        choices: currencyOptions,
        message: "Select Your Conversion Currency:",
    },
    {
        type: "number",
        name: "Amount",
        message: "Enter Your Conversion Amount",
    },
]);

const { From, To, Amount } = answer;

const conversionHistory: string[] = []; // Initialize an empty array to store conversion history.

if (From && To && Amount) {
    if (conversionRates[From] && conversionRates[From][To]) {
        let result = conversionRates[From][To] * Amount;
        console.log(`Your Conversion ${From} to ${To} is ${result.toFixed(2)}`);
        
        // Add the conversion to the history.
        conversionHistory.push(`Conversion: ${Amount} ${From} to ${To} = ${result.toFixed(2)}`);
    } else {
        console.log("Invalid Conversion");
    }
} else {
    console.log("Invalid Input");
}

// Display conversion history.
if (conversionHistory.length > 0) {
    console.log(chalk.green("Conversion History:"));
    conversionHistory.forEach((conversion) => {
        console.log(conversion);
    });
}

console.log(chalk.yellow("Thanks! For Using This Currency Converter"));
