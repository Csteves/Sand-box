function songDecoder(song){
    let result = song.replace(/WUB/g,' ').replace(/ {1,}/g,' ').split("");
      if(result[0] === " ")result.splice(0,1);
      if(result[result.length - 1] === " ")result.splice(-1,1);
    return result.join('');
  }