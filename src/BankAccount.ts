interface Account {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  printStatements(): void;
}

export class BankAccount implements Account {
  deposit(amount: number): void {
    return null;
  }
  withdraw(amount: number): void {
    return null;
  }
  printStatements(): void {
    console.log('Date\t\tAmount\tBalance');
  }
}
