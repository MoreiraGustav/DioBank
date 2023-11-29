export abstract class Account {
  private readonly name: string;
  private readonly AccountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, AccountNumber: number, balance: number) {
    this.name = name;
    this.AccountNumber = AccountNumber;
    this.balance = balance;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): number => {
    if (this.validateStatus()) {
      if (value > 0) {
        this.balance + value
        console.log(`depostito de ${value} realizado com sucesso!`);
        return this.balance = this.balance + value;
      } else {
        console.log("O valor do depósito deve ser maior que zero.");
        return this.balance 
      }
    }
    throw new Error("Conta inválida");
  };

  withdraw = (valueSaque: number): number => {
    if (valueSaque > 0 && valueSaque <= this.balance) {
      this.balance - valueSaque;
      console.log(`Saque de R$${valueSaque} realizado com sucesso.`);
      return this.balance = this.balance - valueSaque;
    } else {
      console.log("Saldo insuficiente ou valor inválido para saque.");
      return this.balance ;
    }
  };
  getBalance = (): number => {
    return this.balance
  }

  setBalance = (newbalance: number): number => {
    return (this.balance = newbalance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta Desativada!");
  };

  getStatus = (): boolean => {
    return this.status;
  };
}
