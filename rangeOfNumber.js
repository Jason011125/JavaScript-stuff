function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){
        return [startNum];
    }
    const rangeNumArr = rangeOfNumbers(startNum+1,endNum);
    rangeNumArr.unshift(startNum);
    return rangeNumArr;
}
console.log(rangeOfNumbers(1,3));