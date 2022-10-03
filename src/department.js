const inquirer = require("inquirer");

return inquirer 
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "Add department name",
        },
    ])

module.exports = Department;