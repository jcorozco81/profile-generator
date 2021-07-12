const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeArray = [];



const roleQuestion = [
  
    {
      type: 'list',
      message: 'What is the role of the teammate you want to add?',
      name: 'addNew',
      choices: ['Engineer', 'Intern', 'Finish the Team'],
    }];

const questions = [
  
    {
        type: 'input',
        name: 'name',
        message: 'Enter the Employee Name?',
      },
    
      {
        type: 'input',
        name: 'id',
        message: 'Enter the Employee ID:',
      },
    
      {
        type: 'input',
        name: 'email',
        message: 'Enter the Employee Email Address:',
      }];

  const continueQuestion = [
      {
        type: 'list',
        name: 'continue',
        message: 'Do you want to add a new teammate?',
        choices:['Yes','No'],
      }];

// Specific Questions
    const managerQuestion = [
      {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the office number:',
      }];

    const engineerQuestion = [
      {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub username:',
      }];

      const internQuestion = [
        {
          type: 'input',
          name: 'school',
          message: 'Enter the school name:',
        }];
  
  //Create a function to write
  
  function writeToFile(fileName, data) {
  
      fs.writeFile('READ-ME.md', data, (error) =>
          error ? console.error(`Error: ${error}`) : console.log(`Read Me file has been created.`)
      );
  
  }
  
//Create a function to initialize app
  function init() {
    employeeQuestions('Manager');
  }
 
  function employeeQuestions(roleIn){
      inquirer
      .prompt(questions)
         
      .then((data) => {
        switch(roleIn){
          case 'Manager':
            inquirer
            .prompt(managerQuestion)      
            .then((datas) => {
              data.officeNumber=datas.officeNumber;
              const newTeamMember = new Manager(data);
              console.log(`New Team Member created ${newTeamMember.role}`);
              data.role = newTeamMember.getRole();
              employeeArray.push(newTeamMember);
              console.log(employeeArray);

              proceedQuestion();
            });
            break;
            
          case 'Engineer':
            inquirer
            .prompt(engineerQuestion)      
            .then((datas) => {
              data.github=datas.github;
              const newTeamMember = new Engineer(data);
              employeeArray.push(newTeamMember);
              console.log(employeeArray);


              proceedQuestion();
            });
            break;
        
          case 'Intern':
            inquirer
            .prompt(internQuestion)      
            .then((datas) => {
              data.school=datas.school;
              const newTeamMember = new Intern(data);
              employeeArray.push(newTeamMember);
              console.log(employeeArray);


              proceedQuestion();
            });
            break;
            
            default:
              printList();
            
          } 

           



      });
  
  }

function proceedQuestion(){
  inquirer
  .prompt(continueQuestion)
    
  .then((data) => {
    console.log(data);
    if (data.continue === 'Yes'){
      role();
    }


  });
// return data.continue;
// console.log(data);
}





  function role(){
    inquirer
    .prompt(roleQuestion)
       
    .then((data) => {
      //   writeToFile('filename', genMarkdown.generateMarkdown(data));
        console.log(data);    //Debug
        if (data.role !='Finish the Team'){
        employeeQuestions(data.addNew);
        }
        else{
          printList();
        }
    });
}


// Debug
function printList(){
console.log(employeeArray);
}


  
  
  
  
  
  
  // Function call to initialize app
  init();


