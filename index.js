const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [ 'What is the title of your project?', 'Please give a description of your project', 'What are the steps to install you project?', 'Provide instructions for use', 'Please list any contributors', 'Please list any parameters for testing', 'Please choose a color for your license badge', 'Please enter the name for your license', 'Enter your license text here', 'What is your Github username?', 'What is your e-mail address?' ];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err) {
            throw err;
        }
        else {
            console.log('ReadMe file generated!')
        }
    });
}

function init() {
    promptUser().then(data => {
        const response = generateMarkdown(data);
        writeToFile('./dist/readme.md', response)
    })
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if (titleInput) {
                    return true;
                    } else {
                    console.log('Please enter a title for your ReadMe!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                console.log('Please enter a project description!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                console.log('Please enter installation steps');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[3],
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                console.log('Please enter isntructions on use');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: questions[4],
            validate: contributorsInput => {
                if (contributorsInput) {
                    return true;
                } else {
                console.log('Please enter the names of any contributors');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[5],
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                console.log('Please enter testing parameters');
                return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenseColor',
            message: questions[6],
            choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'lightgrey', 'blue']
        },
        {
            type: 'input',
            name: 'licenseName',
            message: questions[7],
            validate: licenseNameInput => {
                if (licenseNameInput) {
                    return true;
                } else {
                console.log('Please enter title for your license');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'licenseInfo',
            message: questions[8],
            validate: licenseNameInput => {
                if (licenseNameInput) {
                    return true;
                } else {
                console.log('Please enter your license text');
                return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'github',
            message: questions[9],
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                console.log('Please enter your Github Username');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[10],
            validate: emailInput => {
                if (emailInput) { 
                    return true;
                } else {
                console.log('Please enter your e-mail address');
                return false;
                } 
            }  
        } 
    ])
}

init() 

