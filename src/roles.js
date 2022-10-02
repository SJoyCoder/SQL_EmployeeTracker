const inquirer = require("inquirer");

return inquirer 
    .prompt ([
        {
            type: "list",
            name: "home",
            message: "Choose an option:",
        }, 
    ])

module.exports = Roles;