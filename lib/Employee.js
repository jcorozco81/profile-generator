class Employee{
    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
        this.role;
    }

    getName(){
        console.log(`Employee Name: ${this.name}`);
        return this.name; 
    }

    getId(){
        console.log(`Employee ID: ${this.id}`);
        return this.id; 


    }

    getEmail(){
        console.log(`Employee ID: ${this.email}`);
        return this.email; 


    }

    getRole(){
        console.log(`Role: Employee`);
        this.role = 'Employee';
        return this.role;
    }
}

module.exports = Employee;