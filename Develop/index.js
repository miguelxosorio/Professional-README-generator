// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMd = require('./utils/generateMarkdown');

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

// function to prompt the questions to the user - answers are rendered as objects
const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
const init = async () => {
    // javascript error handling
    try {
        console.log('Welcome! Please answer the following questions\nThank you!')

        const answers = await promptUser();

        const fileContent = generateMd(answers);

        await writeToFile('./generated/README.md', fileContent);

        console.log('README.md has been created in the generated folder.');

    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();

