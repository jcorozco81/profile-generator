const Employee = require('./Employee');

class Intern extends Employee {
    constructor(data) {
        super(data);
        this.school=data.school;
    }
    getSchool(){

        // console.log(`School: ${this.school}`);
        return `School: ${this.school}`; 


}

getRole(){

    console.log(`Role: Intern`);
    this.role = 'Intern';
    return this.role;

}

    }
    module.exports = Intern;