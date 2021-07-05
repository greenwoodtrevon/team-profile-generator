const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, school) {
    super(name);

    this.school = school;
  }

  getSchool() {
    return `This intern is attending ${this.school}.`
  }
}

module.exports = Intern;