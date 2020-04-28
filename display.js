const path = require('path');
const fs = require('fs');
const apps = require('app');
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

const displayManager = manager => {
    let temp = fs.readFileSync(path.resolve(dirTemp))
}