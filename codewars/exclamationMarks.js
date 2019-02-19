function balance(left,right){
    let leftQNum = left.split('?').length - 1;
    let rightQNum = right.split('?').length - 1;
    let leftW = ((leftQNum) * 3) + ((left.length - leftQNum) *2);
    let rightW = ((rightQNum) * 3) + ((right.length - rightQNum) *2);
    return(leftW > rightW ? "Left": rightW > leftW ? "Right":"Balance")
  }