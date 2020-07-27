const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
var display = require('./display.js')

const employees = []

async function createProfile() {
    await inquirer.prompt([
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
            //console.log(display, "**************")
            //console.log(display(employees), "****")
                display(employees);
                
                break
        }
    })

    async function addEngineer() {
        await inquirer.prompt([
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

        ]).then(async userChoice => {
        
            console.log(userChoice);

            employees.push(new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername))

            createProfile();
        })
    }

    async function addIntern() {
        await inquirer.prompt([
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

        ]).then(async userChoice => {
        
            console.log(userChoice);
            
            const intern = new Intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)

            employees.push(intern)

            createProfile();
        })
    }

    async function addManager() {
        await inquirer.prompt([
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

        ]).then(async res => {
        
            console.log(res, "********");
            
            const manager = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerOfficeNumber)

            employees.push(manager)

            createProfile();
        })
    }
}

module.exports = employees

createProfile();