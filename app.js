var inquirer = require('inquirer');
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
            "Engineer",
            "Intern",
            "Manager",
            "All employees are listed"
        ]

    }
    ]).then(userChoice =>{
        switch (userChoice.employee) {

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "Manager":
                addManager();
                break;
            
            case "All employees are listed":
                
        }
    })
}