const Employee = require("./Employee");
// extend Employee class to create Intern sub-class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
