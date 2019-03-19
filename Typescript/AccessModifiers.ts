// testing out Access modifiers

type ClientInfo = {
    firstName:string;
    lastName:string;
    address:string;
    accountNumber?:number;
}
interface Teller{
  request(...args:any)
}

class Deposit implements Teller{
    request(amount:number,name:string,balance:number):number{
        console.log(`Deposited  ${amount}`)
        return balance + amount
    }
}

class WithDraw implements Teller{
     request(amount:number,name:string,balance:number):number{
        console.log(`${name} withdrew ${amount}.`)
        return balance - amount;
    }
}


abstract class Bank {
    static BankTitle:string = "The TypeScript Bank"
    private _accountNumber:number = 34223
    teller:Teller;
    protected constructor(private balance:number,private info:ClientInfo){
        this.info.accountNumber = this._accountNumber
    }
   setRequest(request:Teller):void{
        this.teller = request;
   }
   performRequest(amount?:number):void{
       let newBalance = this.teller.request(amount,this.info.firstName,this.balance)
       if(newBalance){this.balance = newBalance}
   }
   checkBalance():void{
       console.log(`${this.info.firstName}'s balance is ${this.balance}`)
   }
    set changeName(newName:string){
        console.log(this.info.accountNumber,this._accountNumber)
        if(this.info.accountNumber === this._accountNumber){
            this.info.firstName = newName;
        }
        else{
            console.log('Error: Unauthorized update of account')
        }
    }
    get changeName(): string{
        return this.info.firstName
    }
}

class Register extends Bank{
    constructor(intialDeposit:number,personalInfo:ClientInfo){
        super(intialDeposit,personalInfo)
    }

}
const bobsInfo:ClientInfo = {
    firstName:'Bob',
    lastName:'Ross',
    address:'Some where'
}
const ricksInfo:ClientInfo = {
    firstName:'Rick',
    lastName:'Slim',
    address:'Some where'
}
let bob = new Register(9000,bobsInfo);
bob.setRequest(new Deposit())
bob.performRequest(5000)
bob.setRequest(new WithDraw())
bob.performRequest(500)
bob.checkBalance()

let rick = new Register(4000,ricksInfo);
rick.changeName = "Rikki";
if(rick.changeName){
    console.log(rick.changeName)
}
rick.setRequest(new Deposit())
rick.performRequest(40)
rick.setRequest(new WithDraw())
rick.performRequest(3300)
rick.checkBalance()
console.log(Bank.BankTitle)
