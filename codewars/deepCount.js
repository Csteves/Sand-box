function deepCount(a){
    let total = a.length;
    if(!a.length){return 0};
    a.forEach(arr => {
       if(Array.isArray(arr)){
          total += deepCount(arr)
        }
    });
    return total;
}