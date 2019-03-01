//Giving N, return the max count of simplified fractions from 0 - N
//, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.
//Be able to handle large numbers

//credit Eulers Totient (Wikepedia) for providing formula to optimize function

let properFractions = (n) => {
    let x, i;
    let fatt = (num) => {
      let array = [], i = 2;
      while (num > 1) {
        if (num % i === 0) {
          if (array.indexOf(i) < 0) array.push(i);
          num = num / i;
          i = 2;
        } else  i++;
      }
      return array;
    }
    if (n === 1 || 0) {
      return n;
    } else {
     let arr = fatt(n);
      for (i = 0; i < arr.length; i++) {
        x = arr[i];
        n *= (1 - 1 / x);
      }
      return Math.round(n);
    }
  };



console.log(properFractions(6637344))
console.log(properFractions(15))
properFractions(5)
properFractions(15)==8
properFractions(25)==20

