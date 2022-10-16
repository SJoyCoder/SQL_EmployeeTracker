const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

function rolesPrompt(departments){

    return inquirer 
        .prompt ([
            {
                type: "input",
                name: "title",
                message: "Add role title",
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

module.exports = rolesPrompt;