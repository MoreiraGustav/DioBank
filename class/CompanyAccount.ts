import { Account } from "./Account";

export class CompanyAccount extends Account {
  constructor(name: string, AccountNumber: number, balance: number) {
    super(name, AccountNumber, balance);
  }

  getLoan = (value: number): number => {
    if (this.getStatus()) {
      this.setBalance(this.getBalance() + value);
      console.log(`Emprestimo de ${value} aprovado`);
      return this.getBalance() + 10 + value;
    }

    throw new Error("Conta Desativada!");
  };


}
