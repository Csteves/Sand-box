function fruit(reels, spins){
    let scores = {
   Wild:10,
   Star:9,
   Bell:8,
   Shell:7,
   Seven:6,
   Cherry:5,
   Bar:4,
   King:3,
   Queen:2,
   Jack:1,
    }
    let score = {};
    let result;
    let multiplyer = 1;
    for(let i = 0; i < spins.length; i++){
        if(!score.hasOwnProperty(reels[i][spins[i]])){
            score[reels[i][spins[i]]] = 1
        }else{
            score[reels[i][spins[i]]] += 1
        }
    }
    if(Object.keys(score).length === 1){
       multiplyer = 10;
       for(let key in score){
           result = (scores[key] * multiplyer)
       }
    }else if(Object.keys(score).length === 2){
       for(let key in score){
           if(score[key] === 1 && key === "Wild"){
               multiplyer = 2;
           }
       }
       for(let key in score){
           if(score[key] === 2){
           result = scores[key] * multiplyer
               }
       }
   }else{
        result = 0;
    }
    return result
   }