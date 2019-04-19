

//Function that prints binary representation of an Int passed as an argument using recursion;
// buildBinary(43) == 101011;
class Main {
  static Binary:string = "";
  static buildBinary(n:number):void{
    console.log(`printbinary(${n})`);
    if(n < 0){
        this.Binary += "-"
        this.buildBinary(-n);
    }else if(n < 2){
        this.Binary += n.toString();
    }else{
        let lastDigit:number = n % 2;
        let restOfDigits:number = Math.floor(n/2);
        this.buildBinary(restOfDigits);
        this.buildBinary(lastDigit);
    }
  }
}
Main.buildBinary(255);
console.log(Main.Binary);
