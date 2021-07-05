const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, github) {
    super(name);

    this.github = github;
  }

  getGitHub() {
    return `This engineer's github username is ${this.github}`;
  }

  getRole() {
    return `${this}`
  }
}

module.exports = Engineer;