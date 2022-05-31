// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'How do you install the package?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How do you use the package?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Under which license will this project be?',
        name: 'license',
        choices: 'licenses'
    },
    {
        type: 'input',
        message: 'Who are the contributers for the project?',
        name: 'contributers'
    },
    {
        type: 'input',
        message: 'How do you test the application?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your github username, so people will be directed there to ask questions?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile (fileName, data)  {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    let data = {};
    inquirer
    .prompt(questions)
    .then(response => {
        data = response;
        writeToFile('README', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
