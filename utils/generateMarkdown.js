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
  if (!license || license === 'None') return '';
  
  const link = renderLicenseLink(license);
  const badge = renderLicenseBadge(license);
  
  return `## License\nThis project is licensed under the ${license} License. For more information, please visit [here](${link}).\n\n${badge}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
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

To install the necessary dependencies, run the following command:

\`\`\`sh
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Tests

To run tests, run the following command:

\`\`\`sh
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.questions}. You can find more of my work at [my GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
