//Recursive Palindrome finder

let x = "racecar";
function isPalindrome(str){
    let strArr = [...str];
    if(str.length < 2){
        return true;
    };
    if(strArr[0] === strArr[strArr.length -1]){
        strArr.splice(0,1);
        strArr.splice(strArr.length-1,1);
       return isPalindrome(strArr.join(''));
    }else{
        return false
    };
}

console.log(isPalindrome(x));