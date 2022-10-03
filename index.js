const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const Department = require("./src/department");
const Employees = require("./src/employees");
const Roles = require("./src/roles");
const PORT = process.env.PORT || 3001;

let connection;

initialize();
main();

async function initialize(){
    connection = await mysql.createConnection.apply({host:'localhost', user:'root', database: 'employeeTracker_db'})
};

async function main() {
    const responseObject = await inquirer.prompt([
        {
            type: "list",
            name: "home",
            message: "Choose an option:",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        }, 
    ]);
    console.log(responseObject)

const [rows] = await connections.execute('SELECT * FROM gfbhgvfd = ?' ,[responseObject.ghj]);
console.table(rows);
}

// return inquirer 
//     .prompt ([
//         {
//             type: "list",
//             name: "home",
//             message: "Choose an option:",
//             choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
//         }, 
//     ])