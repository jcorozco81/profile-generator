const Engineer = require('../lib/Engineer');
 
describe('Engineer Test', () => {
    const data = {name: 'myname', id: '123456', email: 'myemail@email.com', github: 'mygithub'};
    const newEngineer = new Engineer(data);
    
    describe("Initialization", () => {
        it("should return an object containing the property 'github' when called with the 'new' keyword", () => {
            expect("github" in newEngineer).toEqual(true);
        });
    });

describe("getName", () => {
    it("should return the Engineer name", () => {
        expect(newEngineer.getName()).toEqual('Employee Name: myname');
    });
});

describe("getID", () => {
    it("should return the Engineer ID", () => {
        expect(newEngineer.getId()).toEqual('Employee ID: 123456');
    });
});

describe("getEmail", () => {
    it("should return the Engineer Email", () => {
        expect(newEngineer.getEmail()).toEqual('Employee Email: myemail@email.com');
    });
});

describe("getSchool", () => {
    it("should return the Engineer GitHub username", () => {
        expect(newEngineer.getGithub()).toEqual('Github: mygithub');
    });
});

describe("getRole", () => {
    it("should return the Engineer Role", () => {
        expect(newEngineer.getRole()).toEqual('Engineer');
    });
});

});