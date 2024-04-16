#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
let previousTask = [
    "Complete Todo list project",
    "Meet up with friends",
    "Make a biryani",
    "Study for 3 hours",
    "Coding",
];
clear();
async function main() {
    {
        let task = await inquirer.prompt({
            name: "do",
            type: "list",
            message: chalk.bold.magenta.underline("\n\t\t\t What's you want to do !\n\n"),
            choices: ["add task", "update task", "delete task", "Check list", "Exit"],
        });
        if (task.do === "add task") {
            let addTask = await inquirer.prompt([
                {
                    name: "adod",
                    type: "input",
                    message: chalk.yellowBright.underline("\tAdd task here :\n\n"),
                },
            ]);
            previousTask.push(addTask.add);
            console.log(chalk.yellow.underline("\n\tAdded Successfully!\n"));
            main();
        }
        else if (task.do === "delete task") {
            let delTask = await inquirer.prompt({
                name: "remove",
                type: "list",
                message: chalk.yellowBright.underline("\tWhat's You want to delete ?..\n\n"),
                choices: previousTask.map((item) => item),
            });
            let newTask = previousTask.filter((val) => val !== delTask.remove);
            previousTask = [...newTask];
            console.log(chalk.yellow.underline("\n\tTask deleted!\n"));
            main();
        }
        else if (task.do === "update task") {
            let updateTask = await inquirer.prompt({
                name: "update",
                type: "list",
                message: chalk.yellowBright.underline("\tWhat's you want to update ?..\n\n"),
                choices: previousTask.map((item) => item),
            });
            let addTask = await inquirer.prompt({
                name: "add",
                type: "input",
                message: chalk.yellowBright.underline("\tAdd task here :\n\n"),
            });
            let newTask = previousTask.filter((val) => val !== updateTask.update);
            previousTask = [...newTask, addTask.add];
            console.log(chalk.yellow.underline("\n\tUpdated Successfully!\n"));
            main();
        }
        else if (task.do === "Check list") {
            previousTask;
            console.log(chalk.yellow.underline("\n\tYour Todo list...!\n"));
            console.log(previousTask);
            main();
        }
        else {
            let confirm = await inquirer.prompt({
                name: "exit",
                type: "confirm",
                message: chalk.redBright.underline("\n\tDo you want to Exit ?\n"),
            });
            if (confirm.exit) {
                console.log(chalk.yellowBright.underline.bold("\n\n\tThanks for using my todo app\n"));
            }
            else {
                main();
            }
        }
    }
}
main();
