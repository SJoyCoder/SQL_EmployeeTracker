const inquirer = require("inquirer");

function employeePrompt(roles) {
    return inquirer 
        .prompt ([
            {
                type: "input",
                name: "first_name",
                message: "Add employee's first name",
            },
            {
                type: "input",
                name: "last_name",
                message: "Add employee's last name",
            },
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: roles
            },
            {
                type: "input",
                name: "manager_id",
                message: "Add employee's manager id",
            },    
        ])
}

module.exports = employeePrompt;