function convertToRoman(num) {
    var hundred = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    var tens = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    var single = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    if(num <= 0){
      return;
    }
    let a;
    let res = [];
    if(num >= 1000){
      a = Math.floor((num/1000));
      num = num - a*1000;
      for(let i = 0; i < a; i++){
          res.push("M");
      }
    }
    if(num > 100){
      a = Math.floor(num/100);
      num = num-100*a;
      res.push(hundred[a-1]); 
    }
    if (num > 10){
      a = Math.floor(num/10);
      num = num - 10*a;
      res.push(tens[a-1]);
    }
    res.push(single[num - 1]);
   return res.join('');
  }
  
  console.log(convertToRoman(1000));