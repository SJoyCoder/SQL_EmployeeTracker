const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

// still working on making inputs, ran out of time
// const names = [];

// initialize();

// async function initialize() {
//     connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'rootroot', database: 'employeeTracker_db' })
// };

// async function employeeNames() {
//     employeeName = await connection.execute('SELECT employee.first_name, employee.last_name FROM employee');
//     employeeName.push(names);
//     console.log(names);

// };

function roleUpdatePrompt(names, roles, departments){

    return inquirer 
        .prompt ([
            {
                type: "list",
                name: "name",
                message: "What is the name of the employee whose role would you like to change?",
                choices: names
            },
            {
                type: "list",
                name: "role",
                message: "Which role is the employee changing to?",
                choices: roles
            },
            {
                type: "input",
                name: "salary",
                message: "Add role salary",
            },
            {
                type: "list",
                name: "department",
                message: "Add role department",
                choices: departments    
            },   
        ])
}

module.exports = roleUpdatePrompt;