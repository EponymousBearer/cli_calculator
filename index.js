#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter Your First Number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter Your Second Number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["Multiplication: *", "Addition: +", "Subtraction: -", "Division: /"],
        message: "Select Operator: "
    }
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "Addition: +") {
        result = numberOne + numberTwo;
    }
    else if (operator === "Subtraction: -") {
        result = numberOne - numberTwo;
    }
    else if (operator === "Multiplication: *") {
        result = numberOne * numberTwo;
    }
    else if (operator === "Division: /") {
        result = numberOne / numberTwo;
    }
    console.log("Your result is ", chalk.green(result));
}
else {
    console.log(chalk.red("Kindly Enter Valid Input"));
}
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter Your First Number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter Your Second Number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    }
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("Your result is ", result);
}
else {
    console.log("Kindly Enter Valid Input");
}
