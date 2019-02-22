function Xbonacci(signature,n){
let nacci = signature.slice(0,n);
    for(let i = 0; i < n; i++){
        if(i >= signature.length){
        let next = nacci.slice(i-signature.length,i)
        if(next.length){
            nacci.push(next.reduce((a,b) => a+b));
        }
      }
    }
    return nacci
}