// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
     {
        type: 'input',
        message: 'Propject title ?',
        name: 'title'
     },
     {
        type: 'input',
        message: 'Description of the project ?',
        name: 'description'
     },
     {
        type: 'input',
        message: 'Installation ?',
        name: 'installation' 
     },
     {
        type: 'input',
        message: 'Usage ?',
        name: 'usage'
     },
     {
        type: 'list',
        message: 'License ?',
        name: 'license',
        choices: ['Apache', 'MIT', 'Mozilla', 'GNU']
     },
     {
        type: 'input',
        message: 'Contribution ?',
        name: 'contribution'
     },
     {
        type: 'input',
        message: 'Test ?',
        name: 'test'
     },
     {
        type: 'input',
        message: 'Questions ?',
        name: 'questions'
     },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            return console.log(err)
        }
        console.log('Successfully wrote to ' + fileName)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readmeContent = markdown(answers)
        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init();
