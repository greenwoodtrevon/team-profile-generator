// set global variables, import modules and classes
const Engineer = require('/lib/Engineer');
const Intern = require('/lib/Intern');
const Manager = require('/lib/Manager');

const inquirer = require('inquirer');

const teamList = [];
const idList = [];


// main app function 
function app() {

  // create manager
  const createManager = () => {
    console.log('Please build out your team.');
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
      },
      {
        type: 'input',
        name:'managerId',
        message: "What is the mnager's ID?"
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: "What is the manager's office number?"
      } 
    ]).then(userAnswers => {
      const manager = new Manager(userAnswers.managerName, userAnswers.managerId, userAnswers.managerEmail, userAnswers.managerOffice)

      teamList.push(manager);
      idList.push(userAnswers.managerId);
      createTeam();
    })
  }
  // create team 
  const createTeam = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'userChoice',
        message: 'Which type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "I don't need anymore members"
        ]
      }
    ]).then(selection => {
      switch (selection.userChoice) {
        case 'Engineer':
          // add engineer here
          break;
        case 'Intern':
          // add intern here
          break;
        default:
          // generate team for html
        
      }
    })
  }
  
  // CALLBACK TO CREATING FUNCTIONS
  
  // add enginner

  // add intern

  // generate team for html








}
