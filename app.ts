


import { AccountAdmin } from "./class/AccountAdmin";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";


const PeopleAccountOne: PeopleAccount = new PeopleAccount(1, "gustavo", 12, 10000);
// PeopleAccountOne.deposit(2000)
// PeopleAccountOne.withdraw(3000)
// console.log(PeopleAccountOne)

// const CompanyAccountOne: CompanyAccount = new CompanyAccount('Pacotada', 123, 5000)
// CompanyAccountOne.deposit(5000)
// CompanyAccountOne.withdraw(1000)
// CompanyAccountOne.getLoan(200)
// console.log(CompanyAccountOne)

const AccountAdminOne: AccountAdmin = new AccountAdmin('Leo', 1234, 2000)
AccountAdminOne.deposit(1000)
console.log(AccountAdminOne)
