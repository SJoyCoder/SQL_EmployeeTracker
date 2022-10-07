const inquirer = require("inquirer");

function employeePrompt() {
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
                type: "input",
                name: "role_id",
                message: "Add employee's role id",
            },
            {
                type: "input",
                name: "manager_id",
                message: "Add employee's manager id",
            },    
        ])
}

module.exports = employeePrompt;