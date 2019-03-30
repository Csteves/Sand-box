/*
Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.
*/

function orderWeight(strng) {
    let numArr = [];
     strng.split(' ').forEach((item,i) => {
       let x = {};
       x.weight = item.split('').reduce((sum,cur) => parseInt(sum)+ parseInt(cur));
       x.val = item;
        numArr.push(x)
    });
    let result = numArr.sort((a,b) => {
        if(a.weight < b.weight)return -1;
        else if( a.weight > b.weight)return 1;
        else{
            //if weights are equal, then sort by unicode value of string
            if(a.val < b.val) return -1;
            else if(a.val > b.val) return 1;
            else return 0;
        }
        },0);

    return result.map(item => item.val).join(' ');
}

