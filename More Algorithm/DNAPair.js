function pairElement(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++){
      
      let item = str[i];
      console.log(arr);
      switch(item){
          case 'A':
            arr.push(["A","T"]);
            break;
  
          case 'T':
            arr.push(["T","A"]);
            break;
          case 'C':
            arr.push(["C","G"]);
            break;
          case 'G':
          arr.push(["G","C"]);
          break;
      }
    }
  
    
  
    return arr;
  }
  
  pairElement("GCG");