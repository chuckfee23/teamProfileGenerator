// Test to make sure Employee constructor function works as intended.

// What are the important things that I will need to test?

// 1) That an employee object is created when supplied the proper variables
// 2) That the Employee.name contains a string data type
// 3) The Employee.id should contain a numeric value
// 4) The Employee.email should contain a string
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should return a new Employee object when passed variables for name (string), id (number), and email (string)", () => {
      // arrange
      let name = "Charlie";
      let id = 23;
      let email = "chuckfee23@aol.com";
      // act
      const employee = new Employee(name, id, email);
      // assert
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(expect.any(String));
      expect(employee.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("Should return the value on the name key of the Employee object", () => {
      let name = "Charlie";
      let id = "23";
      let email = "chuckfee23@aol.com";

      const employee = new Employee(name, id, email);
      const employeeName = employee.getName();

      expect(employeeName).toEqual(name);
    });
  });
  describe("getId", () => {
    it("Should return the value on the id key of the Employee object", () => {
      let name = "Charlie";
      let id = "23";
      let email = "chuckfee23@aol.com";

      const employee = new Employee(name, id, email);
      const employeeId = employee.getId();

      expect(employeeId).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("Should return the value on the name key of the Employee object", () => {
      let name = "Charlie";
      let id = "23";
      let email = "chuckfee23@aol.com";

      const employee = new Employee(name, id, email);
      const employeeEmail = employee.getEmail();

      expect(employeeEmail).toEqual(email);
    });
  });
});
