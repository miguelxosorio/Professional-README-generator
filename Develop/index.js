// TODO: Include packages needed for this application
// This imports the inquirer module from npm, accessed with require()
const inquirer = require('inquirer');
// fs module helps store, access, and manage data in the OS, accessed with require()
const fs = require('fs');
// util module provides access to some utility function, accessed with require()
const util = require('util');
// includes an external module that exist in separate files, basically reads the file, executes it and then proceeds to return the export object, in this case the generateMarkdown.js
const generateMd = require('./utils/generateMarkdown');

// fs.writeFile to write data to a file and replace the file if it already exists, node has util.promisify() to convert the fs.writeFile() function to a function that returns a callback function then
// converts a callback function into a promise based function, stored it in a variable called writeFileAsync so we can call it
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.\nWhat was your motivation?\nWhy did you build this project?\nWhat problem does it solve?\nWhat did you learn?',
        name: 'description',
        validate: function (answer) {
            if(answer.length < 1){
                return console.log('Please enter a valid description.');
            }
            return true;
        }
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
            "GNU GPL v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0",
            "ISC"
        ]
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?\nWhat command should be ran to install dependencies?',
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
        message: 'Provide instructions for the project provide examples for use',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide guidelines on how other developers can contribute to your project',
        name: 'contribution'
    }
];

// function to prompt the questions to the user - answers are rendered as objects
const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const writeTheFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
const init = async () => {
    // javascript error handling with try and catch
    try {
        console.log('Welcome! Please answer the following questions\nThank you!')
        
        // storing the promptUser() function in the answers variable with async behavior 
        const answers = await promptUser();

        // storing the generateMd with the data in promptUser() function in the fileContent variable 
        const fileContent = generateMd(answers);

        // function to write README file, passing the file path for the generated file and to load the contents, in this case, the fileContent variable
        await writeTheFile('./generated/README.md', fileContent);

        console.log('README.md has been created in the generated folder.');

    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();

