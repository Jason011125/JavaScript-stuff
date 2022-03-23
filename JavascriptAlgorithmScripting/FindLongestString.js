function findLongestWordLength(str) {
    let strArr = str.split(' ');
    console.log(strArr);
    let LongestString = 0;
    for (let index = 0; index < strArr.length; index++) {
        if (strArr[index].length > LongestString) {
            LongestString = strArr[index].length;
        }
    }
    return LongestString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");