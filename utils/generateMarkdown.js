// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
  
  
  
  ## description
  ${data.description}

  ## installation
  ${data.install}

  ## usage
  ${data.usage}

  ## contributors
  ${data.contributors}

  ## test
  ${data.test}
  
  ## license
  ${data.license}

`;
}

module.exports = generateMarkdown;
