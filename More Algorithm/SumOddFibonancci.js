function sumFibs(num) {
    let num1 = 1;
    let num2 = 1;
    let sum = 0;
    let oddlist = [1];
    if(num <= 0){
      return 0;
    }
  
    while(num1 < num && num2 < num){
      sum = num1 + num2;
      if(sum%2 == 1 && sum <= num){
        oddlist.push(sum);
      }
      num1 = num2;
      num2 = sum;
  
    }
    sum = 2
    for(let i = 1; i < oddlist.length; i++){
      sum+= oddlist[i];
    }
    console.log(oddlist)
    return sum;
  }
  
  console.log(sumFibs(75025));