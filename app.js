var inquirer = require('inquirer');
var engineer = require('./lib/engineer');
var intern = require('./lib/intern');
var manager = require('./lib/manager');
var display = require('display.js')

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
                display(employees);
                break
        }
    })

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "engineerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "engineerId"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "engineerEmail"
            },

            {
                type: "input",
                message: "What is your GitHub username?",
                name: "engineerUsername"
            },

        ]).then(userChoice => {
        
            console.log(userChoice);
            
            const engineer = new engineer(userChoice.engineerName, userChoice.engineerId, userChoice.engineerEmail, userChoice.engineerUsername)

            employees.push(engineer)

            createProfile();
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "internName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "internId"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "internEmail"
            },

            {
                type: "input",
                message: "Which school are you from?",
                name: "internSchool"
            },

        ]).then(userChoice => {
        
            console.log(userChoice);
            
            const intern = new intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)

            employees.push(intern)

            createProfile();
        })
    }

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "managerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "managerId"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "managerEmail"
            },

            {
                type: "input",
                message: "What is your GitHub username?",
                name: "managerOfficeNum"
            },

        ]).then(userChoice => {
        
            console.log(userChoice);
            
            const manager = new manager(userChoice.managerName, userChoice.managerId, userChoice.managerEmail, userChoice.managerOfficeNum)

            employees.push(manager)

            createProfile();
        })
    }
}

module.exports = employees

createProfile();