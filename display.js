const apps = require("./app");
const fs = require("fs");
const path = require("path");
var employees = apps.employees;

const dirTemp = path.resolve(__dirname, "../Employee-Summary/templates");

const display = (employees) => {
    const html = [];
    
    html.push(employees.filter(employees => employees.getRole() === 'Engineer')
    .map(engineer => displayEngineer(engineer))
    );

    html.push(employees.filter(employees => employees.getRole() === 'Intern')
    .map(intern => displayIntern(intern))
    );
    html.push(employees.filter(employees => employees.getRole() === 'Manager')
    .map(manager => displayManager(manager))
    );


    return displayMain(html.join(''));
};

const displayEngineer = engineer => {
    let temp = fs.readFileSync(path.resolve(dirTemp, "engineer.html"), "utf8");

    temp = replacePlaceholders(temp, "name", engineer.getName());
    temp = replacePlaceholders(temp, "role", engineer.getRole());
    temp = replacePlaceholders(temp, "email", engineer.getEmail());
    temp = replacePlaceholders(temp, "id", engineer.getId());
    temp = replacePlaceholders(temp, "github", engineer.getGitHub());    

    return temp;
};

const displayIntern = intern => {
    let temp = fs.readFileSync(path.resolve(dirTemp, "intern.html"), "utf8");

    temp = replacePlaceholders(temp, "name", intern.getName());
    temp = replacePlaceholders(temp, "role", intern.getRole());
    temp = replacePlaceholders(temp, "email", intern.getEmail());
    temp = replacePlaceholders(temp, "id", intern.getId());
    temp = replacePlaceholders(temp, "school", intern.getSchool());    

    return temp;
};

const displayManager = manager => {
    let temp = fs.readFileSync(path.resolve(dirTemp, "manager.html"), "utf8");

    temp = replacePlaceholders(temp, "name", manager.getName());
    temp = replacePlaceholders(temp, "role", manager.getRole());
    temp = replacePlaceholders(temp, "email", manager.getEmail());
    temp = replacePlaceholders(temp, "id", manager.getId());
    temp = replacePlaceholders(temp, "officeNum", manager.getOfficeNum());    

    return temp;
};

const displayMain = html => {
    const temp = fs.readFileSync(path)
}

module.exports = display;