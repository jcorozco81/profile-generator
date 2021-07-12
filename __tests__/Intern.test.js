const Intern = require('../lib/Intern');
 
describe('Intern Test', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com', school: 'myschool'};
    const newIntern = new Intern(data);
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
    it("should return the Intern name", () => {
        expect(newIntern.getName()).toEqual('myname');
    });
});

describe("getID", () => {
    it("should return the Intern ID", () => {
        expect(newIntern.getId()).toEqual('123456');
    });
});

describe("getEmail", () => {
    it("should return the Intern Email", () => {
        expect(newIntern.getEmail()).toEqual('myemail@email.com');
    });
});

describe("getSchool", () => {
    it("should return the Intern school", () => {
        expect(newIntern.getSchool()).toEqual('myschool');
    });
});

describe("getRole", () => {
    it("should return the Intern Role", () => {
        expect(newIntern.getRole()).toEqual('Intern');
    });
});

});