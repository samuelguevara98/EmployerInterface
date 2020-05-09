const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const display = require('./display')

const employees = []

function createProfile() {
    inquirer.prompt([
        { type: "list",
        name: "employeeName",
        message: "What is your position?",
        choices: [
            "Engineer",
            "Intern", 
            "Manager",
            "All employees are listed"
        ]

    }
    ]).then(userChoice =>{
        switch (userChoice.employeeName) {

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
                name: "engineerID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "engineerEmail"
            },

            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHubUsername"
            },

        ]).then(userChoice => {
        
            console.log(userChoice);

            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)

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
            
            const intern = new Intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)

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
                name: "managerOfficeNumber"
            },

        ]).then(userChoice => {
        
            console.log(userChoice);
            
            const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

            employees.push(manager)

            createProfile();
        })
    }
}

module.exports = employees

createProfile();