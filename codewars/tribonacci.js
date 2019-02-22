function tribonacci(signature,n){
    let triNacci = [];
    for(let i = 0; i < n; i++){
        if(n <= signature.length ){
            triNacci.push(signature[i])
        }else{
            if(i === 3){triNacci = [...signature]}
            let next = triNacci.slice(i-3,i)
            if(next.length){
                triNacci.push(next.reduce((a,b) => a+b));
            }
        }
    }
    return triNacci
  }