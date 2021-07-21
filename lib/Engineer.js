const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
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