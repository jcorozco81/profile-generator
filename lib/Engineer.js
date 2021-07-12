const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(data) {
        super(data);
        this.github=data.github;
    }
getGithub(){

    console.log(`Github Username: ${this.github}`);
    return this.github; 


}

getRole(){

    console.log(`Role: Engineer`);
    this.role = 'Engineer';
    return this.role;

}
    }
    module.exports = Engineer;