const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should return a new Engineer object when passed variables for name (string), id (number), email (string), and github (string)", () => {
      // arrange
      let name = "Charlie";
      let id = 23;
      let email = "chuckfee23@aol.com";
      let github = "chuckfee23";
      // act
      const engineer = new Engineer(name, id, email, github);
      // assert
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.name).toEqual(name);
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.id).toEqual(id);
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.email).toEqual(email);
      expect(engineer.github).toEqual(expect.any(String));
      expect(engineer.github).toEqual(github);
    });
  });

  describe("getGithub", () => {
    it("Should return the value on the github key of the Engineer object", () => {
      let name = "Charlie";
      let id = "23";
      let email = "chuckfee23@aol.com";
      let github = "chuckfee23";

      const engineer = new Engineer(name, id, email, github);
      const egineerGithub = engineer.getGithub();

      expect(egineerGithub).toEqual(github);
    });
  });
});
