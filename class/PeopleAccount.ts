import { Account } from "./Account";


export class PeopleAccount extends Account {
    Doc_id: number;
  
    constructor(Doc_id: number, name: string, AccountNumber: number, balance: number) {
      super(name, AccountNumber, balance);
      this.Doc_id = Doc_id;
    }


  }