const licenseBadgeAndLink = require('./license');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  console.log(licenseBadgeAndLink[license]);
  return licenseBadgeAndLink[license]; // have to use a square bracket to access dynamic key names
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  To install dependencies, run the following:
  \`
  ${data.installation}
  \`

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}
  This repository is licensed under the ${data.license} license. 

  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following:

  \`
  ${data.tests}
  \`

  ## Questions

  Questions about this repository? Contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username})

`;
}


// allows for this to be exported, in this case, in the index.js
module.exports = generateMarkdown;
