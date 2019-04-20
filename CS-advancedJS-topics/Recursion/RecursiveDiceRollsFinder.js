// Write a recursive function that outputs all the possible dice roll combinations based on how many dice are passed in
// diceRolls(numberOfDice) == all possibilities

function diceRollsHelper(n,vector){
   if(n === 0){
       console.log(vector);
   }else{
       for( let i = 1; i <= 6; i++){
           let keyVal = {
               [`Die:#${n}`]:i
           }
           vector.push(keyVal);
           diceRollsHelper(n - 1, vector);
           vector.splice(vector.length - 1,1);
       }
   }
}
function diceRolls(dice){
    const vector = [];
    diceRollsHelper(dice,vector);
}
let x = diceRolls(2);
console.log(x)