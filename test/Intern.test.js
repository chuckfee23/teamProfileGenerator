const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("constructor", () => {
    it("should return a new Intern object when passed variables for name (string), id (number), email (string), and school (string)", () => {
      // arrange
      let name = "Charlie";
      let id = 23;
      let email = "chuckfee23@aol.com";
      let school = "Iowa";
      // act
      const intern = new Intern(name, id, email, school);
      // assert
      expect(intern.name).toEqual(expect.any(String));
      expect(intern.name).toEqual(name);
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(expect.any(String));
      expect(intern.email).toEqual(email);
      expect(intern.school).toEqual(expect.any(String));
      expect(intern.school).toEqual(school);
    });
  });

  describe("getSchool", () => {
    it("Should return the value on the school key of the Intern object", () => {
      let name = "Charlie";
      let id = "23";
      let email = "chuckfee23@aol.com";
      let school = "Iowa";

      const intern = new Intern(name, id, email, school);
      const internSchool = intern.getSchool();

      expect(internSchool).toEqual(school);
    });
  });
});
