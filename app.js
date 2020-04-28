var inquirer = require('inquirer');
var employee = require('./lib/employee');
var engineer = require('./lib/engineer');
var intern = require('./lib/intern');
var manager = require('./lib/manager');

const employees = []

function createProfile() {
    inquirer.prompt([
        { type: "list",
        name: "employee",
        message: "What is your position?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            
        ]

    }
    ])
}