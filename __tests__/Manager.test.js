const Manager = require('../lib/Manager');
 
describe('Manager Test', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com', officeNumber: '1A'};
    const newManager = new Manager(data);


    describe("Initialization", () => {
        it("should return an object containing the property 'officeNumber' when called with the 'new' keyword", () => {
            expect("officeNumber" in newManager).toEqual(true);
        });
  });

describe("getName", () => {
    it("should return the Manager name", () => {
        expect(newManager.getName()).toEqual('Employee Name: myname');
    });
});

describe("getID", () => {
    it("should return the Manager ID", () => {
        expect(newManager.getId()).toEqual('Employee ID: 123456');
    });
});

describe("getEmail", () => {
    it("should return the Manager Email", () => {
        expect(newManager.getEmail()).toEqual('Employee Email: myemail@email.com');
    });
});

describe("getofficeNumber", () => {
    it("should return the Manager Office", () => {
        expect(newManager.getofficeNumber()).toEqual('Office: 1A');
    });
});

describe("getRole", () => {
    it("should return the Manager Role", () => {
        expect(newManager.getRole()).toEqual('Manager');
    });
});

});