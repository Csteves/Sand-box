/*
Create an addition function that does not utilize the + or - operators.

Anti-cheat tests
You may not use any of these symbols: +-[].'"`

Moreover, Math, Array, eval, new Function, with and such have been disabled.

*/


function add (x, y) {
    // Iterate until there are no more carries
  while(y !== 0){
      // bitwise AND operator will identify which bit requires a carry;
      let carry = x & y;
      //Xor operator will essestially perform or addition minus the carry;
      x = x ^ y;
      // Heres where we shift the bits accordingly, setting it to y for the next iteration to begin
      y = carry << 1;
      // carries on until no more carries are needed
  }
    return x;
}
console.log(add(3,7))