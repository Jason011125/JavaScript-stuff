function randomRange(myMin, myMax) {
    // Only change code below this line
    //lower bound: Math.random return 0, then we need to add myMin to random number to guarantee that the least we got is myMin,instead of 0
    //upper:the Max number Math.random*myMax-myMin is not big enough
    //for instance, if max = 10, min = 5, then the random number generated could be anywhere between 0 to 5
    //in order to do so, the Math.floor(Math.random()* X ) should give us that value
    //in this case, X has to be 6, since random will never return 1
    //hence we need to add 1 to the max - min.
    let randomnumber = Math.floor(Math.random()*(myMax - myMin+1))+myMin;
    return randomnumber;
    // Only change code above this line
  }