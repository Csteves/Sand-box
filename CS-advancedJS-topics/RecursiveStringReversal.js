//Recursive  string reversal

function stringRecursal(str){
    console.log(`stringReversal(${str})`)
    let strArr = str.split(" ");
    if(strArr.length === 1){
        return strArr[0] + " ";
    }else{
        let next = strArr.splice(0,1);
        return  stringRecursal(strArr.join(' ')) + next[0] + " ";
    }
}

console.log(stringRecursal("This is a random string about to be flipped with recursion"));