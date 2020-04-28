const path = require('path');
const fs = require('fs');
const apps = require('app');
var employees = apps.employees;

const dirTemp = path.resolve(__dirname, "../Employee-Summary/templates");

const display = (employees) => {
    const html = [];
}