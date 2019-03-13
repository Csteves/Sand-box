
//ArrayList Implemtation in javascript

// length - integer  - How many elements in the array
// push   - function - accepts a value and adds to the end of the list
// pop    - function - removes the last value in the list and returns it
// get    - function - accepts an index and returns the value at that position
// delete - function - accepts an index, removes value from list, collapses,
//                     and returns removed value
//Implement using an constructor function
class ArrayList{
    constructor(){
        this.length = 0;
        this.list = {};
    };
    push(input){
        this.list[this.length] = input;
        this.length++;
   };
   pop(){
    let popped = null;
    if (this.length) {
        popped = this.list[this.length - 1]
        delete this.list[this.length - 1];
        this.length -= 1
    } else {this.length = 0};
    return popped
    };
    get(i){
        if(this.list.hasOwnProperty(i)) return this.list[i];
        else throw new Error('Does not contain item at index '+i)
    };
    delete(i){
        let removed;
        if(this.list.hasOwnProperty(i)){
            removed = this.list[i]
            delete this.list[i]
        }else{throw new Error('Does not contain item at index ' + i)}
        let newList = {};
        let index = 0;
        for(let key in this.list ){
            newList[index] = this.list[key];
            index++
        }
        this.list = {...newList};
        this.length = Object.keys(this.list).length;
        return removed;
    }
}


let list = new ArrayList();
list.push('item')
list.push('another Item')
list.push('another Item')
list.push('another Item')
list.push('another Item')
list.pop();
console.log(list)
console.log(list.delete(3))
console.log(list)
console.log(list.get(3))

