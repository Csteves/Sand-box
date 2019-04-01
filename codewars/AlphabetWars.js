/*
Write a function that accepts battlefield string and returns letters that survived the nuclear strike.
# == nuke
[] == shelter

Examples--
abde[fgh]ijk     => "abdefghijk"  (all letters survive because there is no # )
ab#de[fgh]ijk    => "fgh" (all letters outside die because there is a # )
ab#de[fgh]ij#k   => ""  (all letters dies, there are 2 # close to the shellter )
##abde[fgh]ijk   => ""  (all letters dies, there are 2 # close to the shellter )
##abde[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
#ab#de[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
#abde[fgh]i#jk[mn]op => "mn" (letters from the second shelter survive, there is only 1 # close)
[a]#[b]#[c]  => "ac"
[a]#b#[c][d] => "d"
[a][b][c]    => "abc"
##a[a]b[c]#  => "c"
*/

// Non regex solution

function alphabetWar(battlefield) {
    let battlefieldArr = battlefield.split('');
    if(!battlefieldArr.includes('#')){
        return battlefieldArr.filter(char => (char !== '[') && (char !== ']')).join('')
    }else{
        if(!battlefieldArr.includes('[') && !battlefieldArr.includes(']' )) return '';
    }
    let [shelterArr,shelterLocations] =  [[],[]];
    //extract all characters per shelter and index of shelter;
    for(let i = 0; i < battlefieldArr.length; i++){
        let temp = [];
        if(battlefieldArr[i] === '['){
             i = i + 1;
            while(battlefieldArr[i] !== ']'){
                temp.push(battlefieldArr[i])
                i++
            }
        };
        if(temp.length)  {
            shelterArr.push(temp);
            shelterLocations.push(shelterArr.length - 1)
        }else shelterArr.push(battlefieldArr[i]);
    };
   //Declare frontIndex in outside scope in order to change based on each shelter location.
  let frontI = 0;
  //Filter out whichever shelters survived
  let afterMath = shelterLocations.filter((shelter,sheltI) => {
      // Split shelterArray into front and back sides to get scenario for each seperate location;
      let [front,back] = [[],[]];
      for( frontI; frontI < shelter; frontI++){
          front.push(shelterArr[frontI])
        }
      frontI = shelter;
      for(let i = shelter+1 || 0; i < (shelterLocations[sheltI+1] || shelterArr.length) ; i++){
          back.push(shelterArr[i])
        };
       // Check each side for damage sustained
      let frontHits = front.filter((char,i) => char === "#");
      let backHits = back.filter((char,i) => char === "#");
      if(frontHits.length > 1 || backHits.length > 1 || (frontHits.length && backHits.length) ){
            return false;
        }else{
            return true;
        }

  })
  let result = '';
   afterMath.forEach(item => {
   shelterArr[item].forEach(char => (result += char));
  })
  return result
}

console.log(alphabetWar('#[a]bd[fgh]ij[k]'));


