//Write a recursive function that finds all possible permutations of string
//Example: "cat" == [cat,cta,act,atc,tac,tca..]
let count = 0;
function permuteHelper(str,chosen){
    count++
    // Remove unintended commas that are result of using splice to unchoose, in order to explore more paths
    if(chosen.includes(',')){
        let temp = chosen.replace(/,/g,"");
        chosen = temp;
     };
    if(str.length === 0){
        console.log(chosen);
    } else {
           let charArr  = [...str];
           for(let i = 0; i < charArr.length; i++){
                    //Choose
                   let char = charArr.splice(i,1);
                   chosen += char[0];
                   //Explore
                   let tempStr = charArr.join('');
                   permuteHelper(tempStr,chosen);
                   //Unchoose
                   charArr.splice(i,0,char[0]);
                   chosen = chosen.split("").splice(0,chosen.length-1);
            }
        }
}
function permute(str){
    permuteHelper(str,"")
}

console.log(permute("so yeon"));
console.log(count);
