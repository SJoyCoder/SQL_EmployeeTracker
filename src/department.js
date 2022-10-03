const inquirer = require("inquirer");


function departmentPrompt() {

    return inquirer 
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "Add department name",
            },
        ])
}

module.exports = departmentPrompt;