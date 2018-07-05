class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }
}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }
}

class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }
}


// DRIVER CODE BELOW
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

console.log('Balance:', myAccount.balance);