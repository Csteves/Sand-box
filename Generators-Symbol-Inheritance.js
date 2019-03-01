// Generator functions and Symbol Type and Object Heirarchy
function* fibonacci() { // a generator function
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
function myFib(n){
    let [i,prev,curr] = [0,0,1];
    while(i <= n){
      [prev, curr] = [curr, prev+curr]
      i++
    }
    return curr;
}
let fib = myFib(8);
// console.log(fibonacci())
  for (let n of fibonacci()) {
    // console.log(n);
    // truncate the sequence at 1000
    if (n >= 10) {
      break;
    }
  }
  let obj = {
      *[Symbol.iterator](){
          let objProps = Object.keys(this)
          for(let i = 0; i < Object.keys(this).length; i++){
              yield objProps[i];
          }
      }
  };
  for(let i = 97; i < 123; i++){
      obj[String.fromCharCode(i)] = i;
  }
let arr5 = [1,2,3,4]
// console.log(obj)
  for(let val of obj){
    //   console.log(val)
  }

function Employee(name,age,salary){
    this.company = 'Enron'
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.dept = 'general';
};
Employee.prototype.intro = function(){
    console.log('My name is '+ this.name + ' I am ' + this.age +' years old.')
    // return this.company
}
function Manager(...args){
    Employee.apply(this,[...args]);
    this.reports = [];
}
Manager.prototype = Object.create( Employee.prototype);
Manager.prototype.constuctor = Manager;

function Workerbee(...args){
    Employee.apply(this,[...args]);
    this.projects = [];
}
Workerbee.prototype = Object.create(Employee.prototype);
Workerbee.prototype.constuctor = Workerbee;

function SalesPerson(...args){
    Workerbee.apply(this,[...args]);
    this.dept = 'Sales';
    this.quota = 100;
}
SalesPerson.prototype = Object.create(Workerbee.prototype);
SalesPerson.prototype.constuctor = SalesPerson;

function Engineer(product,...args){
    Workerbee.apply(this,[...args]);
    this.dept = 'Information Technology';
    this.product = product;
}
Engineer.prototype = Object.create(Workerbee.prototype);
Engineer.prototype.constuctor = Engineer;

let x = new SalesPerson('bill',54,'40,000.00');
console.log(x.name)
console.log(x.quota)
let ron = new Engineer('CMMS','Ron',43,'80,000.00');
console.log(ron.name)
console.log(ron.product)
console.log(ron.company)
ron.intro()
x.intro()
let deush = new Manager('Tory',31,'20,000.00 /yr');
deush.intro()
console.log(deush.name)
console.log(deush.age)
console.log(deush.salary)