// set global variables, import modules and classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
        message: "What is the manager's ID?"
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
          // add engineer
          inquirer.prompt([
            {
              type:'input',
              name: 'engineerName',
              message: "What is this engineer's name?"
            },
            {
              type: 'input',
              name:'engineerId',
              message: "What is this engineer's ID?"
            },
            {
              type: 'input',
              name: 'engineerEmail',
              message: "What is this engineer's email?"
            },
            {
              type: 'input',
              name: 'engineerGitHub',
              message: "What is this engineer's GitHub?"
            }

          ]).then(userAnswers => {
            const engineer = new Engineer(userAnswers.engineerName, userAnswers.engineerId, userAnswers.engineerEmail, userAnswers.engineerGitHub)
      
            teamList.push(engineer);
            idList.push(userAnswers.engineerId);
          });
          break;
        case 'Intern':
          // add intern here
          inquirer.prompt([
            {
              type:'input',
              name: 'internName',
              message: "What is this intern's name?"
            },
            {
              type: 'input',
              name:'internId',
              message: "What is this intern's ID?"
            },
            {
              type: 'input',
              name: 'internEmail',
              message: "What is this intern's email?"
            },
            {
              type: 'input',
              name: 'internSchool',
              message: "What is this intern's school?"
            }

          ]).then(userAnswers => {
            const intern = new Intern(userAnswers.internName, userAnswers.internId, userAnswers.internEmail, userAnswers.internSchool)
      
            teamList.push(intern);
            idList.push(userAnswers.internId);
          });
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
