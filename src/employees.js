const inquirer = require("inquirer");

function employeePrompt() {
    return inquirer 
        .prompt ([
            {
                type: "input",
                name: "firstName",
                message: "Add employee's first name",
            },
            {
                type: "input",
                name: "lastName",
                message: "Add employee's last name",
            },
            {
                type: "input",
                name: "role",
                message: "Add employee's role",
            },
            {
                type: "input",
                name: "manager",
                message: "Add employee's manager",
            },    
        ])
}

module.exports = employeePrompt;