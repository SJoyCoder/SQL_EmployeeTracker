const inquirer = require("inquirer");

return inquirer 
    .prompt ([
        {
            type: "list",
            name: "name",
            message: "Which employee's role would you like to change?",
            choices: ""
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

module.exports = RoleUpdate;