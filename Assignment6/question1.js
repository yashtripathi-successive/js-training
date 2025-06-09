class bankAccount{

constructor(owner,balance){
this.owner=owner;
this.balance=balance;
}

deposit(amount){

if(amount>0){
this.balance+=amount;
console.log(`${this.owner} has deposited ; ${amount}`)
}else{
console.log("invalid amount");
}
}


withdraw(amount){
if(amount<=this.balance){
this.balance-=amount;
console.log(`${this.owner} has withdrawn ; ${amount}`)
}
else{
console.log('insufficient balance');
}
}

checkBalance(){
console.log(`${this.owner} has balance ; ${this.balance}`)
}

}

const p1 = new bankAccount('yash',1000);
p1.deposit(2000);
p1.withdraw(100);
p1.checkBalance();
