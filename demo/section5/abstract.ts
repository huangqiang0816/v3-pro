abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log('Department name' + this.name);
    }
    abstract printMeeting(): void
}

class AccountingDepartment extends Department {
    constructor() {
        super('Account ad Auding')
    }
    printMeeting(): void {
        console.log('the Accounting DepartMent meets ');
    }
    agentReports(): void {
        console.log('generting accounting reports');
    }
}

let departMent: AccountingDepartment
departMent = new AccountingDepartment()
departMent.printName()
departMent.printMeeting()
departMent.agentReports()