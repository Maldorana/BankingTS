import { BankAccount } from '../src/BankAccount';
import { Statement } from '../src/Statement';
import { StatementRepository } from '../src/StatementRepository';

describe('Account test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should print the header of the statement', () => {
    const logSpy = jest.spyOn(console, 'log');
    const mockRepository: StatementRepository = {
      addStatement: jest.fn(),
      getAllStatements: jest.fn().mockReturnValue([]),
    };
    const account = new BankAccount(mockRepository);

    account.printStatements();

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith('Date\t\tAmount\t\tBalance');
  });

  it('should print the header and one deposit statement', () => {
    const logSpy = jest.spyOn(console, 'log');
    const statement1 = new Statement(new Date('3/15/2025'), 400, 400);
    const mockRepository: StatementRepository = {
      addStatement: jest.fn(),
      getAllStatements: jest.fn().mockReturnValue([statement1]),
    };
    const account = new BankAccount(mockRepository);

    account.deposit(400);
    account.printStatements();

    expect(logSpy).toBeCalledTimes(2);
    expect(logSpy).nthCalledWith(1, 'Date\t\tAmount\t\tBalance');
    expect(logSpy).nthCalledWith(2, '15.03.2025\t+400\t\t400');
  });
});
