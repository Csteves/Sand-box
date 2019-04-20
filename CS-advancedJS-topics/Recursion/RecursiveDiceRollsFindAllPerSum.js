// Write a function that returns all the combinations of dice rolls that lead to a desired sum
// function diceSumFinder(dice,desiredSum) == print all combinations that equal desired sum;
let count = 0;
function sumFinderHelper(dice,desiredSum,combosArr,sumSoFar = 0){
    count++
    if(dice === 0){
        console.log(combosArr);
    }else{
        for( let i = 1; i <= 6; i++){
            let diceVal = {
                [`Die#${dice}`]:i
            }
            //too big
            //too small
            if(sumSoFar + i + 1*(dice - 1) <= desiredSum &&
               sumSoFar + i + 6*(dice - 1) >= desiredSum ){
                    combosArr.push(diceVal);
                    sumFinderHelper(dice - 1,desiredSum,combosArr,sumSoFar + i );
                    combosArr.splice(combosArr.length - 1,1);
             }
        }
    }
 }
 function diceSumFinder(dice,desiredSum){
     const arr = [];
     sumFinderHelper(dice,desiredSum,arr);
 }
 diceSumFinder(4,7);
 console.log(count)
