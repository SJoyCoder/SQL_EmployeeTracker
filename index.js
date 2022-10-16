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
        console.log("You have added the " + name + " department"); 
        main();

    }else if(responseObject.option === "Add a Role"){

        const departments = [];
        const departmentList = await connection.execute('SELECT name FROM department');
        for (let i = 0; i < departmentList[0].length; i++) {
       departments.push(`${departmentList[0][i].name}`)  
        };

        const {title, salary, department} = await rolesPrompt(departments);
        const departmentId = await connection.execute(`SELECT id FROM department WHERE name = ?`, [department]);
        const [rows] = await connection.execute(`INSERT INTO role (title, salary, department_id) 
        VALUES (?, ?, ?)`, [title, salary, departmentId[0][0].id]);
        console.log("You have added the " + title + " role");
        main();
    }else if(responseObject.option === "Add an Employee"){
        const roles = [];
        const roleList = await connection.execute('SELECT title FROM role');
        for (let i = 0; i < roleList[0].length; i++) {
       roles.push(`${roleList[0][i].title}`)
        };

        const {first_name, last_name, role, manager_id} = await employeePrompt(roles);
        const roleId = await connection.execute(`SELECT id FROM role WHERE title =?`, [role]);
        const [rows] = await connection.execute(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
        VALUES (?, ?, ?, ?)`, [first_name, last_name, roleId[0][0].id, manager_id]);
        console.log("You have added " + first_name + " " + last_name + " to the employee list");
        main();
    }else if(responseObject.option === "Update an Employee Role"){
        const names = [];
        const employeeNames = await connection.execute('SELECT first_name, last_name FROM employee');
        for (let i = 0; i < employeeNames[0].length; i++) {
       names.push(`${employeeNames[0][i].first_name} ${employeeNames[0][i].last_name}`)
        };

        const roles = [];
        const roleList = await connection.execute('SELECT title FROM role');
        for (let i = 0; i < roleList[0].length; i++) {
       roles.push(`${roleList[0][i].title}`)
        };

        const departments = [];
        const departmentList = await connection.execute('SELECT name FROM department');
        for (let i = 0; i < departmentList[0].length; i++) {
       departments.push(`${departmentList[0][i].name}`)
        };

        const {name, role} = await roleUpdatePrompt(names, roles, departments);

        const roleId = await connection.execute(`SELECT id FROM role WHERE title =?`, [role]);

        const [rows] = await connection.execute(`UPDATE employee SET role_id = ? WHERE last_name =?`, [roleId[0][0].id, name.split(" ")[1]]);
        console.log("You have changed " + name + "'s role")
        main();
    }
}
