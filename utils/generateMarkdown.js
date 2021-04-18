

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ![](https://img.shields.io/badge/license-${data.licenseName}-${data.licenseColor})

  ## **Table of Contents**
  
  
  1. [Description](#description)
  2. [Installation Steps](#installation-steps)
  3. [Instructions](#instructions)
  4. [Contributors](#contributors)
  5. [Testing Parameters](#testing-parameters)
  6. [Licensing](#licensing)
  - [Questions](#github)
 
  
  
  ## Description
  ${data.description}
  ## Installation Steps
  ${data.installation}
  ## Instructions
  ${data.instructions}
  ## Contributors
  ${data.contributors}
  ## Testing Parameters
  ${data.tests}
  ## Licensing
  ${data.licenseInfo}
  
  ## Any Questions? Contact me!
  ### [Github](https://github.com/${data.github})
  
  ### [Email Me](<mailto:${data.email}>)
`;
};

module.exports = generateMarkdown