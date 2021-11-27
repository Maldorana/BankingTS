# Banking

## Instructions

Implement a class that contains the following interface:

```
Interface Account {
  deposit(amount: int): void;
  withdraw(amount: int): void;
  printStatements(): void;
}
```

Where printStatements prints in the console all the record of actions that happened to the account in the following format:

```
Date           Amount     Balance
22.01.2022     +500       500
14.02.2022     -120       380
```
