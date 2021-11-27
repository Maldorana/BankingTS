import { BankAccount } from '../src/BankAccount';

describe('Account test', () => {
  it('should print the header of the statement', () => {
    const logSpy = jest.spyOn(console, 'log');
    const account = new BankAccount();

    account.printStatements();

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith('Date\t\tAmount\t\tBalance');
  });
});
