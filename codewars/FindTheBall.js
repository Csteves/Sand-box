function find_the_ball(start,swaps){
    if(!swaps.length){return start}
    swaps.forEach((swap,index) =>{
        if(swap.includes(start)){
            let i = swap.indexOf(start);
            start = i === 0 ? swap[1] : swap[0];
            }
        })
    return start
}


