const inquirer = require('inquirer'); 
const mysql = require('mysql2')
require('console.table');
//const employeeDatabase = require("./db");

//make connection to the db here 
const db = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "Saineha7!",
    database: "employee_db"
},
console.log(`Connected to the employee_db database.`)
);

//Promp user with questions here 

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: [
                           "View All Departments",
                           "View All Roles",
                           "View All Employees",
                           "Add New Department",
                           "Add New Role",
                           "Add New Employee",
                           "Update Employee Role",
                ]
            },
        ])
        .then((response) => {
            switch (response.action) {
                case "exit":
                    return;
                case `View All Departments`:
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "View All Employees":
                    ViewAllEmployees();
                        break;
                case "Add New Department":
                    AddNewDepartment();
                            break;

                 case "Add New Role":
                    AddNewRole();
                                break;
             case "Add New Employee":
                    AddNewEmployee();
                                break;
                case "Update Employee Role":
                        UpdateEmployeeRole();
                         break;
            }
        });
}
//this is working 
function viewAllDepartments() {
    const sql = `SELECT id, name AS dept FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.table(rows);

        console.log("_________________________________")

        promptUser();
    });

}
//this is working 
function viewAllRoles() {
    const sql = 
    `SELECT role.title, role.id AS 'role.id', role.salary, department.name AS department
    from role LEFT JOIN department ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.table(rows);

        console.log("_________________________________")

        promptUser();
    });

}

function ViewAllEmployees() {
    const sql = `SELECT employee.id, employee.first_name AS "first name", employee.last_name
    AS "last name", role.title, department.name AS department, role.salary, concat(manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.table(rows);

        console.log("_________________________________")

        promptUser();
    });

}

// function AddNewRole() {
//     inquirer.prompt([
//         {
//             name: "role.title",
//             type: "input",
//             message: "What is the role you want to add?",
//         },
//         {
//             name: 'salary',
//             type: 'input', 
//             message: "What is the salary of this role?",
//         }
//     ])
//         .then((response) => {
//             const sql = `INSERT INTO role (role.title)
//     VALUES (?)`;
//             const params = [response.role.title, response.salary]; //ended right here need to make my sense.

//             db.query(sql, params, (err, result) => {
//                 if (err) {
//                    console.error(err.message);
//                     return;
//                 }
                
//                 console.log(`${response.role.title} added successfully!\n`)

//                 viewAllRoles();
//             });
//         })
//}

// function AddNewRole() {
//     const sql = `SELECT id, name AS dept FROM department`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         console.table(rows);

//         console.log("_________________________________")

//         promptUser();
//     });

// }

// function AddNewEmployee() {
//     const sql = `SELECT id, name AS dept FROM department`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         console.table(rows);

//         console.log("_________________________________")

//         promptUser();
//     });

// }

// function UpdateEmployeeRole() {
//     const sql = `SELECT id, department_name AS dept FROM department`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         console.table(rows);

//         console.log("_________________________________")

//         promptUser();
//     });

// }


promptUser();