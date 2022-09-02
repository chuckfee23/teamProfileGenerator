const inquirer = require("inquirer");
const fs = require("fs");
const createHTML = require("./src/createHTML");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your Manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is their office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office
      );
      teamArray.push(manager);
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is this new team member's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your team member?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "addTeamMember",
        message: "Would you like to add more folks to the team?",
        default: false,
      },
    ])
    .then((response) => {
      let employee;
      if (response.role === "Engineer") {
        employee = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
      } else {
        employee = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
      }

      teamArray.push(employee);

      if (response.addTeamMember) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeHTML = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team successfully created!");
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return createHTML(teamArray);
  })
  .then((teamHTML) => {
    return writeHTML(teamHTML);
  })
  .catch((err) => {
    console.log(err);
  });
