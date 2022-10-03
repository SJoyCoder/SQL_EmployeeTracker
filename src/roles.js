const inquirer = require("inquirer");

return inquirer 
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "Add role name",
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

module.exports = Roles;