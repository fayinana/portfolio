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












// function Person(name,birthYear){
//  this.name = name;

//  this.birthYear = birthYear
// }

// const ananiya = new Person('ananiya',2002)

// let date = new Date()
// Person.prototype.calcAge = function(){
//   console.log(date.getFullYear() - this.birthYear);
// }

// console.log(ananiya.__proto__.hasOwnProperty('calcAge'));



// function Car(make,speed){
//   this.make = make;
//   this.speed = speed;
// }
// Car.prototype.accelerate = function(){
//         this.speed += 10;
// }
// Car.prototype.break = function(){
//         this.speed -= 5;
// }

// const bmw = new Car('bmw',120)
// const Mercedes = new Car('mercedes',95)

// bmw.accelerate()
// console.log(bmw.speed);




// class CarCl{
//   constructor(make,speed){
//     this.make = make;
//     this.speed = speed;
//   }
// accelerate (){
//         this.speed += 10;
// }
// break (){
//         this.speed -= 5;
// }
// get speedUS(){
//     return this.speed / 1.6
// }

// set speedUS(speed){
//     this.speed = speed * 1.6
// }

// }
// const volvo = new CarCl('volvo', 120)
// volvo.speedUS = 150
// volvo.accelerate()
// // volvo.break()
// // volvo.break()
// console.log(volvo.speedUS)
// console.log(volvo.speed);



// const Person = function(firstName,lastName){
// this.firstName = firstName;
// this.lastName = lastName;
// }

// Person.prototype.fullName = function(){
//     console.log(this.firstName + ' ' + this.lastName);
// }

// const Student = function(firstName,lastName,course){
//    Person.call(this,firstName,lastName)
//    this.course = course
// }
// Student.prototype = Object.create(Person.prototype)

// const stud1 = new Student('first name','father name','CSE');

// console.log(stud1 instanceof Student);
// console.log(stud1 instanceof Person);
// console.log(stud1 instanceof Object);
// console.log(Number instanceof Object);