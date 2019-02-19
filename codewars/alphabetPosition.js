function alphabetPosition(text) {
    text = text.toLowerCase();
    let result =[]
    text.split('').map((char) =>{
        if(char.charCodeAt() <= 122 && char.charCodeAt() >= 97){
            result.push(char.charCodeAt()-96);
        }
    })
    return result.join(' ');
  }