#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let condition = true;
console.log(chalk.bold.magenta("\n>>>>>>>>>>>>>_____________| ***WELCOME*** |______________<<<<<<<<<<<<<\n"));
// make async function
let main = async () => {
    while (condition) {
        let answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.yellow("\nPlease select an option...\n"),
                choices: [chalk.bold.green("12/May/2024"), chalk.bold.green("Write & View Message"), chalk.bold.red("Exit")],
            },
        ]);
        if (answer.select == chalk.bold.green("12/May/2024")) {
            console.log(chalk.bold.cyan(">>>>>>>>>>>>----------------******************---------------<<<<<<<<<<<<<"));
            console.log(chalk.bold.magenta("\n*************--------------| HAPPY MOTHER's DAY |--------------**************\n"));
            console.log(chalk.bold.cyan(">>>>>>>>>>>>----------------******************------------<<<<<<<<<<<<<"));
        }
        else if (answer.select == chalk.bold.green("Write & View Message")) {
            await write();
        }
        else if (answer.select == chalk.bold.red("Exit")) {
            console.log(chalk.bold.cyan("\n>>>>>>>>>>>>------------| I LOVE YOU MAA |-------------<<<<<<<<<<<<\n"));
            process.exit();
        }
    }
    ;
};
let write = async () => {
    let answer = await inquirer.prompt([
        {
            name: "message",
            type: "input",
            message: chalk.bold.magenta("\nWrite Something Special For Your Mother"),
        },
    ]);
    console.log(chalk.bold.yellow("\nMessage written successfully\n"));
    console.log(chalk.bold.cyan(">>>>>>>>>>>>----------------******************------------<<<<<<<<<<<<<"));
    console.log(chalk.bold.magenta(`\n"This is for you MAA, ${chalk.bold.green(answer.message)}.\n"`));
    console.log(chalk.bold.cyan(">>>>>>>>>>>>----------------******************------------<<<<<<<<<<<<<"));
};
main();
