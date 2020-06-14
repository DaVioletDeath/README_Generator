const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [ 
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project have",
        choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","NONE"]
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((response)=>{
   api.getUser(response.GitHub).then(({data})=>{
    writeToFile("README.md", generateMarkdown({...response, ...data}))
   }) 
})
}

// function call to initialize program
init();
