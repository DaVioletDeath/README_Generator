// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## description
  ${data.description}

  ## installation
  ${data.install}

  ## usage
  ${data.usage}

  ## contributing
  ${data.contributing}

  ## test
  ${data.test}

`;
}

module.exports = generateMarkdown;
