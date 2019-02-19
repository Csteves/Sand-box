function ipToInt32(ip){
    let str = ip.split(".");
    let num = str.map(e=>parseInt(e).toString(2).padStart(8,'0'));
    num = num.join('');
    let isIp = num.length === 32 ? num = parseInt(num,2):ip + " is not an IP address" ;
    return isIp;
  }