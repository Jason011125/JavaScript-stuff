function telephoneCheck(str) {
    str = str.trim();
    let numDigits = 0;
    let validChar = /[-() ]/;
    let numberRegex = /[0-9]/;
    for(let i = 0; i < str.length; i++){
        if(numberRegex.test(str[i])){
            numDigits++;
          }else if(!validChar.test(str[i])){
            return false;
          }
       
    }
    if(numDigits == 11 && str[0]!=1){
        return false;
    }
    if(numDigits == 10 && numberRegex.test(str[2])==false){
      return false;
    }
    let fpindex = str.indexOf("(");
    let spindex = str.indexOf(")");
    console.log(fpindex);
    if((fpindex >= 0 && spindex < 0)||(fpindex < 0 && spindex >= 0)){
        return false; //only has 1 parenthesis.
    }
    //check if parenthesis are placed correctly.
    if(fpindex >= 0){
        if(spindex != fpindex + 4){
            return false;
        }
    }
    
    if(numDigits > 11 || numDigits < 10){
        return false;
    }
    return true;

}
console.log(telephoneCheck(("(555)5(55?)-5555")));