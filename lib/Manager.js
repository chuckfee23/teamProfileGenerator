const Employee = require("./Employee");
// extend Employee class to create Manager sub-class
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
    this.role = "Manager";
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;
