abstract class Department {
  //   private name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    this.name = name;
    // console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Only can inherit from one class
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // Calls constructor of the base class. Have to class super first before assigning own special properties
    this.admins = admins;
  }

  describe() {
    console.log('IT Deparment -ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); // Calls constructor of the base class. Have to class super first before assigning own special properties
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department -ID: ` + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d2', ['Max']);

it.addEmployee('Max');
it.addEmployee('Chen Jie');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d1', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.describe();
accounting.mostRecentReport = 'Year End Report';
accounting.addReports('Something went wrong..');
console.log(accounting.mostRecentReport);

accounting.printReports();

// const accountingCopy = { name: 'Max', describe: accounting.describe };

// console.log(accountingCopy.describe());
// accountingCopy.describe();
