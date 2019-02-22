function findEvenIndex(arr){
    if(!arr.length) return 0;
    let left = 0;
    let right;
    for(let i = 0; i < arr.length - 1; i++){
        let rightIndex = arr[i+1] ? i+1 : i;
        right = arr.slice(rightIndex).reduce((a,b) => a+b)
        left += arr[i-1] || 0;
        if(left === right){return i}
    }
    return -1
  }