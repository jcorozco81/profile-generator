const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data) {

        super(data);
        this.officeNumber = data.officeNumber;

    }
getofficeNumber(){

    // console.log(`Office Number: ${this.officeNumber}`);
    return `Office: ${this.officeNumber}`;

}

getRole(){

    console.log(`Role: Manager`);
    this.role = 'Manager';
    return this.role;

}

    }
    module.exports = Manager;
