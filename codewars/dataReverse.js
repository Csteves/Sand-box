function dataReverse(data) {
    let result=[]
    let dataArr = data.reduce((result,value,index,array) =>{
         if(index %8 === 0)
             result.push(array.slice(index,index+8)) ;
             return result
     },[]);
     dataArr.reverse().forEach(arr => {
        arr.forEach(item => result.push(item))
    });
    return (result)
 }