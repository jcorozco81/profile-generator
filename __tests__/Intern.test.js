const Intern = require('../lib/Intern');
 
describe('Intern Test', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com', school: 'myschool'};
    const newIntern = new Intern(data);

    describe("Initialization", () => {
        it("should return an object containing the property 'school' when called with the 'new' keyword", () => {
            expect("school" in newIntern).toEqual(true);
        });
  });

describe("getName", () => {
    it("should return the Intern name", () => {
        expect(newIntern.getName()).toEqual('Employee Name: myname');
    });
});

describe("getID", () => {
    it("should return the Intern ID", () => {
        expect(newIntern.getId()).toEqual('Employee ID: 123456');
    });
});

describe("getEmail", () => {
    it("should return the Intern Email", () => {
        expect(newIntern.getEmail()).toEqual('Employee Email: myemail@email.com');
    });
});

describe("getSchool", () => {
    it("should return the Intern school", () => {
        expect(newIntern.getSchool()).toEqual('School: myschool');
    });
});

describe("getRole", () => {
    it("should return the Intern Role", () => {
        expect(newIntern.getRole()).toEqual('Intern');
    });
});

});