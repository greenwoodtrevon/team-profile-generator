class Employee {
  constructor(name = '') {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return `This employee's name is ${this.name}.`;
  }

  getId() {
    return `This employee's id is ${this.id}`;
  }

  getEmail() {
    return `This employee's email is ${this.email}`;
  }

  getRole() {
    return `${this}`;
  }
}

module.exports = Employee;