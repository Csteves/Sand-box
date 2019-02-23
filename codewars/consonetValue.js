function solve(s) {
   let arr = s.split( /[aeiou]/)
   let highest = 0;
   arr.forEach((char,i) => {
       if(char.length === 1){
           let current = (char.charCodeAt(0) - 96 )
           highest = current > highest ? current : highest;
       }else if(char.length > 1){
           let subStr = char.split('').reduce((sum,cur) =>{
                return (sum + cur.charCodeAt(0) - 96);
           },0 )
           console.log(subStr)
           highest = subStr > highest ? subStr : highest;
       }
   })
   return highest
  };