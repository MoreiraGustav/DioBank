import { Account } from "./Account";

export class AccountAdmin extends Account {
  constructor(name: string, AccountNumber: number, balance: number) {
    super(name, AccountNumber, balance);
  }

  deposit = (value: number): number => {
    if (this.getStatus()) {
        this.setBalance(this.getBalance() + value + 10);
        console.log(`Deposito de ${value} aprovado`);
        return this.getBalance() + value + 10;
      }
  
      throw new Error("Conta Desativada!");
  }
}
