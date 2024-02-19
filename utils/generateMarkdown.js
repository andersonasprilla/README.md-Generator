// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Apache': 
    return  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'MIT': 
    return  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Mozilla': 
    return  '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'GNU': 
    return  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'N/A') return '';
  
  const link = renderLicenseLink(license);
  const badge = renderLicenseBadge(license);
  
  return `## License\nThis project is licensed under the ${license} License. For more information, please visit [here](${link}).\n\n${badge}`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

Walkthrough video [Link](https://app.screencastify.com/v3/watch/k34yyk3jeuCdmHeGmMN8)

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${data.license ? '- [License](#license)' : ''}
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Clone the repository to your local machine:

\`\`\`sh
git clone https://github.com/${data.github}/${data.title}.git
\`\`\`

## Usage

This command adds ${data.dependencies} as a dependency in your project's package.json file.

\`\`\`sh
npm install ${data.dependencies}
\`\`\`

To start the application, run:

\`\`\`sh
${data.usage}
\`\`\`

Follow the prompts to enter your project details. A README.md file will be generated in your current directory.

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Tests

To run tests, execute the following command:

\`\`\`sh
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
