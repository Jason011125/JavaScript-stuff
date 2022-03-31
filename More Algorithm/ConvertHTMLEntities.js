function convertHTML(str) {
    str = str.split('');
    for(let i = 0; i < str.length; i++){
      if(str[i]=="&"){
        str[i] = "&amp;";
      }else if(str[i] == "<"){
        str[i] = "&lt;";
      }else if(str[i] == ">"){
        str[i] = "&gt;";
      }else if(str[i] == "\""){
        str[i] = "&quot;";
      }else if(str[i] == "\'"){
        str[i] = "&apos;";
      }
  
    }
    return str.join('');
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  //could also use Switch statements