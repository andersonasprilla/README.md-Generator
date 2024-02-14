const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is the file name?',
            name: 'filename'
        }

    ]).then(response => {
        fs.writeFile(
            response.filename + '.md',
            JSON.stringify(response, null, '\t'),
            err => err ? console.error(err) :
                console.log('success'))
    })