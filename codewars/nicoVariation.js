/*
Write a function nico/nico() that accepts two parameters:

key/$key - string consists of unique letters and digits
message/$message - string to encode
and encodes the message using the key.

First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's encode secretinformation using our crazy key.
*/
function nico  (key, message)  {
    let sortedKey = key.split('').sort();
    let indexKey = numKey(key.split(''),sortedKey);
    let messageArr = messageArrBuilder();

    function numKey(unsortedArr, sortedArr){
        let numVals = [];
        for(let i = 0; i < unsortedArr.length; i++){
            for(let j = 0; j < sortedArr.length; j++){
                if(sortedArr[j] === unsortedArr[i]){
                    numVals[i] = j;
                }
            }
        }
        return numVals;
    };
    function encode(messageArr){
        let tempMessage = [];
        for(let i = 0; i < indexKey.length; i++){
            let keyVals = {};
            keyVals.index = parseInt(indexKey[i])
            keyVals.val = messageArr[i];
            tempMessage.push(keyVals)
        }
       return tempMessage
    };
    function messageArrBuilder(){
        let messageArr = [];
        let tempMessage = message;
        if(tempMessage.length % key.length !== 0){
           tempMessage = tempMessage.padEnd((tempMessage.length + key.length - (tempMessage.length % key.length)),' ');
        };
        for(let i = 0; i < tempMessage.length; i += key.length){
             messageArr.push(tempMessage.slice(i,(i+key.length)));
        }
        return messageArr
    };

    function generateResult(){
        let encoded =[];
        let tempArr = messageArr.map((subArr,i) => (encode(subArr)));
        tempArr.forEach(item => {
            item.sort((a,b) => a.index - b.index);
            item.forEach(element => (encoded.push(element.val)))
        });
        return encoded.join('');
    }
    return  generateResult();
  };

