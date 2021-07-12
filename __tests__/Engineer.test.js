const Engineer = require('../lib/Engineer');
 
describe('Engineer Test', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com', github: 'mygithub'};
    const newEngineer = new Engineer(data);
//     describe("Initialization", () => {
//         it("should return an object containing the properties 'name', 'id', 'email', 'role' when called with the 'new' keyword", () => {

//             const data = {name: 'myname', id: '123456', email: 'myemail@email.com', role: 'myrole'};
//             const employeeObject = new Employee(data);

//             expect("name" in employeeObject).toEqual(true);
//             expect("id" in employeeObject).toEqual(true);
//             expect("email" in employeeObject).toEqual(true);
//             // expect("role" in employeeObject).toEqual(true);

//         });
//   });

describe("getName", () => {
    it("should return the Engineer name", () => {
        expect(newEngineer.getName()).toEqual('myname');
    });
});

describe("getID", () => {
    it("should return the Engineer ID", () => {
        expect(newEngineer.getId()).toEqual('123456');
    });
});

describe("getEmail", () => {
    it("should return the Engineer Email", () => {
        expect(newEngineer.getEmail()).toEqual('myemail@email.com');
    });
});

describe("getSchool", () => {
    it("should return the Engineer GitHub username", () => {
        expect(newEngineer.getGithub()).toEqual('mygithub');
    });
});

describe("getRole", () => {
    it("should return the Engineer Role", () => {
        expect(newEngineer.getRole()).toEqual('Engineer');
    });
});

});