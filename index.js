const inquirer = require("inquirer");
const Department = require("./src/department");
const Employees = require("./src/employees");
const Roles = require("./src/roles");

return inquirer 
    .prompt ([
        {
            type: "list",
            name: "home",
            message: "Choose an option:",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        }, 
    ])