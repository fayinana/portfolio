const navBar = document.querySelector('.nav-inner');
const menuBar = document.querySelector('.menu-nav');
const exit = document.querySelector('.exit');
const dateDom = document.querySelector('.date');

const date = new Date();

dateDom.innerHTML = date.getFullYear()

menuBar.addEventListener('click',()=>{
  navBar.style.display = 'flex';
  exit.style.display = 'flex'
  menuBar.style.display = 'none'
});

exit.addEventListener('click',()=>{
  navBar.style.display = 'none'
  menuBar.style.display = 'flex'
  exit.style.display = 'none'

});



class Account{
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = []
  }
  deposit(val){
    this.movements.push(val)
  }
  withdraw(value){
    this.deposit(-value)
  }
}

const acc1 = new Account('ananiya','etb',1010);
console.log(acc1);
acc1.deposit(100)
acc1.deposit(100)
acc1.deposit(100)
acc1.withdraw(1000)
acc1.withdraw(-1000)
console.log(acc1);