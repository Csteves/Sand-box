function upArray(arr){
    if(!arr.length){return null}
   let count = 0;
   let compareArr = [0,1,2,3,4,5,6,7,8,9];
   for(let i = arr.length-1; i >= 0; i--){
      let filterd = compareArr.filter(item => item === arr[i])
      if(!filterd.length){
          return null
      }else{
          if(count < 1){
              if(arr[i] < 9 ){
                  arr[i] = arr[i] + 1;
                  count ++
              }else if(arr[i] === 9 ){
                  if(i === 0){
                      arr[i] = 0;
                      arr.unshift(1)
                  }else{
                      arr[i] = 0
                    }
              }
            }
        }
    }
    return arr
}