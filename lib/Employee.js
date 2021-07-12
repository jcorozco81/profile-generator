class Employee{
    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
        this.role;
    }

    getName(){
        // console.log(`Employee Name: ${this.name}`);
        return `Employee Name: ${this.name}`; 
    }

    getId(){
        // console.log(`Employee ID: ${this.id}`);
        return `Employee ID: ${this.id}`; 


    }

    getEmail(){
        // console.log(`Employee ID: ${this.email}`);
        return `Employee Email: ${this.email}`; 


    }

    getRole(){
        console.log(`Role: Employee`);
        this.role = 'Employee';
        return this.role;
    }
}

module.exports = Employee;