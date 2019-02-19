function add(a, b) {
    let currentSum = "";
    let carryOver = 0;
    a = a.padStart(b.length,'0');
    b = b.padStart(a.length,'0');
    for(let i = a.length -1; i >= 0; i--) {
        let runningSum = parseInt(a[i]) + parseInt(b[i]) + carryOver;
        let toAdd = runningSum >= 10 ? runningSum - 10 : runningSum;
      if(runningSum >= 10) {
          runningSum -= 10;
          carryOver = 1;
      } else {
          carryOver = 0;
      }
      currentSum = runningSum + currentSum;
    }
    if(carryOver) currentSum = carryOver + currentSum;
    return currentSum;
    }