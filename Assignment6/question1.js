//Q1 - Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().


class BankAccount {
  constructor(owner, balance) {
    if (typeof balance !== 'number' || isNaN(balance) || balance < 0) {
      throw new Error('Balance must be a valid number ');
      
    }

    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      console.log("Invalid amount. ");
      return;
    }

    this.balance += amount;
    console.log(`${this.owner} has deposited: ${amount}`);
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      console.log("Invalid amount.");
      return;
    }

    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} has withdrawn: ${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  displayBalance() {
    console.log(`${this.owner} has balance: ${this.balance}`);
  }
}

try{
const p1 = new BankAccount('Yash', 1000);
p1.deposit(111);       
p1.withdraw(100);       

p1.displayBalance();   
}catch(error){
    console.log('error encountered ')
}

