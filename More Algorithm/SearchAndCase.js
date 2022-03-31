function myReplace(str, before, after) {
    str = str.split(" ");
    for(let i = 0; i < str.length; i++){
      if(str[i] == before){
        str[i] = str[i].split("");
        if(str[i][0] == str[i][0].toUpperCase()){
          after = after.split("");
          after[0] = after[0].toUpperCase();
          after = after.join("");
          str[i] = after;
          return str.join(" ");
        }
  
        str[i] = after.toLowerCase();
      }
    }
    return str.join(" ");
  }
  
  console.log(myReplace("Let us go to the store", "store", "mall"));

  //Should be Optimized with Slice and IndexOf functions.