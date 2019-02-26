function mixedFraction(s){
    let [numer,denom] = [parseInt(s.split('/')[0],10),parseInt(s.split('/')[1],10)];
    if(denom === 0) {throw new Error("ZeroDivisionError")};
    if(!numer) return '0';
    if((denom < 0 && numer >0 )||(numer < 0 && denom < 0)){
        numer *= -1;
        denom *= -1;
    }
    let  whole = parseInt((numer/denom).toFixed(2).toString().split('.')[0])
    let  remainder = (numer % denom)
    if(remainder === 0) return(whole.toString())
    for(let i = denom; i > 0 ; i--){
        if(remainder %i === 0 && denom % i === 0){
            denom /= i;
            remainder /= i;
        }
    }
    if(whole && denom < 0)(denom *= -1);
    if(!whole && denom < 0) denom *= 1;
    remainder = remainder === numer ? numer : remainder < 0 && denom < 0 ? remainder *= -1 : remainder;
    let result = whole ? `${whole} ${whole < 0 && remainder < 0 ?remainder*=-1 : remainder}/${denom}`:`${remainder}/${denom}`;
   return result
  }