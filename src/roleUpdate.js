const inquirer = require("inquirer");
const mysql = require("mysql2/promise");


function roleUpdatePrompt(names, roles, departments){

    return inquirer 
        .prompt ([
            {
                type: "list",
                name: "name",
                message: "What is the name of the employee whose role would you like to change?",
                choices: names
            },
            {
                type: "list",
                name: "role",
                message: "Which role is the employee changing to?",
                choices: roles
            },
            {
                type: "input",
                name: "salary",
                message: "Add role salary",
            },
            {
                type: "list",
                name: "department",
                message: "Add role department",
                choices: departments    
            },   
        ])
}

module.exports = roleUpdatePrompt;