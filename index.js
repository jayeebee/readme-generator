// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require ('./src/readme-template');
const { writeFile, copyFile } = require ('./utils/generate-readme')

// TODO: Create an array of questions for user input
const questions = [ 'What is the title of your project?', 'Please give a description of your project', 'What are the steps to install you project?', 'Provide instructions for use', 'Please list any contributors', 'Please list any parameters for testing', 'Please choose a color for your license badge', 'Please enter the name for your license', 'What is your Github username?', 'What is your e-mail address?' ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

/*
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/

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
            name: 'instrucions',
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
            name: 'github',
            message: questions[8],
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
            message: questions[9],
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
}; 

promptUser()
