function sumPrimes(num) {
    let sum = 0;
    for(let i = 2; i <= num; i++){
      if(isPrime(i)){
        sum+=i;
      }
    }
    return sum;
  }
  function isPrime(num){
    let divisor = 2;
    while(divisor < num){
      if(num%divisor == 0){
        return false;
      }
      divisor++;
    }
    return true;
  }
  console.log(sumPrimes(977));