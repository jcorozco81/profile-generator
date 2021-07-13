const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeArray = [];
const cardArray = [];
let cardString ="";



const roleQuestion = [
  
    {
      type: 'list',
      message: 'What is the role of the teammate you want to add?',
      name: 'addNew',
      choices: ['Manager','Engineer', 'Intern', 'Finish the Team'],
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
  

  
//Create a function to initialize app
  function init() {
    console.log("Enter the Manager information:")
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
              data.officeNumber = datas.officeNumber;
              const newTeamMember = new Manager(data);
              newTeamMember.role = newTeamMember.getRole();
              newTeamMember.specific=newTeamMember.getofficeNumber();
              console.log(`New Team Member created: ${newTeamMember.role}`);
              createCard(newTeamMember);
              proceedQuestion();
            });
            break;
            
          case 'Engineer':
            inquirer
            .prompt(engineerQuestion)      
            .then((datas) => {
              data.github=datas.github;
              const newTeamMember = new Engineer(data);
              newTeamMember.role = newTeamMember.getRole();
              newTeamMember.specific=newTeamMember.getGithub();
              console.log(`New Team Member created: ${newTeamMember.role}`);
              createCard(newTeamMember);
              proceedQuestion();
            });
            break;
        
          case 'Intern':
            inquirer
            .prompt(internQuestion)      
            .then((datas) => {
              data.school=datas.school;
              const newTeamMember = new Intern(data);
              newTeamMember.role = newTeamMember.getRole();
              newTeamMember.specific=newTeamMember.getSchool();
              console.log(`New Team Member created: ${newTeamMember.role}`);
              createCard(newTeamMember);
              proceedQuestion();
            });
            break;
            
            default:
              createHTML();            
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
    else{
      createHTML();  
    }
  });
}

  function role(){
    inquirer
    .prompt(roleQuestion)       
    .then((data) => {
      //   writeToFile('filename', genMarkdown.generateMarkdown(data));
        console.log(data);    //Debug
        if (data.addNew =='Finish the Team'){
          createHTML(); 
        }
        else{
          employeeQuestions(data.addNew);
        }
    });
}




const headerHTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Team Profile Page</title>
  </head>
  <body>

  <!-- Sart Jumbo -->
    <div class="jumbotron jumbotron-fluid bg-primary">
        <div class="container text-white text-center">
          <h1 class="display-4">Team Profile Page</h1>
          <p class="lead">Software Development Team</p>
        </div>
      </div>
<!-- End Jumbo -->
<!-- Start Card Container -->
<div class="container">
    <div class="row gx-0">
    <!-- Cards -->`;

const footerHTML = `<!-- /Cards -->
</div>
</div>
<!-- End Card Container -->
<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>`;

function createCard(newTeamMember){

  const newCard = `
  <div class="card m-2" style="width: 18rem;">
  <div class="card-header text-center">
    <h5 class="card-title">${newTeamMember.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${newTeamMember.role}</h6>
  </div>
    <div class="card-body">
      <p class="card-text">ID: ${newTeamMember.id}</p>
      <p class="card-text">Email: ${newTeamMember.email}</p>
      <p class="card-text">${newTeamMember.specific}</p>
    </div>
  </div>`;

  // cardArray.push(newCard);
  // console.log(cardArray);
  cardString= cardString.concat(newCard);
    // console.log(`Card String ${cardString}`);

}

function createHTML(){

  // let bodyHTML = cardArray.toString();
    // let fullHTML = headerHTML+bodyHTML+footerHTML;

    let fullHTML = headerHTML+cardString+footerHTML;

  // console.log(fullHTML);

  fs.writeFile('./dist/index.html', fullHTML, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!')
);
}

  // Function call to initialize app
  init();












// Debug


  
  
  
  
  
  



