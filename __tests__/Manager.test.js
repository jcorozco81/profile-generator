const Manager = require('../lib/Manager');
 
describe('Manager Test', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com', officeNumber: '1A'};
    const newManager = new Manager(data);


//     describe("Initialization", () => {
//         it("should return an object containing the properties 'name', 'id', 'email', 'role' when called with the 'new' keyword", () => {
//             expect("name" in employeeObject).toEqual(true);
//             expect("id" in employeeObject).toEqual(true);
//             expect("email" in employeeObject).toEqual(true);
//             // expect("role" in employeeObject).toEqual(true);

//         });
//   });

describe("getName", () => {
    it("should return the Manager name", () => {
        expect(newManager.getName()).toEqual('myname');
    });
});

describe("getID", () => {
    it("should return the Manager ID", () => {
        expect(newManager.getId()).toEqual('123456');
    });
});

describe("getEmail", () => {
    it("should return the Manager Email", () => {
        expect(newManager.getEmail()).toEqual('myemail@email.com');
    });
});

describe("getofficeNumber", () => {
    it("should return the Manager Office", () => {
        expect(newManager.getofficeNumber()).toEqual('1A');
    });
});

describe("getRole", () => {
    it("should return the Manager Role", () => {
        expect(newManager.getRole()).toEqual('Manager');
    });
});

});