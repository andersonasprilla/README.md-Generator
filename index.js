// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
   {
      type: 'input',
      message: 'What is the Project title ?',
      name: 'title'
   },
   {
      type: 'editor',
      message: 'Description of the project ?',
      name: 'description'
   },
   {
      type: 'input',
      message: 'What is the command to install the repo in your machine? ?',
      name: 'installation'
   },
   {
      type: 'input',
      message: 'What are the necessary dependencies to properly run the application ?',
      name: 'dependencies'
   },
   {
      type: 'input',
      message: 'What is the command to run the application ?',
      name: 'usage'
   },
   {
      type: 'list',
      message: 'License ?',
      name: 'license',
      choices: ['Apache', 'MIT', 'Mozilla', 'GNU', 'N/A']
   },
   {
      type: 'input',
      message: 'Contribution ?',
      name: 'contribution'
   },
   {
      type: 'input',
      message: 'What command should the user input to test the application ?',
      name: 'test'
   },
   {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
   },
   {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      validate: function (value) {
         const pass = value.match(
            /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/
         );
         if (pass || value === '') {
            return true;
         }
         return 'Please enter a valid email address or leave this field empty.';
      },
      default: () => '',
   }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
      if (err) {
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
