const inquirer = require("inquirer");

function rolesPrompt(){

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
                type: "input",
                name: "department_id",
                message: "Add role department id",
            },   
        ])
}

module.exports = rolesPrompt;