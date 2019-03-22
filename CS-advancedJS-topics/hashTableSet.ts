/*
  A HashTableSet!

  Name your class/newable-function HashTableSet.

  With a set, you want to put in a value to check later if it's in the collection.
  You are going to watch a sufficiently large array to assure you don't have collisions. I did 255
  to start with. When added, use a hashing function to hash the string and put in your table.
  The class should have three functions, Add, Check, and Hash.

   **Credit for this exercise: Brian Holt
*/

class HashTableSet{
    private hashTable:string[];
    constructor(){
        this.hashTable = new Array(255)
    }

    add(str:string):void{
        this.hashTable[this.hash(str,255)] = str;
    }

    check(str:string):boolean{
        return !!this.hashTable[this.hash(str,255)]
    }

    hash(str:string, max:number = 255):number{
        let hashed:number = 0;
        for(let i = 0; i < str.length; i++){
            hashed += str.charCodeAt(i) * i;
        }
        return hashed % max;
    }

    show():void{
        console.log(this.hashTable)
    }
 }

function test():string{
    const table:HashTableSet = new HashTableSet();
    let result:boolean[] = [];
    let failed:number[] = [];
    //Check hashing function
    //1.
    result.push(table.hash('test 1',50)  === table.hash('test 1', 50));
    //2.
    result.push(table.hash('test 2', 20) === table.hash('test 2', 20));
    //3.
    result.push(table.hash('Larger And More Diverse Strings!', 255) === table.hash('Larger And More Diverse Strings!',255 ));
    //4.
    result.push(table.hash('1 tset', 20) !== table.hash('test 1', 20));
    //5.
    result.push(table.hash('Expect string to always be lower than max value', 2) < 3);
    // Check Add and Check functions
    table.add('hi');
    table.add('this is fun');
    table.add('another thing');
    //6.
    result.push(table.check('hi'));
    //7.
    result.push(table.check('this is fun'));
    //8.
    result.push(table.check('another thing'));
    //9
    result.push(!table.check('Not included'));

    result.forEach((test,i):void => {
         if(!test) failed.push(i+1);
     });
     return failed.length ? `Sorry, failed test('s) #${failed.join(", #")}!` : "All tests pass!"
}
console.log(test());
