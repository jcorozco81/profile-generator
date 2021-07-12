const Employee = require('../lib/Employee');
 
describe('employeeTest', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com'};
    const employeeName = new Employee(data);
    describe("Initialization", () => {
        it("should return an object containing the properties 'name', 'id' and 'email' when called with the 'new' keyword", () => {
            expect("name" in employeeName).toEqual(true);
            expect("id" in employeeName).toEqual(true);
            expect("email" in employeeName).toEqual(true);
        });
  });

  describe("getName", () => {
    it("should return the employee name", () => {
        expect(employeeName.getName()).toEqual('Employee Name: myname');
    });
});

describe("getID", () => {
    it("should return the employee ID", () => {
        expect(employeeName.getId()).toEqual('Employee ID: 123456');
    });
});

describe("getEmail", () => {
    it("should return a Employee name", () => {
        expect(employeeName.getEmail()).toEqual('Employee Email: myemail@email.com');
    });
});

describe("getRole", () => {
    it("should return a Employee name", () => {
        expect(employeeName.getRole()).toEqual('Employee');
    });
});

});