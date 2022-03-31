function smallestCommons(arr) {
    let max;
    let min;
    if(arr[0]>arr[1]){
       max = arr[0];
       min = arr[1];
    }else{
      max = arr[1];
      min = arr[0];
    }
    let numberOfMultiples = max - min + 1;
    let maximumEntry=1;
    for(let i = min; i <= max; i++){
      maximumEntry *= i;
      
      
    }
    console.log(maximumEntry);
    for(let multiple = max; multiple < maximumEntry; multiple++){
      let count = 0;
      for(let j = min; j <= max; j++){
        if(multiple % j == 0){
          count+=1;
        }
      }
      if(count == numberOfMultiples){
        return multiple;
      }
  
    }
    return maximumEntry;
  }
  
  console.log(smallestCommons([1,5]));