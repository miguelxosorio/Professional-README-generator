// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Add a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What license should your project have?',
        name: 'license',
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: 'input',
        message: 'What command should be ran to install dependencies?',
        name: 'installation',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should be ran to run tests?',
        name: 'tests',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repository?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repository?',
        name: 'contribution'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
};
promptUser();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

