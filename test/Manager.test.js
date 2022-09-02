const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("should return a new Manager object when passed variables for name (string), id (number), email (string), and office (number)", () => {
      // arrange
      let name = "Charlie";
      let id = 23;
      let email = "chuckfee23@aol.com";
      let office = 1;
      // act
      const manager = new Manager(name, id, email, office);
      // assert
      expect(manager.name).toEqual(expect.any(String));
      expect(manager.name).toEqual(name);
      expect(manager.id).toEqual(expect.any(Number));
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(expect.any(String));
      expect(manager.email).toEqual(email);
      expect(manager.office).toEqual(expect.any(Number));
      expect(manager.office).toEqual(office);
    });
  });

  describe("getOffice", () => {
    it("Should return the value on the office key of the Manager object", () => {
      let name = "Charlie";
      let id = 23;
      let email = "chuckfee23@aol.com";
      let office = 1;

      const manager = new Manager(name, id, email, office);
      const managerOffice = manager.getOffice();

      expect(managerOffice).toEqual(office);
    });
  });
});
