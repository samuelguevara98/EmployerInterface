const apps = require("./app");
const fs = require("fs");
const path = require("path");

const dirTemp = path.resolve(__dirname, "../EmployerInterface/templates");

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

    console.log(html, "----")
    return html.join('');
};

const displayEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(dirTemp, "engineer.html"), "utf8");

    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGitHub());    

    return template;
};

const displayIntern = intern => {
    let template = fs.readFileSync(path.resolve(dirTemp, "intern.html"), "utf8");

    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());    

    return template;
};

const displayManager = manager => {
    let template = fs.readFileSync(path.resolve(dirTemp, "manager.html"), "utf8");

    temp = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());    

    return template;
};

const displayMain = html => {
    const template = fs.readFileSync(path.resolve(dirTemp, "main.html"), "utf8");
    const masterHTML = (template, "team", html);
    const file = path.join(__dirname, "output", "/mainOutput.html");
    fs.writeFileSync(file, masterHTML);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

module.exports = display;