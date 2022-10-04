const inquirer = require("inquirer");

function roleUpdatePrompt(){

    return inquirer 
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "Which employee's role would you like to change?"
            },
            {
                type: "input",
                name: "role",
                message: "Which role is the employee changing to?"
            },
            {
                type: "input",
                name: "salary",
                message: "Add role salary",
            },
            {
                type: "input",
                name: "department",
                message: "Add role department",
            },   
        ])
}

module.exports = roleUpdatePrompt;