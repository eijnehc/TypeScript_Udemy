class Department {
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Deparment ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Chen Jie');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Max', describe: accounting.describe };

// console.log(accountingCopy.describe());
// accountingCopy.describe();
