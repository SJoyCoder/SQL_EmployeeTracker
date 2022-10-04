const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const departmentPrompt = require("./src/department");
const employeePrompt = require("./src/employees");
const rolesPrompt = require("./src/roles");
const roleUpdatePrompt = require("./src/roleUpdate");
// const PORT = process.env.PORT || 3001;

let connection;

initialize();
main();
// departmentPrompt();

async function initialize() {
    connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'rootroot', database: 'employeeTracker_db' })
};

async function main() {
    const responseObject = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Choose an option:",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        },
    ]);
    console.log(responseObject)
    if(responseObject.option === "View All Departments"){
        const [rows] = await connection.execute('SELECT * FROM department');
        console.table(rows);
        main();
    }else if(responseObject.option === "View All Roles"){
        const [rows] = await connection.execute('SELECT * FROM role');
        console.table(rows);
        main();
    }else if(responseObject.option === "View All Employees"){
        const [rows] = await connection.execute('SELECT * FROM employee');
        console.table(rows);
        main();
    }else if(responseObject.option === "Add a Department"){
        const {name} = await departmentPrompt();
        const [rows] = await connection.execute(`INSERT INTO department (name)
        VALUES (?)`, [name]);

        main();

    }else if(responseObject.option === "Add a Role"){
        const {salary, name, department} = await rolesPrompt();
        main();
    }else if(responseObject.option === "Add an Employee"){
        const response = await employeePrompt();
        main();
    }else if(responseObject.option === "Update an Employee Role"){
        const response = await roleUpdatePrompt();
        main();
    }
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