const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Enter text up to 3 characters",
    name: "text",
  },
  {
    type: "input",
    message: "Enter a text color",
    name: "textColor",
  },
  {
    type: "input",
    message: "Enter a text color",
    name: "textColor",
  },
  {
    type: "list",
    message: "Choose a shape",
    choices: ["Circle", "Triangle", "Square"],
    name: "Shape",
  },
  {
    type: "input",
    message: "Enter a shape background color",
    name: "shapeColor",
  },
];

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, generateMarkdown(data), (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }

function init() {
  inquirer.prompt(questions).then((data) => console.log(data));
}

init();
