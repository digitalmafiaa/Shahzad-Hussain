import inquirer from "inquirer";
const cal = await inquirer.prompt([
    {
        type: "number",
        name: "numb1",
        message: "Enter the first number"
    },
    {
        type: "number",
        name: "numb2",
        message: "Enter the second number"
    },
    {
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator",
        message: "Choose Any Operator"
    },
]);
const { numb1, numb2, operator } = cal;
if (numb1 && numb2 && operator) {
    let result;
    if (operator == "+") {
        result = numb1 + numb2;
        console.log("Your Ans Is", result);
    }
    else if (operator == "-") {
        result = numb1 - numb2;
        console.log("Your Ans Is", result);
    }
    else if (operator == "*") {
        result = numb1 * numb2;
        console.log("Your Ans Is", result);
    }
    else if (operator == "/") {
        result = numb1 / numb2;
        console.log("Your Ans Is", result);
    }
}
else {
    console.log("Try Again");
}
